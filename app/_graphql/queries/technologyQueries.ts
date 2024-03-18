import { gql } from '@apollo/client';

export const getAllTechnologies = gql`
    query getAllTechnologies {
        id
        name
    }
`;
