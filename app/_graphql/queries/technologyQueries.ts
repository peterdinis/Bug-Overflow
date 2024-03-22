import { gql } from '@apollo/client';

export const GET_ALL_TECHNOLOGIES = gql`
    query {
        getAllTechnologies {
            id
            image
            name
        }
    }
`;
