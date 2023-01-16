import {createEffect} from "effector";
import {IBaseEffectArgs, ICreateCost, IRefreshToken} from "../types";
import api from './axiosClient'
import {removeUser} from "../utils/auth";
export const createCostFx = createEffect(async ({url, cost, token}: ICreateCost) => {
    try {
        const {data} = await api.post(url, {...cost}, {headers: {'Authorization': `Bearer ${token}`}});

        return data;
    } catch (e) {
        console.log(e);
    }
});

export const getCostsFx = createEffect(async ({url, token}: IBaseEffectArgs) => {
    try {
        const {data} = await api.get(url, {headers: {'Authorization': `Bearer ${token}`}});

        return data;
    } catch (e) {
        console.log(e);
    }
});

export const refreshTokenFx = createEffect(async ({url, token, username}: IRefreshToken) => {
   try {
       const result = await api.post(url, {refresh_token: token, username});

       if(result.status === 200) {
           localStorage.setItem('auth', {
               ...result.data,
               username
           });
           return result.data.access_token;
       }
       else {
           removeUser();
       }

   } catch (e) {
       
   }
});