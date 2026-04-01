import { NextRequest, NextResponse } from "next/server";

function formatTelegramMessage(d: Record<string, string>) {
  return `🔔 <b>New Project Inquiry!</b>

👤 <b>Name:</b> ${d.firstName} ${d.lastName}
📧 <b>Email:</b> ${d.email}
📱 <b>Phone:</b> ${d.phone || "—"}
🏢 <b>Company:</b> ${d.company || "—"}
💼 <b>Role:</b> ${d.role || "—"}

🏗 <b>Project Type:</b> ${d.projectType || "—"}
🏭 <b>Industry:</b> ${d.industry || "—"}
📋 <b>Engagement:</b> ${d.engagement || "—"}
💰 <b>Budget:</b> ${d.budget || "—"}
⏰ <b>Timeline:</b> ${d.timeline || "—"}

📝 <b>Description:</b>
${d.description || "—"}

🔍 <b>Heard From:</b> ${d.heardFrom || "—"}
🔒 <b>NDA Required:</b> ${d.ndaRequired || "No"}
🏛 <b>Org Type:</b> ${d.orgType || "—"}

<i>Submitted via sachhsoft.vercel.app</i>`;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // 1 ── Forward to Google Apps Script (Sheets + Email)
    // Apps Script returns a 302 redirect — we use redirect:"follow" and
    // treat any response as success since the script runs regardless.
    const appsScriptUrl = process.env.APPS_SCRIPT_URL;
    if (appsScriptUrl) {
      try {
        await fetch(appsScriptUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(data),
          redirect: "follow",
        });
      } catch (err) {
        console.error("Apps Script error:", err);
      }
    }

    // 2 ── Send Telegram notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      try {
        const tgRes = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: formatTelegramMessage(data),
              parse_mode: "HTML",
            }),
          }
        );
        const tgJson = await tgRes.json();
        if (!tgJson.ok) {
          console.error("Telegram error:", tgJson);
        }
      } catch (err) {
        console.error("Telegram fetch error:", err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Submission failed" },
      { status: 500 }
    );
  }
}
