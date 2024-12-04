'use client'

import {useTheme} from 'next-themes'
import React, {useEffect, useState} from 'react'
import {BsSun, BsMoon, BsDisplay} from 'react-icons/bs'
import {IoColorPaletteOutline} from 'react-icons/io5'

const themeOptions = [
  {id: 'light', label: 'Light', icon: BsSun},
  {id: 'dark', label: 'Dark', icon: BsMoon},
  {id: 'system', label: 'System', icon: BsDisplay},
  {id: 'retroPastelTheme', label: 'Retro Pastel', icon: IoColorPaletteOutline},
] as const

function ThemeController() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const CurrentIcon = themeOptions.find((t) => t.id === theme)?.icon || BsDisplay

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn btn-circle btn-ghost'>
        <CurrentIcon className='h-5 w-5' />
      </div>
      <ul className='menu dropdown-content z-[1] w-52 rounded-box bg-base-200 p-2 text-base-content shadow'>
        {themeOptions.map(({id, label, icon: Icon}) => (
          <li key={id}>
            <button
              onClick={() => setTheme(id)}
              className={`flex items-center gap-2 ${theme === id ? 'active' : ''}`}>
              <Icon /> {label}
              {theme === id && <span className='ml-auto'>✓</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeController
