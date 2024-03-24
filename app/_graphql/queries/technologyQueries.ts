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

export const GET_PAGINATED_TECHNOLOGIES = gql`
  query PaginatedTechnologies($page: Int!, $pageSize: Int!) {
    paginatedTechnologies(page: $page, pageSize: $pageSize) {
      id
      name
      image
    }
  }
`;