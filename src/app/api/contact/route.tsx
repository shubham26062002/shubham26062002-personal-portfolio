import { supabase } from '@/libs/supabase-client'
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, emailMessageGenerator } from '@/libs/email-sender'

export const POST = async (request: NextRequest) => {
    try {
        const { firstName, lastName, email, subject, message } = await request.json()

        const { error } = await supabase
            .from('contact_form_entries')
            .insert({
                first_name: firstName,
                last_name: lastName,
                email: email,
                subject: subject,
                message: message,
            })

        if (!error) {
            const emailMessage = emailMessageGenerator(firstName, lastName, email, subject, message)

            const emailResponse = await sendEmail(email, emailMessage)

            if (emailResponse?.response.includes('250 2.0.0 OK')) {
                return NextResponse.json({
                    message: 'Message sent successfully!',
                }, {
                    status: 200,
                })
            }
        }
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
        }, {
            status: 500,
        })
    }
}