import gpl from 'graphql-tag';

export const ordersSummaryQuery = gpl`
        query($onlyShipped: Boolean, $page: Int, $pageSize: Int, $sort: String){
            orders(onlyUnshipped: $onlyShipped) {
                totalSize,
                orders(page: $page, pageSize: $pageSize, sort: $sort) {
                    id, name, email, shipped,
                    products {
                        quantity, product { price }
                    }
                }
            }
        }
    `

export const productList = gpl`
        query($page: Int, $pageSize: Int, $sort: String) {
            products {
                totalSize,
                products(page: $page, pageSize: $pageSize, sort: $sort) {
                    id, name, category, price
                }
            }
        }
`

export const product = gpl`
        query($id: ID!){
            product(id: $id) {
                id, name, description,category, price
            }
        }
`