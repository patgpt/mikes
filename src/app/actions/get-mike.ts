'use server'

import {Logger} from '@/lib/logger'
import {z} from 'zod'
import { rateLimit } from '@/lib/rate-limit'

const schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim()
    .transform((val) => val.replace(/[^\w\s'-]/g, '')), // Remove special chars except '-
  email: z.string().email('Please enter a valid email address').toLowerCase().trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim(),
})

type FormData = z.infer<typeof schema>
type State = {error?: string; success?: string; remaining?: number} | null

export async function getMike(prevState: State, formData: FormData) {
  // Rate limiting
  const identifier = formData.email // Use email as identifier
  const { isLimited, remaining } = await rateLimit(identifier)

  if (isLimited) {
    return {
      error: 'Too many requests. Please try again tomorrow.',
      remaining: 0
    }
  }

  const validatedFields = schema.safeParse({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  })

  if (!validatedFields.success) {
    const errors = validatedFields.error.issues
    return {
      error: errors[0].message || 'Invalid form data',
    }
  }

  const sanitizedData = validatedFields.data

  try {
    Logger.info('Sending message', {
      email: sanitizedData.email,
      name: sanitizedData.name,
    })
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {success: 'Message sent successfully!', remaining}
  } catch (error) {
    Logger.error('Failed to send message', error as Error)
    return {error: 'Failed to send message'}
  }
}
