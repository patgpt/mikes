type FormInputProps = {
  label: string
  name: string
  type?: 'text' | 'email'
  required?: boolean
}

export default function FormInput({ label, required, ...props }: FormInputProps) {
  const id = `input-${props.name}`
  return (
    <div className='form-control'>
      <label className='label' htmlFor={id}>
        <span className='label-text'>{label}</span>
      </label>
      <input
        id={id}
        className='input input-bordered w-full'
        aria-required={required}
        aria-label={label}
        {...props}
      />
    </div>
  )
}