import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})
const socialLinks = [
  {
    id: "whatsapp",
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
             <path d="M20.52 3.48A11.78 11.78 0 0012 0 11.94 11.94 0 000 12a11.84 11.84 0 001.69 6L0 24l6.17-1.62A11.93 11.93 0 0012 24a11.94 11.94 0 0012-12 11.78 11.78 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.08-1.39l-.36-.21-3.65.96.97-3.56-.24-.37A9.92 9.92 0 1122 12a9.84 9.84 0 01-10 10zm5.44-7.36c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.66.15-.75.97-.92 1.17-.34.22-.64.07a8.18 8.18 0 01-2.4-1.48 9 9 0 01-1.66-2.07c-.17-.3 0-.46.13-.61s.3-.35.45-.52a1.93 1.93 0 00.3-.52.56.56 0 00-.02-.54c-.07-.15-.66-1.6-.91-2.2s-.48-.48-.66-.49h-.57a1.11 1.11 0 00-.8.37A3.36 3.36 0 006 10.73a5.84 5.84 0 001.24 3.08 13.34 13.34 0 004.05 3.67 13.17 13.17 0 003.15 1.27 3 3 0 002.88-.47 2.34 2.34 0 00.71-1.56c.1-.15.1-.57-.2-.72z"/>
           </svg>`,
    href: "https://wa.me/212663108538",
  },
  {
    id: "email",
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
             <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
           </svg>`,
    href: "mailto:brandflox@gmail.com",
  },
  {
    id: "instagram",
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.965.24 2.417.403a4.918 4.918 0 011.675 1.035 4.918 4.918 0 011.034 1.675c.164.452.348 1.247.403 2.417.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.965-.403 2.417a4.918 4.918 0 01-1.035 1.675 4.918 4.918 0 01-1.675 1.034c-.452.164-1.247.348-2.417.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.965-.24-2.417-.403a4.918 4.918 0 01-1.675-1.035 4.918 4.918 0 01-1.034-1.675c-.164-.452-.348-1.247-.403-2.417C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.965.403-2.417a4.918 4.918 0 011.035-1.675A4.918 4.918 0 015.346 2.636c.452-.164 1.247-.348 2.417-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.773.127 4.832.309 4.052.548c-.86.273-1.59.634-2.318 1.362C1.63 2.64 1.269 3.37.996 4.23.757 5.01.575 5.95.518 7.23.46 8.51.448 8.914.448 12c0 3.086.012 3.49.07 4.77.057 1.28.239 2.22.478 3 .273.86.634 1.59 1.362 2.318.728.728 1.458 1.089 2.318 1.362.78.239 1.72.421 3 .478 1.28.058 1.684.07 4.77.07s3.49-.012 4.77-.07c1.28-.057 2.22-.239 3-.478.86-.273 1.59-.634 2.318-1.362.728-.728 1.089-1.458 1.362-2.318.239-.78.421-1.72.478-3 .058-1.28.07-1.684.07-4.77s-.012-3.49-.07-4.77c-.057-1.28-.239-2.22-.478-3-.273-.86-.634-1.59-1.362-2.318C21.632.63 20.902.269 20.042.037c-.78-.239-1.72-.421-3-.478C15.49.012 15.086 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
           </svg>`,
    href: "https://www.instagram.com/brandflox",
  },
];

// SVG Icons for professional minimal design
const icons = {
  user: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
   phone:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  building:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M9 9h6M9 13h6"/></svg>',
  message:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  whatsapp:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M20.52 3.48A11.78 11.78 0 0012 0 11.94 11.94 0 000 12a11.84 11.84 0 001.69 6L0 24l6.17-1.62A11.93 11.93 0 0012 24a11.94 11.94 0 0012-12 11.78 11.78 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.08-1.39l-.36-.21-3.65.96.97-3.56-.24-.37A9.92 9.92 0 1122 12a9.84 9.84 0 01-10 10zm5.44-7.36c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.66.15-.75.97-.92 1.17-.34.22-.64.07a8.18 8.18 0 01-2.4-1.48 9 9 0 01-1.66-2.07c-.17-.3 0-.46.13-.61s.3-.35.45-.52a1.93 1.93 0 00.3-.52.56.56 0 00-.02-.54c-.07-.15-.66-1.6-.91-2.2s-.48-.48-.66-.49h-.57a1.11 1.11 0 00-.8.37A3.36 3.36 0 006 10.73a5.84 5.84 0 001.24 3.08 13.34 13.34 0 004.05 3.67 13.17 13.17 0 003.15 1.27 3 3 0 002.88-.47 2.34 2.34 0 00.71-1.56c.1-.15.1-.57-.2-.72z"/></svg>',
  email:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  instagram:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.965.24 2.417.403a4.918 4.918 0 011.675 1.035 4.918 4.918 0 011.034 1.675c.164.452.348 1.247.403 2.417.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.965-.403 2.417a4.918 4.918 0 01-1.035 1.675 4.918 4.918 0 01-1.675 1.034c-.452.164-1.247.348-2.417.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.965-.24-2.417-.403a4.918 4.918 0 01-1.675-1.035 4.918 4.918 0 01-1.034-1.675c-.164-.452-.348-1.247-.403-2.417C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.965.403-2.417a4.918 4.918 0 011.035-1.675A4.918 4.918 0 015.346 2.636c.452-.164 1.247-.348 2.417-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.773.127 4.832.309 4.052.548c-.86.273-1.59.634-2.318 1.362C1.63 2.64 1.269 3.37.996 4.23.757 5.01.575 5.95.518 7.23.46 8.51.448 8.914.448 12c0 3.086.012 3.49.07 4.77.057 1.28.239 2.22.478 3 .273.86.634 1.59 1.362 2.318.728.728 1.458 1.089 2.318 1.362.78.239 1.72.421 3 .478 1.28.058 1.684.07 4.77.07s3.49-.012 4.77-.07c1.28-.057 2.22-.239 3-.478.86-.273 1.59-.634 2.318-1.362.728-.728 1.089-1.458 1.362-2.318.239-.78.421-1.72.478-3 .058-1.28.07-1.684.07-4.77s-.012-3.49-.07-4.77c-.057-1.28-.239-2.22-.478-3-.273-.86-.634-1.59-1.362-2.318C21.632.63 20.902.269 20.042.037c-.78-.239-1.72-.421-3-.478C15.49.012 15.086 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>'
};

function getOwnerEmailTemplate(
  data: {
    name: string
    email: string
    phone: string
    company: string
    message: string
  },
  language: string,
) {
  const content = {
    en: {
      title: "New Contact Form Submission",
      labels: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
      },
    },
    fr: {
      title: "Nouvelle Soumission du Formulaire de Contact",
      labels: {
        name: "Nom Complet",
        email: "Email",
        phone: "Téléphone",
        company: "Entreprise",
        message: "Message",
      },
    },
  }

  const t = content[language as keyof typeof content] || content.en

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${t.title}</title>
        <style>
          body { margin: 0; padding: 0; }
          .icon { display: inline-block; vertical-align: middle; margin-right: 8px; color: #000000; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #f5f5f5;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header with Logo -->
          <div style="background: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 2px solid #000000;">
           <img src="cid:logo" alt="Brandflox" style="max-height: 50px; margin-bottom: 12px;">

            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #000000; letter-spacing: 0.5px;">BRANDFLOX</h1>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px; color: #1a1a1a;">
            <h2 style="margin: 0 0 25px 0; font-size: 24px; font-weight: 700; color: #000000;">${t.title}</h2>
            
            <!-- Info Grid -->
            <div style="margin-bottom: 35px;">
              <div style="margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid #e0e0e0;">
                <p style="margin: 0; font-size: 11px; color: #666666; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
                  <span class="icon">${icons.user}</span>${t.labels.name}
                </p>
                <p style="margin: 8px 0 0 0; font-size: 15px; font-weight: 600; color: #000000;">${data.name}</p>
              </div>

              <div style="margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid #e0e0e0;">
                <p style="margin: 0; font-size: 11px; color: #666666; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
                  <span class="icon">${icons.email}</span>${t.labels.email}
                </p>
                <p style="margin: 8px 0 0 0; font-size: 15px; color: #000000;">
                  <a href="mailto:${data.email}" style="color: #000000; text-decoration: none; font-weight: 600;">${data.email}</a>
                </p>
              </div>

              <div style="margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid #e0e0e0;">
                <p style="margin: 0; font-size: 11px; color: #666666; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
                  <span class="icon">${icons.phone}</span>${t.labels.phone}
                </p>
                <p style="margin: 8px 0 0 0; font-size: 15px; font-weight: 600; color: #000000;">${data.phone}</p>
              </div>

              <div style="margin-bottom: 0;">
                <p style="margin: 0; font-size: 11px; color: #666666; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
                  <span class="icon">${icons.building}</span>${t.labels.company}
                </p>
                <p style="margin: 8px 0 0 0; font-size: 15px; font-weight: 600; color: #000000;">${data.company || "Not provided"}</p>
              </div>
            </div>

            <!-- Message -->
            <div style="background: #fafafa; padding: 24px; border-radius: 6px; border-left: 3px solid #000000; margin-bottom: 30px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #666666; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
                <span class="icon">${icons.message}</span>${t.labels.message}
              </p>
              <p style="margin: 0; font-size: 14px; color: #1a1a1a; line-height: 1.7; white-space: pre-wrap; word-break: break-word;">${data.message}</p>
            </div>
          </div>

          <!-- Social Links -->
       <!-- Social Links -->
            <div style="background-color: #fafafa; padding: 25px 30px; border-top: 1px solid #e0e0e0; text-align: center;">
              <p style="margin: 0 0 15px 0; font-size: 12px; color: #666666; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
                Connect With Us
              </p>
            <div style="text-align: center; padding: 20px 0; background-color: #fafafa;">
              <a href="https://wa.me/212663108538" style="text-decoration: none; color: #000000; margin-right: 15px;">WhatsApp</a>
              <a href="mailto:brandflox@gmail.com" style="text-decoration: none; color: #000000; margin-right: 15px;">Email</a>
              <a href="https://www.instagram.com/brandflox" style="text-decoration: none; color: #000000;">Instagram</a>
            </div>

            </div>




          <!-- Footer -->
          <div style="background-color: #000000; padding: 25px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #ffffff;">© 2025 Brandflox. All rights reserved.</p>
            <p style="margin: 0; font-size: 11px; color: #999999;">Automated message from contact form</p>
          </div>
        </div>
      </body>
    </html>
  `
}

function getClientEmailTemplate(language: string) {
  const content = {
    en: {
      greeting: "Thank You for Contacting Brandflox",
      subtitle: "We've received your message",
      message:
        "We appreciate you reaching out to us. Our team will carefully review your inquiry and get back to you within <strong>24 hours</strong>.",
      nextSteps: "What Happens Next?",
      steps: [
        "Our team will review your message",
        "We'll assess your project needs",
        "You'll hear from us within 24 hours",
      ],
      urgentText: "If you have any urgent questions in the meantime, please reply to this email.",
      closing: "Best regards,",
      team: "The Brandflox Team",
    },
    fr: {
      greeting: "Merci de Nous Avoir Contactés",
      subtitle: "Nous avons reçu votre message",
      message:
        "Nous apprécions que vous nous ayez contactés. Notre équipe examinera attentivement votre demande et vous répondra dans les <strong>24 heures</strong>.",
      nextSteps: "Que se passe-t-il ensuite ?",
      steps: [
        "Notre équipe examinera votre message",
        "Nous évaluerons vos besoins de projet",
        "Vous entendrez parler de nous dans les 24 heures",
      ],
      urgentText: "Si vous avez des questions urgentes, veuillez répondre à cet email.",
      closing: "Cordialement,",
      team: "L'équipe Brandflox",
    },
  }

  const t = content[language as keyof typeof content] || content.en

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${t.greeting}</title>
        <style>
          body { margin: 0; padding: 0; }
          .icon { display: inline-block; vertical-align: middle; margin-right: 8px; color: #000000; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #f5f5f5;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header with Logo -->
          <div style="background: #ffffff; padding: 50px 30px; text-align: center; border-bottom: 2px solid #000000;">
          <img src="cid:logo" alt="Brandflox" style="max-height: 50px; margin-bottom: 12px;">

            <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: #000000; letter-spacing: 0.5px;">BRANDFLOX</h1>
            <p style="margin: 8px 0 0 0; font-size: 15px; color: #666666;">${t.subtitle}</p>
          </div>

          <!-- Content -->
          <div style="padding: 40px 30px; color: #1a1a1a;">
            <h2 style="margin: 0 0 12px 0; font-size: 26px; font-weight: 700; color: #000000;">${t.greeting}</h2>
            <p style="margin: 0 0 25px 0; font-size: 15px; color: #555555; line-height: 1.6;">${t.message}</p>

            <!-- Next Steps -->
            <div style="background: #fafafa; padding: 24px; border-radius: 6px; border-left: 3px solid #000000; margin-bottom: 30px;">
              <p style="margin: 0 0 15px 0; font-size: 13px; font-weight: 700; color: #000000;">→ ${t.nextSteps}</p>
              <ol style="margin: 0; padding-left: 20px; font-size: 14px; color: #1a1a1a; line-height: 1.8;">
                ${t.steps.map((step) => `<li style="margin-bottom: 10px;">${step}</li>`).join("")}
              </ol>
            </div>

            <p style="margin: 0 0 30px 0; font-size: 14px; color: #1a1a1a; line-height: 1.6;">${t.urgentText}</p>

            <p style="margin: 0 0 8px 0; font-size: 15px; color: #1a1a1a;">${t.closing}</p>
            <p style="margin: 0 0 30px 0; font-size: 15px; font-weight: 700; color: #000000;">${t.team}</p>
          </div>

          <!-- Social Links -->
          <div style="background-color: #fafafa; padding: 25px 30px; border-top: 1px solid #e0e0e0; text-align: center;">
              <p style="margin: 0 0 15px 0; font-size: 12px; color: #666666; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">
                Connect With Us
              </p>
            <div style="text-align: center; padding: 20px 0; background-color: #fafafa;">
              <a href="https://wa.me/212663108538" style="text-decoration: none; color: #000000; margin-right: 15px;">WhatsApp</a>
              <a href="mailto:brandflox@gmail.com" style="text-decoration: none; color: #000000; margin-right: 15px;">Email</a>
              <a href="https://www.instagram.com/brandflox" style="text-decoration: none; color: #000000;">Instagram</a>
            </div>

            </div>

          <!-- Footer -->
          <div style="background-color: #000000; padding: 25px 30px; text-align: center;">
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #ffffff;">© 2025 Brandflox. All rights reserved.</p>
            <p style="margin: 0; font-size: 11px; color: #999999;">Contact confirmation email</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    console.log("[BrandFlox] Received contact form submission")

    const { name, email, phone, company, message, language = "en" } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.log("[BrandFlox] Validation failed - missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("[BrandFlox] Validation failed - invalid email format")
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.OWNER_EMAIL) {
      console.log("[BrandFlox] Environment variables missing")
      return NextResponse.json({ error: "Server configuration error - contact administrator" }, { status: 500 })
    }

    console.log("[BrandFlox] Attempting to send owner email to:", process.env.OWNER_EMAIL)

    // Send owner email in the specified language
 await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.OWNER_EMAIL,
  subject: language === "fr"
    ? `Nouvelle Soumission du Formulaire de ${name}`
    : `New Contact Form Submission from ${name}`,
  html: getOwnerEmailTemplate({ name, email, phone, company, message }, language),
  attachments: [
    {
      filename: "whitelogo.png",
      path: "./public/images/whitelogo.png", // relative path to your project
      cid: "logo" // matches the <img src="cid:logo">
    }
  ]
})

    console.log("[BrandFlox] Owner email sent successfully")
    console.log("[BrandFlox] Attempting to send confirmation email to:", email)

    // Send confirmation email to client in their preferred language
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: language === "fr" ? "Merci de Nous Avoir Contactés" : "Thank You for Contacting Brandflox",
  html: getClientEmailTemplate(language),
  attachments: [
    {
      filename: "whitelogo.png",
      path: "./public/images/whitelogo.png",
      cid: "logo"
    }
  ]
})

    console.log("[BrandFlox] Confirmation email sent successfully")

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("[BrandFlox] Email error:", errorMessage)
    console.error("[BrandFlox] Full error:", error)

    return NextResponse.json({ error: `Failed to send email: ${errorMessage}` }, { status: 500 })
  }
}
