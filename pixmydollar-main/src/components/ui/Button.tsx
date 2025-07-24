import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './Button.module.css';

type ButtonColor = 'main' | 'secondary' | 'black';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor;
    className?: string;
    animated?: boolean;
}

export const Button = ({ color = 'main', className, children, animated = false, ...props }: ButtonProps) => {
    const baseStyles = 'rounded-full shadow transition-all duration-200 w-full py-8 font-medium';

    const colorStyles = {
        main: 'bg-primary text-white hover:bg-primary/90 border-b-dark/70',
        secondary: 'bg-secondary text-white hover:bg-secondary/90 border-b-4 border-b-secdark/70',
        black: 'bg-black/90 text-white hover:bg-black/90 border-b-4 border-b-black/70',
    };

    return (
        <button
            className={twMerge('rounded-full font-bold border-b-secondary border-b-4 transition-all duration-200 w-full py-6 flex items-center justify-center gap-2', colorStyles[color], animated && styles.pulseAnimation, className)}
            {...props}
        >
            {children}
        </button>
    );
};
