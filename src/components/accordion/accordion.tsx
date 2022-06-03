import classNames from 'classnames';
import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';

interface AccordionProps {
    title: string | ReactNode;
    options: ReactNode[];
}

export const Accordion: FunctionComponent<AccordionProps> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return () => {
            setIsOpen(false);
        };
    }, []);

    return (
        <>
            <button className="group hover:opacity-50 transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img
                    className={classNames({ hidden: isOpen }, 'inline-block ml-4 group-active:rotate-180 transition-all duration-300')}
                    src={`${process.env.PUBLIC_URL}/images/icon-arrow-up.svg`}
                    alt="expand"
                />
                <img
                    className={classNames({ hidden: !isOpen }, 'inline-block ml-4 group-active:rotate-180 transition-all duration-500')}
                    src={`${process.env.PUBLIC_URL}/images/icon-arrow-down.svg`}
                    alt="close"
                />
            </button>
            <div
                className={classNames(
                    { 'scale-y-100 h-auto p-5': isOpen },
                    { 'scale-y-0 h-0': !isOpen },
                    'overflow-hidden transition-all duration-300 origin-top ease-in-out',
                )}>
                <ul className="space-y-4">
                    {options.map((option) => (
                        <li>
                            <button className="hover:opacity-50 transition-all duration-300">{option}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
