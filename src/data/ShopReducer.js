import { ActionTypes } from './Types';

export const ShopReducer = (store, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...store,
                [action.payload.dataType]:action.payload.data
            };
        default:
            return store || {};
    }
}