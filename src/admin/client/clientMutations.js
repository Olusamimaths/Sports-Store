import gpl from 'graphql-tag';

export const shipOrder = gpl`
    mutation($id: ID!, $shipped: Boolean!) {
        shipOrder(id: $id, shipped: $shipped) {
            id, shipped
        }
    }
`