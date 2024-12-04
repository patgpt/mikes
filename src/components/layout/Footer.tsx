import React from 'react'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className='footer bg-base-200 p-10 text-base-content'>
      <aside>
        <Logo />
        <p>
          Mike Kelly Ltd.
          <br />
          Providing reliable services since 2000
        </p>
      </aside>
      <nav>
        <h6 className='footer-title'>Services</h6>
        <a className='link-hover link'>Branding</a>
        <a className='link-hover link'>Design</a>
        <a className='link-hover link'>Marketing</a>
        <a className='link-hover link'>Advertisement</a>
      </nav>
      <nav>
        <h6 className='footer-title'>Company</h6>
        <a className='link-hover link'>About us</a>
        <a className='link-hover link'>Contact</a>
        <a className='link-hover link'>Jobs</a>
        <a className='link-hover link'>Press kit</a>
      </nav>
      <nav>
        <h6 className='footer-title'>Legal</h6>
        <a className='link-hover link'>Terms of use</a>
        <a className='link-hover link'>Privacy policy</a>
        <a className='link-hover link'>Cookie policy</a>
      </nav>
    </footer>
  )
}

export default Footer
