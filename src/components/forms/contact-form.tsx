'use client'
import Form from 'next/form'
import { useFormValidation } from '@/hooks/useFormValidation'
import { type ContactFormFields } from '@/lib/schemas'

import FormInput from './form-input'
import FormTextarea from './form-textarea'
import SubmitButton from './submit-button'
import FormMessage from '@/components/forms/form-message'
import {getMike} from '@/app/actions/get-mike'
import {useActionState} from 'react'

export default function ContactForm() {
  const [state, formAction] = useActionState(getMike, null)
  const { errors, validateField } = useFormValidation()

  const handleFormAction = (formData: FormData) => {
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }
    return formAction(payload)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name as ContactFormFields, e.target.value)
  }

  return (
    <>
      <Form action={handleFormAction} className='card w-96 bg-base-100 p-6 shadow-xl'>
        <h2 className='prose prose-2xl card-title mb-4'>Get Mike</h2>
        <FormMessage
          error={state?.error}
          success={state?.success}
          remaining={state?.remaining}
        />
        <FormInput
          label='Name'
          name='name'
          type='text'
          required
          onChange={handleChange}
          error={errors.name}
        />
        <FormInput
          label='Email'
          name='email'
          type='email'
          required
          onChange={handleChange}
          error={errors.email}
        />
        <FormTextarea
          label='Message'
          name='message'
          required
          onChange={handleChange}
          error={errors.message}
        />
        <SubmitButton />
      </Form>
    </>
  )
}
