import classNames from 'classnames';
import React, { useState } from 'react';
import { Accordion, Button, Menu } from './components';

export const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const companyOptions = ['History', 'Our Team', 'Blog'];

    const featureOptions = [
        <>
            <img className="inline-block mr-4" src={`${process.env.PUBLIC_URL}/images/icon-todo.svg`} alt="expand" />
            Todo List
        </>,
        <>
            <img className="inline-block mr-4" src={`${process.env.PUBLIC_URL}/images/icon-calendar.svg`} alt="expand" />
            Calendar
        </>,
        <>
            <img className="inline-block mr-4" src={`${process.env.PUBLIC_URL}/images/icon-reminders.svg`} alt="expand" />
            Reminders
        </>,
        <>
            <img className="inline-block mr-4" src={`${process.env.PUBLIC_URL}/images/icon-planning.svg`} alt="expand" />
            Planning
        </>,
    ];

    return (
        <div className="relative w-full h-screen xl:bg-neutral-off-white xl:flex xl:flex-col xl:place-items-center">
            <nav className="flex justify-between p-5 w-full text-neutral-off-black xl:p-8 xl:text-neutral-gray text-sm">
                <div className="flex gap-16 place-items-center">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
                    </div>
                    <div className="hidden xl:flex gap-10 place-items-center">
                        <Menu title="Features" options={featureOptions} />

                        <Menu title="Company" options={companyOptions} />
                        <button className="text-neutral-gray hover:text-neutral-off-black transition-all duration-300">Careers</button>
                        <button className="text-neutral-gray hover:text-neutral-off-black transition-all duration-300">About</button>
                    </div>
                </div>
                <div className="space-x-6">
                    <button className="xl:hidden" onClick={() => setIsMenuOpen(true)}>
                        <img
                            className="hover:opacity-50 duration-300 transition-all"
                            src={`${process.env.PUBLIC_URL}/images/icon-menu.svg`}
                            alt="burger menu"
                        />
                    </button>
                    <div className="hidden space-x-6 xl:inline-block">
                        <Button styling="ghost">Login</Button>
                        <Button styling="secondary">Register</Button>
                    </div>
                </div>
            </nav>

            <main className="gap-8 flex flex-col place-content-center place-items-center py-4 xl:flex-row-reverse xl:w-[1120px] h-fit">
                <div className="xl:object-contain xl:w-1/2">
                    <img className="block xl:hidden" src={`${process.env.PUBLIC_URL}/images/image-hero-mobile.png`} alt="desktop hero" />
                    <img className="hidden xl:block " src={`${process.env.PUBLIC_URL}/images/image-hero-desktop.png`} alt="desktop hero" />
                </div>

                <div className="space-y-8 text-center xl:w-1/2 xl:text-left xl:place-self-end xl:pt-5 xl:space-y-14">
                    <section className="space-y-5 xl:space-y-14">
                        <h1 className="font-bold text-3xl xl:text-7xl">Make remote work</h1>

                        <p className="text-sm px-3 text-neutral-gray xl:px-0 xl:text-base">
                            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity
                            soar.
                        </p>
                    </section>

                    <Button>Learn more</Button>

                    <div className="grid grid-cols-4 px-4 gap-6 place-items-center">
                        <img src={`${process.env.PUBLIC_URL}/images/client-databiz.svg`} alt="databiz" />
                        <img src={`${process.env.PUBLIC_URL}/images/client-audiophile.svg`} alt="audiophile" />
                        <img src={`${process.env.PUBLIC_URL}/images/client-meet.svg`} alt="meet" />
                        <img src={`${process.env.PUBLIC_URL}/images/client-maker.svg`} alt="maker" />
                    </div>
                </div>
            </main>

            <aside
                className={classNames(
                    { 'opacity-100': isMenuOpen },
                    { 'opacity-0': !isMenuOpen },
                    'absolute bg-black/75 w-full h-full z-10 top-0 overflow-hidden flex justify-end pointer-events-none transition-all duration-300 ',
                )}>
                <div
                    className={classNames(
                        { 'pointer-events-auto translate-x-0': isMenuOpen },
                        { 'pointer-events-none translate-x-full': !isMenuOpen },
                        'h-full w-2/3 bg-white absolute transition-all duration-300',
                    )}>
                    <div className="flex justify-end p-5">
                        <button onClick={() => setIsMenuOpen(false)}>
                            <img
                                className="hover:opacity-50 duration-300 transition-all"
                                src={`${process.env.PUBLIC_URL}/images/icon-close-menu.svg`}
                                alt="close menu"
                            />
                        </button>
                    </div>
                    <div className="p-5 text-sm text-neutral-gray">
                        <ul className="space-y-4">
                            <li>
                                <Accordion title="Features" options={featureOptions} />
                            </li>
                            <li>
                                <Accordion title="Company" options={companyOptions} />
                            </li>
                            <li>
                                <button className="hover:opacity-50 transition-all duration-300">Careers</button>
                            </li>
                            <li>
                                <button className="hover:opacity-50 transition-all duration-300">About</button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-neutral-gray p-4">
                        <Button styling="ghost">Login</Button>
                        <Button styling="secondary">Register</Button>
                    </div>
                </div>
            </aside>
        </div>
    );
};
