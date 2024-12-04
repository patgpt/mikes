import {NextResponse} from 'next/server'

export function middleware() {
  const response = NextResponse.next()

  // Add security headers
  response.headers.set('Content-Security-Policy', "default-src 'self'; form-action 'self';")
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  return response
}

export const config = {
  matcher: '/contact',
}
