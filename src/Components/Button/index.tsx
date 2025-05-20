import React, { ReactNode } from 'react';
import { Styles, defaultButtonStyles } from './Styles';

interface buttonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
  bgColor?: 'darkOrange' | 'gray' | 'white_border' | 'transparent';
  shape?: 'normal' | 'rounded';
  onClick: () => void;
  styles?: string;
}
export function Button({
  children,
  bgColor = 'transparent',
  shape,
  type = 'button',
  styles = '',
  onClick
}: buttonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={` ${defaultButtonStyles} 
        ${bgColor === 'transparent' ? 'bg-transparent' : Styles[bgColor]}
         ${shape && Styles[shape]} ${styles}`}>
        {children}
      </button>
    </>
  );
}
