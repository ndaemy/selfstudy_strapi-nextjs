import { gql } from '@apollo/client'

export const ALL_RESTAURANTS_QUERY = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`
