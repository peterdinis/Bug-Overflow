'use client';

import { FC, ReactNode } from 'react';
import ScrollToTop from 'react-scroll-to-top';

interface IScrollToTopProviderProps {
    children?: ReactNode;
}

const ScrollToTopProvider: FC<IScrollToTopProviderProps> = ({
    children,
}: IScrollToTopProviderProps) => {
    return <ScrollToTop smooth={true}>{children}</ScrollToTop>;
};

export default ScrollToTopProvider;
