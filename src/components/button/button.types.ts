import React from 'react';

export type ButtonVariant =
  keyof typeof import('./button.style').buttonVariants;
export type ButtonSize = keyof typeof import('./button.style').buttonSizes;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}
