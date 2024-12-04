type FormTextareaProps = {
  label: string
  name: string
  rows?: number
  required?: boolean
}

export default function FormTextarea({label, rows = 4, required, ...props}: FormTextareaProps) {
  const id = `textarea-${props.name}`
  return (
    <div className='form-control'>
      <label className='label' htmlFor={id}>
        <span className='label-text'>{label}</span>
      </label>
      <textarea
        id={id}
        className='textarea textarea-bordered mb-4 w-full'
        rows={rows}
        aria-required={required}
        aria-label={label}
        {...props}
      />
    </div>
  )
}
