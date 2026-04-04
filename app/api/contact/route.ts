import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Strict schema — defines exactly what data is valid
const contactSchema = z.object({
  firstName:      z.string().min(1),
  lastName:       z.string().min(1),
  email:          z.string().email(),
  phone:          z.string().optional(),
  company:        z.string().optional(),
  role:           z.string().optional(),
  orgType:        z.string().optional(),
  industry:       z.string().optional(),
  projectType:    z.string().optional(),
  timeline:       z.string().optional(),
  engagement:     z.string().optional(),
  budget:         z.string().optional(),
  description:    z.string().optional(),
  priorAgency:    z.string().optional(),
  additionalInfo: z.string().optional(),
  ndaRequired:    z.union([z.boolean(), z.string()]).optional(),
  heardFrom:      z.string().optional(),
  website:        z.string().optional(), // honeypot field
});

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
🏛 <b>Org Type:</b> ${d.orgType || "—"}`;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Honeypot check — bots fill hidden fields, humans don't
    if (data.website) {
      return NextResponse.json({ success: true }); // fake success so bot thinks it worked
    }

    // Zod validation — reject garbage data with a generic message
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input. Please check your details." },
        { status: 400 }
      );
    }

    // Send Telegram notification
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
