type FormTextareaProps = {
  label: string
  name: string
  rows?: number
  required?: boolean
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextarea({label, rows = 4, required, error, ...props}: FormTextareaProps) {
  const id = `textarea-${props.name}`
  return (
    <div className='form-control'>
      <label className='label' htmlFor={id}>
        <span className='label-text'>{label}</span>
      </label>
      <textarea
        id={id}
        className={`textarea textarea-bordered mb-4 w-full ${error ? 'textarea-error' : ''}`}
        rows={rows}
        aria-required={required}
        aria-label={label}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  )
}
