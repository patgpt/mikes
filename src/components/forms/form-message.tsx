type FormMessageProps = {
  error?: string
  success?: string
  remaining?: number
}

export default function FormMessage({ error, success, remaining }: FormMessageProps) {
  if (!error && !success) return null

  return (
    <>
      {error && (
        <div
          className='alert alert-error mb-4 text-base-content'
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}
      {success && (
        <div
          className='alert alert-success mb-4 text-base-content'
          role="status"
          aria-live="polite"
        >
          {success}
          {remaining !== undefined && (
            <small className="block mt-1">
              {remaining} submissions remaining today
            </small>
          )}
        </div>
      )}
    </>
  )
}