import { useState } from 'react'
import { z } from 'zod'
import { contactSchema, type ContactFormFields } from '@/lib/schemas'

export function useFormValidation() {
  const [errors, setErrors] = useState<Partial<Record<ContactFormFields, string>>>({})

  const validateField = (name: ContactFormFields, value: string) => {
    try {
      const field = { [name]: value } as Record<ContactFormFields, string>
      const partial = z.object({ [name]: contactSchema.shape[name] })
      partial.parse(field)
      setErrors(prev => ({ ...prev, [name]: '' }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.issues[0].message }))
      }
    }
  }

  return { errors, validateField }
}