import nodemailer from 'nodemailer'

const EMAIL_SUBJECT: string = "Thanks for getting in touch."
const RESUME_PATH: string = "https://ggrnqthpwlzyvvwymqrp.supabase.co/storage/v1/object/public/assets/Shubham_Patel_Resume.pdf"

export const emailMessageGenerator = (firstName: string, lastName: string, email: string, subject: string, message: string) => {
    return `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align:left;">
            <h2>Mr/Mrs. ${firstName} ${lastName}!</h2>
            <h2>Thanks from me for getting in touch!</h2>
            <p>I'll get back to you as soon as possible. Meanwhile, you can explore my work and my social profiles for more information. You can also check out my resume by <a href="${RESUME_PATH}">clicking here.</a></p>
            <br />
            <p>Here's a copy of your message:</p>
            <br />
            <div>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
            <br />
            <p><b><u>This is an automated email. Please do not reply to this email.</u></b></p>
            <br />
            <p>Thanks,</p>
            <p>Shubham Patel</p>
        </div>
    `
}

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_NODEMAILER_HOST as string,
    port: parseInt(process.env.NEXT_PUBLIC_NODEMAILER_PORT as string),
    secure: true,
    auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_USER as string,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD as string,
    },
    tls: {
        rejectUnauthorized: false,
    },
})

export const sendEmail = async (to: string, htmlMessage: string) => {
    try {
        const info = await transporter.sendMail({
            from: `"${process.env.NEXT_PUBLIC_NODEMAILER_NAME}" <${process.env.NEXT_PUBLIC_NODEMAILER_USER}>`,
            to: to,
            subject: EMAIL_SUBJECT,
            html: htmlMessage,
        })

        return info
    } catch (error: any) {
        console.log('Error occurred while sending response email.')
        console.log(error)
    }
}