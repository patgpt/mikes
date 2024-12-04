import Link from 'next/link'

const Logo = () => (
  <Link href='/'>
    <h1 className='prose prose-xl m-0 mx-4 font-display text-3xl font-extrabold text-primary'>
      Mike Kelly
    </h1>
  </Link>
)
Logo.displayName = 'Logo'
export default Logo
