import React, { ReactNode } from 'react';
import { titleColors, titleSizes } from '../SharedStyles';

interface titleProps {
  children: ReactNode;
  titleAlignment?: 'left' | 'right' | 'center';
  color?: 'white' | 'darkOrange' | 'titlePrimary';
  titleTransform?: 'uppercase' | 'capitalize';
  titleWeight?: 'bold' | 'semibold';
  size?: 'small' | 'medium' | 'large' | 'x_large';
  styles?: string;
}

export function Title({
  children,
  size = 'small',
  color = 'titlePrimary',
  titleWeight = 'bold',
  titleTransform = 'uppercase',
  titleAlignment = 'left',
  styles = ''
}: titleProps) {
  return (
    <h1
      className={`font-title ${titleSizes[size]} ${titleColors[color]} font-${titleWeight} text-${titleAlignment}  ${titleTransform} ${styles} `}>
      {children}
    </h1>
  );
}
