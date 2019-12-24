import gpl from 'graphql-tag';

export const shipOrder = gpl`
    mutation($id: ID!, $shipped: Boolean!) {
        shipOrder(id: $id, shipped: $shipped) {
            id, shipped
        }
    }
`

export const storeProduct = gpl`
    mutation($product: productStore) {
        storeProduct(product: $product) {
            id, name, category, description, price
        }
    }
`

export const updateProduct = gpl`
    mutation($product: productUpdate) {
        updateProduct(product: $product) {
            id, name, category, description, price
        }
    }
`

export const deleteProduct = gpl`
    mutation($id: ID!) {
        deleteProduct(id: $id) {
            id
        }
    }
`