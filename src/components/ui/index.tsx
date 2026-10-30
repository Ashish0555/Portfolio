'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', disabled, children, href, target, rel, onClick, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-gradient-to-r from-accent-primary to-accent-secondary text-bg-primary hover:from-accent-secondary hover:to-accent-tertiary shadow-glow-sm hover:shadow-glow-md',
      secondary: 'bg-transparent border border-border-accent text-accent-primary hover:bg-accent-primary/10 hover:shadow-glow-sm',
      ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-tertiary',
      outline: 'bg-transparent border border-border-secondary text-text-primary hover:border-accent-primary hover:text-accent-primary',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-5 py-2.5 text-base gap-2',
      lg: 'px-8 py-3.5 text-lg gap-2.5',
      xl: 'px-10 py-4 text-xl gap-3',
    };

    const isLink = !!href;

    if (isLink) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (
        <a
          ref={ref as any}
          href={href}
          target={target}
          rel={rel}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { if (disabled) e.preventDefault(); if (onClick) onClick(e as any); }}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'interactive';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }: CardProps, ref) => {
    const variants = {
      default: 'glass-card glass-card-hover p-6',
      bordered: 'glass-card glass-card-hover p-6 border-border-secondary',
      elevated: 'glass-card glass-card-hover p-6 shadow-glow-md',
      interactive: 'glass-card glass-card-hover p-6 cursor-pointer transform-gpu transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]',
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variant: _variant, ...restProps } = props as CardProps;

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }: BadgeProps, ref) => {
    const variants = {
      primary: 'tag tag-primary',
      secondary: 'tag tag-secondary',
      tertiary: 'tag tag-tertiary',
      warning: 'tag tag-warning',
      success: 'tag bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20',
      error: 'tag bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-xs',
      lg: 'px-4 py-1.5 text-sm',
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variant: _variant, size: _size, ...restProps } = props as BadgeProps;

    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center font-medium rounded-full border transition-all duration-200', variants[variant], sizes[size], className)}
        {...restProps}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, ...props }, ref) => {
    const id = props.id || `input-${Math.random().toString(36).substring(7)}`;
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 bg-bg-tertiary/50 border rounded-xl text-text-primary placeholder-text-tertiary',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-accent-error focus:ring-accent-error/50 focus:border-accent-error',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-accent-error" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${id}-hint`} className="mt-1.5 text-sm text-text-tertiary">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, ...props }, ref) => {
    const id = props.id || `textarea-${Math.random().toString(36).substring(7)}`;
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 bg-bg-tertiary/50 border rounded-xl text-text-primary placeholder-text-tertiary resize-y min-h-[120px]',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-accent-error focus:ring-accent-error/50 focus:border-accent-error',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-accent-error" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${id}-hint`} className="mt-1.5 text-sm text-text-tertiary">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';