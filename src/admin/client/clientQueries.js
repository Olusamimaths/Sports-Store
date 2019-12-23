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