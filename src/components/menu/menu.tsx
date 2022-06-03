import classNames from 'classnames';
import React, { FunctionComponent, ReactNode, useState } from 'react';

export interface MenuProps {
    title: ReactNode;
    options: ReactNode[];
}

export const Menu: FunctionComponent<MenuProps> = ({ options, title }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <button
                className="group transition-all duration-300 text-neutral-gray hover:text-neutral-off-black"
                onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img
                    className={classNames({ hidden: isOpen }, 'inline-block ml-2 group-active:rotate-180 transition-all duration-300')}
                    src={`${process.env.PUBLIC_URL}/images/icon-arrow-down.svg`}
                    alt="expand"
                />
                <img
                    className={classNames({ hidden: !isOpen }, 'inline-block ml-2 group-active:rotate-180 transition-all duration-500')}
                    src={`${process.env.PUBLIC_URL}/images/icon-arrow-up.svg`}
                    alt="close"
                />
            </button>
            <div
                className={classNames(
                    'absolute top-16 bg-white p-6 w-fit rounded-lg shadow-lg transition-all duration-300',
                    { 'opacity-0 scale-0': !isOpen },
                    { 'opacity-100 scale-100': isOpen },
                )}>
                <ul className="space-y-4">
                    {options.map((option) => (
                        <li className="text-neutral-gray hover:text-neutral-off-black">
                            <button className="hover:opacity-50 transition-all duration-300">{option}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
