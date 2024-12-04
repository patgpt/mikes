
import React from 'react';
import styles from './Grid.module.css';

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  minWidth?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = 16,
  minWidth = '250px'
}) => {
  return (
    <div
      className={styles.grid}
      style={{
        '--columns': columns,
        '--gap': `${gap}px`,
        '--min-width': minWidth
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};