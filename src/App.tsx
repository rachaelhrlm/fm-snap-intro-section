import classNames from 'classnames';
import React, { useState } from 'react';
import { Accordion } from './components';

export const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative w-full h-screen">
            <nav className="flex justify-between p-5">
                <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
                <button onClick={() => setIsMenuOpen(true)}>
                    <img src={`${process.env.PUBLIC_URL}/images/icon-menu.svg`} alt="burger menu" />
                </button>
            </nav>

            <main className="space-y-8 text-center">
                <img src={`${process.env.PUBLIC_URL}/images/image-hero-mobile.png`} alt="desktop hero" />

                <section className="space-y-5">
                    <h1 className="font-bold text-3xl">Make remote work</h1>

                    <p className="text-sm px-3 text-neutral-gray">
                        Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                    </p>
                </section>

                <button className="text-sm text-neutral-off-white border border-neutral-off-black bg-neutral-off-black px-5 py-3 rounded-2xl hover:bg-transparent hover:text-neutral-off-black transition-all duration-300">
                    Learn more
                </button>

                <div className="grid grid-cols-4 p-4 gap-6 place-items-center">
                    <img src={`${process.env.PUBLIC_URL}/images/client-databiz.svg`} alt="databiz" />
                    <img src={`${process.env.PUBLIC_URL}/images/client-audiophile.svg`} alt="audiophile" />
                    <img src={`${process.env.PUBLIC_URL}/images/client-meet.svg`} alt="meet" />
                    <img src={`${process.env.PUBLIC_URL}/images/client-maker.svg`} alt="maker" />
                </div>
            </main>

            <aside
                className={classNames(
                    { 'opacity-100': isMenuOpen },
                    { 'opacity-0': !isMenuOpen },
                    'absolute bg-black/75 w-full h-full z-10 top-0 overflow-hidden flex justify-end pointer-events-none transition-all duration-300',
                )}>
                <div
                    className={classNames(
                        { 'pointer-events-auto translate-x-0': isMenuOpen },
                        { 'pointer-events-none translate-x-full': !isMenuOpen },
                        'h-full w-2/3 bg-white absolute transition-all duration-300',
                    )}>
                    <div className="flex justify-end p-5">
                        <button onClick={() => setIsMenuOpen(false)}>
                            <img src={`${process.env.PUBLIC_URL}/images/icon-close-menu.svg`} alt="close menu" />
                        </button>
                    </div>
                    <div className="p-5 text-sm text-neutral-gray">
                        <ul className="space-y-4">
                            <li>
                                <Accordion title="Features">
                                    <ul className="space-y-4">
                                        <li>
                                            <button>
                                                <img
                                                    className="inline-block mr-4"
                                                    src={`${process.env.PUBLIC_URL}/images/icon-todo.svg`}
                                                    alt="expand"
                                                />
                                                Todo List
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img
                                                    className="inline-block mr-4"
                                                    src={`${process.env.PUBLIC_URL}/images/icon-calendar.svg`}
                                                    alt="expand"
                                                />
                                                Calendar
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img
                                                    className="inline-block mr-4"
                                                    src={`${process.env.PUBLIC_URL}/images/icon-reminders.svg`}
                                                    alt="expand"
                                                />
                                                Reminders
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img
                                                    className="inline-block mr-4"
                                                    src={`${process.env.PUBLIC_URL}/images/icon-planning.svg`}
                                                    alt="expand"
                                                />
                                                Planning
                                            </button>
                                        </li>
                                    </ul>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion title="Company">
                                    <ul className="space-y-4">
                                        <li>
                                            <button>History</button>
                                        </li>
                                        <li>
                                            <button>Our Team</button>
                                        </li>
                                        <li>
                                            <button>Blog</button>
                                        </li>
                                    </ul>
                                </Accordion>
                            </li>
                            <li>
                                <button>Careers</button>
                            </li>
                            <li>
                                <button>About</button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 text-xs text-neutral-gray p-4">
                        <button className="p-2 rounded-xl border border-transparent hover:border-neutral-gray transition-all duration-300">
                            Login
                        </button>
                        <button className="border border-neutral-gray p-2 rounded-xl hover:bg-neutral-gray hover:text-neutral-off-white transition-all duration-300">
                            Register
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};
