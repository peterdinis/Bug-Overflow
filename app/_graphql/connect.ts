import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
    return new ApolloClient({
        uri: process.env.NEXT_PUBLIC_BACKEND_URL as unknown as string,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
