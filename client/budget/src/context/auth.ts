import {createStore, createDomain} from "effector";

const auth = createDomain();

const setAuth = auth.createEvent<boolean>();
export const $auth = createStore<boolean>(false)
    .on(setAuth, (_,value ) => value);

