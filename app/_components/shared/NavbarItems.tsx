import Link from 'next/link';
import { FC } from 'react';

const NavbarItems: FC = () => {
    return (
        <>
            <li className='text-xl text-black'>
                <Link href='/'>Home</Link>
            </li>
            <li className='text-xl text-black'>
                <Link href='/about'>About</Link>
            </li>
            <li className='text-xl text-black'>
                <Link href='/login'>Login</Link>
            </li>
            <li className='text-xl text-black'>
                <Link href='/register'>Register</Link>
            </li>
        </>
    );
};

export default NavbarItems;
