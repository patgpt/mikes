import React from 'react'
import clsx from 'clsx'

/** Number of columns that can be configured for the grid */
type ColumnConfig = 1 | 2 | 3 | 4 | 5 | 6

/** Available gap sizes between grid items */
type GapSize = 2 | 4 | 6 | 8

/** Width options for the grid container */
type ContainerWidth = 'full' | 'container' | 'container-sm' | 'container-lg'

/** Vertical alignment options for grid items */
type AlignItems = 'start' | 'center' | 'end' | 'stretch'

/**
 * Props for the Grid component
 */
interface GridProps {
  /** Content to be rendered within the grid */
  children: React.ReactNode
  /** Additional CSS classes to apply to the grid container */
  className?: string
  /** Configurable number of columns at different breakpoints */
  cols?: {
    /** Number of columns on small screens */
    sm?: ColumnConfig
    /** Number of columns on medium screens */
    md?: ColumnConfig
    /** Number of columns on large screens */
    lg?: ColumnConfig
  }
  /** Gap size between grid items */
  gap?: GapSize
  /** Width of the grid container */
  container?: ContainerWidth
  /** Vertical alignment of grid items */
  align?: AlignItems
  /** Whether to display a loading state */
  loading?: boolean
}

/**
 * Grid Component - A responsive grid layout system
 * @param props - The grid properties
 * @returns The rendered grid component
 */
const Grid = ({
  children,
  className = '',
  cols = {sm: 1, md: 2, lg: 3},
  gap = 4,
  container = 'full',
  align = 'start',
  loading = false,
}: GridProps) => {
  if (loading) {
    return (
      <div className={clsx(
        'grid',
        `grid-cols-${cols.sm || 1}`,
        `md:grid-cols-${cols.md || cols.sm || 1}`,
        `lg:grid-cols-${cols.lg || cols.md || cols.sm || 1}`,
        `gap-${gap}`
      )}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="skeleton h-32 w-full" />
        ))}
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'grid',
        container !== 'full' && container,
        container !== 'full' && 'mx-auto px-4',
        `grid-cols-${cols.sm || 1}`,
        `md:grid-cols-${cols.md || cols.sm || 1}`,
        `lg:grid-cols-${cols.lg || cols.md || cols.sm || 1}`,
        `gap-${gap}`,
        `items-${align}`,
        className
      )}>
      {children}
    </div>
  )
}

export default Grid
