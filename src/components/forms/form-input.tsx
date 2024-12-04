type FormInputProps = {
  label: string
  name: string
  type?: 'text' | 'email'
  required?: boolean
  error?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({ label, required, error, disabled, ...props }: FormInputProps) {
  const id = `input-${props.name}`
  return (
    <div className='form-control'>
      <label className='label' htmlFor={id}>
        <span className='label-text'>{label}</span>
      </label>
      <input
        id={id}
        className={`input input-bordered w-full ${error ? 'input-error' : ''}`}
        aria-required={required}
        aria-label={label}
        aria-invalid={!!error}
        disabled={disabled}
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