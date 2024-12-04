'use client'
import Form from 'next/form'
import {useFormValidation} from '@/hooks/useFormValidation'
import {type ContactFormFields} from '@/lib/schemas'
import FormInput from './form-input'
import FormTextarea from './form-textarea'
import SubmitButton from './submit-button'
import {getMike} from '@/app/actions/get-mike'
import {useActionState} from 'react'
import LoadingSkeleton from './loading-skeleton'
import {useFormStatus} from 'react-dom'
import Toast from '@/components/ui/toast'

export default function ContactForm() {
  const [state, formAction] = useActionState(getMike, null)
  const {errors, validateField} = useFormValidation()
  const {pending} = useFormStatus()

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

  if (pending) {
    return <LoadingSkeleton />
  }

  return (
    <>
      {state?.error && (
        <Toast
          message={state.error}
          type='error'
          remaining={state.remaining}
          position='bottom-left'
        />
      )}
      {state?.success && (
        <Toast
          message={state.success}
          type='success'
          remaining={state.remaining}
          position='bottom-right'
        />
      )}
      <Form action={handleFormAction} className='card mx-auto w-96 bg-base-100 p-6 shadow-xl'>
        <h2 className='prose prose-2xl card-title mb-4'>Get Mike</h2>
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
