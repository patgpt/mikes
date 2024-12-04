'use client'

import { FaPhone } from 'react-icons/fa6'

export default function ClickToCall({ phone = '(555) 123-4567' }) {
  return (
    <div className='card glass shadow-xl w-72'>
      <div className='card-body items-center text-center p-4'>
        <h2 className='card-title'>Call Us Directly</h2>
        <p className='text-lg'>We&apos;re here to help!</p>
        <div className='card-actions'>
          <a href={`tel:${phone.replace(/\D/g, '')}`} className='btn btn-primary gap-2'>
            <FaPhone />
            {phone}
          </a>
        </div>
      </div>
    </div>
  )
}
