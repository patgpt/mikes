'use client'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="btn btn-primary w-full"
      disabled={pending}
      aria-label="Send message"
      aria-busy={pending}
    >
      {pending ? <span className="loading loading-spinner" aria-hidden="true" /> : 'Send Message'}
    </button>
  )
}