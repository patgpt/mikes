'use client'
import type {IconType} from 'react-icons'
import {FaHouse, FaBriefcase, FaInfo, FaVoicemail, FaMessage} from 'react-icons/fa6'

export type NavigationItem = {
  href: string
  label: string
  icon: IconType
}

// Navigation items
const navigation: NavigationItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: FaHouse,
  },
  {
    href: '/about',
    label: 'About',
    icon: FaInfo,
  },
  {
    href: '/services',
    label: 'Services',
    icon: FaBriefcase,
  },
  {
    href: '/get-mike',
    label: 'Contact',
    icon: FaMessage,
  },
]

export default navigation
