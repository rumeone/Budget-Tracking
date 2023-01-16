import {IHandleAxiosPayload} from "../types";
import {AxiosError} from "axios";
import {getAuthDataFromLS, handleAlertMessage, removeUser} from "./auth";
import {getCostsFx, refreshTokenFx} from "../api/costsClient";
import {setCosts} from "../context";

export const handleAxiosError = async (
    error: unknown,
    payload: IHandleAxiosPayload | null = null) =>
    {
        const errorMessage = ((error as AxiosError).response?.data as {message: string}).message ||
            ((error as AxiosError).response?.data as {error: string}).error;

        if(errorMessage) {
            if(errorMessage === 'jwt expired') {
                const payLoadData = payload as IHandleAxiosPayload;
                const authData = getAuthDataFromLS();

                refreshTokenFx({
                    url: '/auth/refresh',
                    token: authData.refresh_token,
                    username: authData.username
                });

                if(payload !== null) {
                    switch (payload.type) {
                        case 'get':
                            const costs = await getCostsFx({
                                url: '/cost',
                                token: authData.access_token
                            });
                            setCosts(costs);
                            break;
                        default:
                            break;
                    }
                }
            }
            else {
                handleAlertMessage({alertText: errorMessage, alertStatus: 'warning'});
                removeUser();
            }
        }
        else {
            handleAlertMessage({alertText: errorMessage, alertStatus: 'warning'});
        }
    }