import {createDomain, createStore} from "effector";
import {setAuth} from "./auth";

const costs = createDomain();
export const setTotalPrice = costs.createEvent<number>();
export const $totalPrice = createStore<number>(0)
    .on(setTotalPrice, (_,value ) => value)