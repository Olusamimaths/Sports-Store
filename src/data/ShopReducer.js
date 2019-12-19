import { ActionTypes } from './Types';

export const ShopReducer = (store, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...store,
                [action.payload.dataType]:action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params,
            };
        case ActionTypes.DATA_SET_PAGESIZE:
            return {...store, pageSize: action.payload}
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return {...store, sortKey: action.payload}
        default:
            return store || {};
    }
}