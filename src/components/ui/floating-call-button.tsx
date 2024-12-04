'use client'
import {useState, useRef, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {FaPhone} from 'react-icons/fa6'
import ClickToCall from './click-to-call'

export default function FloatingCallButton() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{opacity: 0, y: 50, scale: 0.3}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 50, scale: 0.3}}
            transition={{type: 'spring', stiffness: 260, damping: 20}}
            className='mb-4'
            role='dialog'
            aria-label='Call options'>
            <ClickToCall />
          </motion.div>
        )}
      </AnimatePresence>

      <div className='tooltip tooltip-left' data-tip='Click to call us'>
        <motion.button
          ref={buttonRef}
          className={`btn btn-circle btn-primary ${!isOpen ? 'animate-pulse' : ''}`}
          whileTap={{scale: 0.9}}
          whileHover={{scale: 1.1}}
          transition={{type: 'spring', stiffness: 400, damping: 17}}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup='dialog'
          aria-label='Open call options'>
          <FaPhone
            className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            aria-hidden='true'
          />
        </motion.button>
      </div>
    </div>
  )
}
