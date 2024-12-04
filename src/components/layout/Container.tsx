import {clsx} from 'clsx'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
  as?: keyof JSX.IntrinsicElements
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  centered?: boolean
}

export const Container = ({
  children,
  className,
  isLoading = false,
  as: Component = 'div',
  maxWidth = '2xl',
  centered = false,
}: ContainerProps) => {
  const maxWidthClass = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  }[maxWidth]

  return (
    <Component
      className={clsx(
        'prose prose-2xl w-full px-4 py-16 sm:px-6 lg:px-8',
        maxWidthClass,
        {
          'mx-auto text-center': centered,
          'text-left': !centered,
        },
        isLoading && 'animate-pulse',
        className
      )}>
      {isLoading ? (
        <div className='space-y-4'>
          <div className='h-4 w-3/4 rounded bg-base-300'></div>
          <div className='h-4 w-1/2 rounded bg-base-300'></div>
        </div>
      ) : (
        children
      )}
    </Component>
  )
}
