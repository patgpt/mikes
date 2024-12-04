'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Position =
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'

type ToastProps = {
  message: string
  type: 'success' | 'error'
  remaining?: number
  position?: Position
}

type AnimationConfig = {
  initial: { opacity: number; x?: number; y?: number };
  animate: { opacity: number; x?: number; y?: number };
}

const positionClasses: Record<Position, string> = {
  'top-left': 'toast-top toast-start',
  'top-center': 'toast-top toast-center',
  'top-right': 'toast-top toast-end',
  'bottom-left': 'toast-bottom toast-start',
  'bottom-center': 'toast-bottom toast-center',
  'bottom-right': 'toast-bottom toast-end',
}

const positionAnimations: Record<Position, AnimationConfig> = {
  'top-left': {
    initial: { opacity: 0, x: -100, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 }
  },
  'top-center': {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 }
  },
  'top-right': {
    initial: { opacity: 0, x: 100, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 }
  },
  'bottom-left': {
    initial: { opacity: 0, x: -100, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 }
  },
  'bottom-center': {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 }
  },
  'bottom-right': {
    initial: { opacity: 0, x: 100, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 }
  }
}

export default function Toast({ message, type, remaining, position = 'top-center' }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000)
    const handleClick = () => setIsVisible(false)

    document.addEventListener('click', handleClick)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  if (!isVisible) return null

  const { initial, animate } = positionAnimations[position]

  return (
    <AnimatePresence>
      <motion.div
        className={`toast z-50 ${positionClasses[position]}`}
        initial={initial}
        animate={animate}
        exit={initial}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`flex flex-col rounded-lg px-4 py-3 shadow-lg ${
            type === 'success'
              ? 'border-primary/20 bg-base-100 text-base-content'
              : 'border-error/20 bg-base-100 text-base-content'
          } border`}
          layout>
          <div className='flex items-center gap-2'>
            {type === 'success' ? (
              <motion.svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-primary'
                viewBox='0 0 20 20'
                fill='currentColor'
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 0.2}}>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-error'
                viewBox='0 0 20 20'
                fill='currentColor'
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 0.2}}>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </motion.svg>
            )}
            <motion.span
              className='font-medium'
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.1}}>
              {message}
            </motion.span>
          </div>
          {remaining !== undefined && remaining === 0 && (
            <motion.small
              className='mt-1 block text-sm opacity-90'
              initial={{opacity: 0}}
              animate={{opacity: 0.9}}
              transition={{delay: 0.3}}>
              No submissions remaining today
            </motion.small>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
