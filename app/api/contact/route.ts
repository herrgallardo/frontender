import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const formData = await request.json()

    // Validate required fields
    const { name, email, subject, message } = formData

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Format email content
    const emailContent = `
      ${process.env.EMAIL_INTRO || "New contact form submission:"}
      
      Name: ${name}
      Email: ${email}
      Phone: ${formData.phone || "Not provided"}
      Subject: ${subject}
      
      Message:
      ${message}
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "New Frontender <contact@resend.dev>",
      to: process.env.CONTACT_EMAIL || "gallardogirela@gmail.com",
      subject: `New Contact Form: ${subject}`,
      text: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      throw new Error("Failed to send email")
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
        id: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        error:
          "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    )
  }
}
