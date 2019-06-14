import * as types from './types';

export default {
    [types.UPDATE_VALUE]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_VALUE, payload)
    }
};
/*
* For other actions we can use another exported functions like you can see below
* export const action2 = () => {};
* */