import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navigation: FC = () => {
    return (
        <>
            <header className='flex items-center h-14 px-4 border-b gap-4 lg:px-6'>
                <Link
                    className='flex items-center gap-2 text-lg font-semibold'
                    href='#'
                >
                    rrrrr
                    <span>Package</span>
                </Link>
                <nav className='flex-1 ml-6 lg:ml-10'>
                    <Link
                        className='font-medium transition-colors hover:text-gray-500 dark:hover:text-gray-400'
                        href='#'
                    >
                        Home
                    </Link>
                    <Link
                        className='ml-4 font-medium transition-colors hover:text-gray-500 dark:hover:text-gray-400'
                        href='#'
                    >
                        About
                    </Link>
                    <Link
                        className='ml-4 font-medium transition-colors hover:text-gray-500 dark:hover:text-gray-400'
                        href='#'
                    >
                        Contact
                    </Link>
                </nav>
                <Button size='sm' variant='outline'>
                    New Post
                </Button>
            </header>
        </>
    );
};

export default Navigation;
