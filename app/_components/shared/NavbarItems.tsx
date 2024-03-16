import Link from 'next/link';
import { FC } from 'react';

const NavbarItems: FC = () => {
    return (
        <>
            <li className='text-xl text-black'>
                <Link href='/'>Home</Link>
            </li>
        </>
    );
};

export default NavbarItems;