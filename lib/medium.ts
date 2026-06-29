export interface Article {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
  pubDate: string;
  readTime: number;
}

const MEDIUM_FEED_URL = "https://medium.com/feed/@sachhsoft";
const FALLBACK_IMAGE =
  "https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png";

function extractBetween(xml: string, tag: string): string {
  const cdataMatch = xml.match(
    new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`)
  );
  if (cdataMatch) return cdataMatch[1];
  const plainMatch = xml.match(
    new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`)
  );
  return plainMatch ? plainMatch[1] : "";
}

function extractAllBetween(xml: string, tag: string): string[] {
  const results: string[] = [];
  const regex = new RegExp(
    `<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}>([\\s\\S]*?)</${tag}>`,
    "g"
  );
  let match;
  while ((match = regex.exec(xml)) !== null) {
    results.push(match[1] ?? match[2]);
  }
  return results;
}

function extractImage(content: string): string {
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : FALLBACK_IMAGE;
}

function extractText(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function parseItem(itemXml: string): Article {
  const title = extractBetween(itemXml, "title");
  const link = extractBetween(itemXml, "link");
  const content = extractBetween(itemXml, "content:encoded");
  const pubDate = extractBetween(itemXml, "pubDate");
  const categories = extractAllBetween(itemXml, "category");

  const plainText = extractText(content);
  const description = plainText.substring(0, 150).trim() + "...";
  const readTime = Math.max(1, Math.ceil(plainText.split(/\s+/).length / 200));
  const thumbnail = extractImage(content);

  return { title, link, thumbnail, description, categories, pubDate, readTime };
}

export async function fetchMediumArticles(max = 10): Promise<Article[]> {
  const res = await fetch(MEDIUM_FEED_URL, { next: { revalidate: 3600 } });
  if (!res.ok) return [];

  const xml = await res.text();
  const items = xml.match(/<item>[\s\S]*?<\/item>/g);
  if (!items) return [];

  return items.slice(0, max).map(parseItem);
}
