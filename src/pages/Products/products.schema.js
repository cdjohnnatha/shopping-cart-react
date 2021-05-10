import {graphql} from 'react-relay';

graphql`
  query productsPaginatedQuery($rowsPerPage: Int!, $currentPage: Int!) {
    productsPaginated(pagination: {rowsPerPage: $rowsPerPage, currentPage: $currentPage}) {
      products {
        _id
        name
        quantityAvailable
        maxQuantityPerCustomer
        category
        description
        price
        currency {
          label
          name
        }
        images {
          path
          tags
          size
          type
        }
      }
      pagination{
        totalPages
        totalValues
        rowsPerPage
        currentPage
      }
    }
  }
`;