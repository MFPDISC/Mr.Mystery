/**
 * GHL (GoHighLevel) Integration Utilities
 * Mr. Mystery Website - BROADCAST
 * 
 * This file provides helper functions for integrating with GoHighLevel
 * for lead capture, SMS automation, and customer lifecycle management.
 */

export interface TransmitFormData {
    email: string
    phone?: string
    name?: string
    location?: string
}

export interface GHLContact {
    email: string
    phone?: string
    firstName?: string
    lastName?: string
    source: string
    tags?: string[]
    customFields?: Record<string, any>
    location?: string // Mapping custom location if needed or putting in customFields
}

/**
 * Submit contact to GHL via webhook
 * 
 * SETUP REQUIRED:
 * 1. Create a GHL webhook in your GHL account
 * 2. Set the webhook URL as an environment variable: NEXT_PUBLIC_GHL_WEBHOOK_URL
 * 3. Configure the webhook to create/update contacts
 * 
 * @param formData - Form data from the Transmit section
 * @param source - Optional source string to override default
 * @returns Promise with submission result
 */
export async function submitToGHL(formData: TransmitFormData, source: string = 'Mr.Mystery Website - Transmit Section'): Promise<{
    success: boolean
    message: string
    transmissionCode?: string
}> {
    try {
        const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL

        if (!webhookUrl) {
            console.warn('GHL webhook URL not configured. Simulating submission.')
            return {
                success: true,
                message: 'Signal received (demo mode)',
                transmissionCode: generateTransmissionCode(),
            }
        }

        const payload: GHLContact = {
            email: formData.email,
            phone: formData.phone,
            firstName: formData.name, // Simple mapping, GHL might need split name
            source: source,
            tags: ['Lead: Signal Received', 'Broadcast Subscriber'],
            customFields: {
                subscription_date: new Date().toISOString(),
                source_page: 'CLASSIFIED',
                location: formData.location
            },
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        if (!response.ok) {
            throw new Error(`GHL webhook failed: ${response.statusText}`)
        }

        return {
            success: true,
            message: 'Transmission received successfully',
            transmissionCode: generateTransmissionCode(),
        }
    } catch (error) {
        console.error('GHL submission error:', error)
        return {
            success: false,
            message: 'Transmission failed. Please try again.',
        }
    }
}

/**
 * Generate a unique transmission code for confirmation
 */
function generateTransmissionCode(): string {
    return Math.random().toString(36).substring(2, 10).toUpperCase()
}

/**
 * Trigger SMS automation via GHL
 * 
 * This function is called after successful form submission to trigger
 * the "Late Night Transmission" SMS sequence.
 * 
 * SETUP REQUIRED:
 * 1. Create an SMS workflow in GHL
 * 2. Set up a webhook trigger for the workflow
 * 3. Add the webhook URL as: NEXT_PUBLIC_GHL_SMS_TRIGGER_URL
 * 
 * @param email - User's email address
 */
export async function triggerSMSSequence(email: string): Promise<void> {
    try {
        const smsWebhookUrl = process.env.NEXT_PUBLIC_GHL_SMS_TRIGGER_URL

        if (!smsWebhookUrl) {
            console.warn('GHL SMS webhook not configured')
            return
        }

        await fetch(smsWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                trigger: 'late_night_transmission',
                timestamp: new Date().toISOString(),
            }),
        })
    } catch (error) {
        console.error('SMS trigger error:', error)
    }
}

/**
 * Track compatibility test responses
 * 
 * This submits the multi-step compatibility test answers to GHL
 * for audience segmentation.
 * 
 * @param email - User's email
 * @param answers - Compatibility test answers
 */
export async function submitCompatibilityTest(
    email: string,
    answers: {
        location?: string
        musicPreference?: 'melodic' | 'aggressive' | 'lofi'
        birthYear?: string
        favoriteTrack?: string
    }
): Promise<void> {
    try {
        const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL

        if (!webhookUrl) {
            console.warn('GHL webhook not configured for compatibility test')
            return
        }

        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                customFields: {
                    location: answers.location,
                    music_preference: answers.musicPreference,
                    birth_year: answers.birthYear,
                    favorite_track: answers.favoriteTrack,
                },
                tags: [
                    answers.musicPreference && `Preference: ${answers.musicPreference}`,
                    answers.favoriteTrack && `Track: ${answers.favoriteTrack}`,
                ].filter(Boolean),
            }),
        })
    } catch (error) {
        console.error('Compatibility test submission error:', error)
    }
}

/**
 * GHL Configuration Guide
 * 
 * STEP 1: WEBHOOK SETUP
 * ----------------------
 * 1. Go to Settings > Integrations > Webhooks in your GHL account
 * 2. Create a new webhook for "Transmit Form Submission"
 * 3. Copy the webhook URL
 * 4. Create a .env.local file in your project root:
 * 
 *    NEXT_PUBLIC_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
 *    NEXT_PUBLIC_GHL_SMS_TRIGGER_URL=https://services.leadconnectorhq.com/hooks/...
 * 
 * STEP 2: CUSTOM FIELDS
 * ---------------------
 * Create these custom fields in GHL:
 * - subscription_date (Date)
 * - source_page (Text)
 * - location (Text)
 * - music_preference (Dropdown: melodic, aggressive, lofi)
 * - birth_year (Number)
 * - favorite_track (Text)
 * 
 * STEP 3: TAGS
 * ------------
 * Create these tags in GHL:
 * - "Lead: Signal Received"
 * - "Broadcast Subscriber"
 * - "Preference: melodic"
 * - "Preference: aggressive"
 * - "Preference: lofi"
 * - "Track: [track name]"
 * 
 * STEP 4: SMS WORKFLOW
 * --------------------
 * 1. Create a new workflow called "Late Night Transmission"
 * 2. Trigger: Webhook (use NEXT_PUBLIC_GHL_SMS_TRIGGER_URL)
 * 3. Actions:
 *    - Wait 2 hours
 *    - Send SMS: "This is Mr.Mystery. You're now tuned into the BROADCAST. 
 *                 Check your email for the first transmission. 
 *                 Reply STOP to unsubscribe."
 *    - Wait 3 days
 *    - Send SMS: "New frequencies detected. Unreleased cut dropping soon. 
 *                 Stay tuned to the signal."
 * 
 * STEP 5: EMAIL AUTOMATION
 * ------------------------
 * Set up email sequences for:
 * - Welcome email (immediate)
 * - Demo snippet #1 (Day 2)
 * - Behind the scenes content (Day 5)
 * - Pre-release announcement (Day 7)
 */
