import { FC } from 'react';

interface IHeaderProps {
    text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
    return (
        <h2 className='text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            {text}
        </h2>
    );
};

export default Header;
