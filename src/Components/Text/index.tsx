import React, { ReactNode } from 'react';
import { textColors, textSizes } from '../SharedStyles';

interface textTestProps {
  children: ReactNode;
  color?: 'white' | 'textPrimary';
  size?: 'x_small' | 'small' | 'medium' | 'large';
  textAlignment?: 'left' | 'right' | 'center';
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  styles?: string;
}
export function Text({
  children,
  color = 'textPrimary',
  textAlignment = 'left',
  textTransform = 'lowercase',
  size = 'medium',
  styles = ''
}: textTestProps) {
  return (
    <p
      className={`font-text ${textSizes[size]} ${textColors[color]}
        text-${textAlignment}  ${textTransform}
        ${styles}`}>
      {children}
    </p>
  );
}
