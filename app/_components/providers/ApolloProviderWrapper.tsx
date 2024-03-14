'use client';

import createApolloClient from '@/app/_graphql/connect';
import { ApolloProvider } from '@apollo/client';
import { FC, ReactNode } from 'react';

interface IApolloProviderWrapper {
    children?: ReactNode;
}

const ApolloProviderWrapper: FC<IApolloProviderWrapper> = ({
    children,
}: IApolloProviderWrapper) => {
    return (
        <ApolloProvider client={createApolloClient()}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloProviderWrapper;
