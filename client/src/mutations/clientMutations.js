import { gql } from '@apollo/client'

const DELETE_CLIENT = gql`
  mutation deletClient($id: ID!) {
    deletClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`

export { DELETE_CLIENT }
