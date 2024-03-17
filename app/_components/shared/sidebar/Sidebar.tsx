'use client';

import { FC, useState } from 'react';
import { RiHome2Fill, RiSettings5Fill, RiContactsFill } from 'react-icons/ri';

const Sidebar: FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div
                onClick={() => setSidebarOpen(false)}
                className={`fixed inset-0 bg-opacity-30 z-40 transition-opacity duration-200 ${
                    sidebarOpen
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden='true'
            ></div>

            <div
                className={`fixed z-40 lg:static lg:translate-x-0 h-screen lg:w-64 bg-white  border-r border-gray-200 p-4 transition-all duration-200 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                }`}
            >
                <div className='flex justify-between pr-3 sm:px-2'>
                    <span className='text-lg font-bold'>Bug Overlow</span>
                </div>

                <div className='pt-3 lg:inline-flex mt-auto '>
                    <div className='flex-1' />
                    <div className='px-3 py-2 justify-end'>
                        <button onClick={toggleSidebar}>
                            <span className='sr-only'>
                                Expand / collapse sidebar
                            </span>
                            <svg
                                className={`w-6 h-6 fill-current ${
                                    !sidebarOpen ? 'rotate-0' : 'rotate-180'
                                }`}
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21'
                                    stroke='#0F172A'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='mt-6'>
                    <ul>
                        <li className='flex items-center space-x-2'>
                            <RiHome2Fill />
                            <span className='font-bold text-2xl p-1'>Home</span>
                        </li>
                        <li className='flex mt-5 items-center space-x-2'>
                            <RiSettings5Fill />
                            <span className='font-bold text-2xl p-1'>
                                Settings
                            </span>
                        </li>
                        <li className='flex mt-5 items-center space-x-2'>
                            <RiContactsFill />
                            <span className='font-bold text-2xl p-1'>
                                Contact
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
