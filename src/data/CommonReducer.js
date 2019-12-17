// this combines the reducer and make sure they have access to all the data in the store eact
// the default combine reducers give access to each reducer for different part of the store

export const CommonReducer = (...reducers) => (store, action) => {
    for(let i = 0; i < reducers.length; i++) {
        // each reducer modifies the store and returns the new store
        let newStore = reducers[i](store, action);
        if(newStore !== store) return newStore;
    }
    return store;
}