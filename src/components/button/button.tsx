import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    styling?: 'primary' | 'secondary' | 'ghost';
}

export const Button: FunctionComponent<ButtonProps> = ({ children, styling = 'primary' }, props) => {
    return (
        <button
            className={classNames(
                'border px-5 py-2 rounded-xl hover:bg-transparent transition-all duration-300',
                {
                    'text-neutral-off-white border-neutral-off-black bg-neutral-off-black hover:text-neutral-off-black': styling === 'primary',
                },
                {
                    'text-neutral-gray border-neutral-off-black hover:text-neutral-off-black': styling === 'secondary',
                },
                {
                    'text-neutral-gray border-transparent hover:border-neutral-off-black ': styling === 'ghost',
                },
            )}
            {...props}>
            {children}
        </button>
    );
};
