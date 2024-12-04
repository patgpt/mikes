'use client'

import {FaPhone} from 'react-icons/fa6'

export default function ClickToCall({
  phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '(555) 123-4567',
}) {
  return (
    <div
      className='-xl card w-72 rounded-lg bg-base-100/80 text-base-content shadow-lg backdrop-blur-lg'
      role='dialog'>
      <div className='card-body items-center p-4 text-center'>
        <h2 className='card-title text-primary'>Call Us Directly</h2>
        <p className='text-lg opacity-90'>We&apos;re here to help!</p>
        <div className='card-actions'>
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            className='btn btn-primary gap-2 transition-transform hover:scale-105'
            aria-label={`Call us at ${phone}`}>
            <FaPhone aria-hidden='true' />
            {phone}
          </a>
        </div>
      </div>
    </div>
  )
}
