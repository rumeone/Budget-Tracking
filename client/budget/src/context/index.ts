import {createDomain, createStore} from "effector";
import {setAuth} from "./auth";
import {ICost} from "../types";

const costs = createDomain();
export const setCosts = costs.createEvent<ICost[]>();
export const createCost = costs.createEvent<ICost>();
export const updateCost = costs.createEvent<ICost>();
export const removeCost = costs.createEvent<string | number>()

export const $costs = costs.createStore<ICost[]>([])
    .on(createCost, (state, cost) => [...state, cost])
    .on(setCosts, (_, costs) => costs);
export const setTotalPrice = costs.createEvent<number>();
export const $totalPrice = createStore<number>(0)
    .on(setTotalPrice, (_,value ) => value)