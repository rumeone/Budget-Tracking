import {IAlert} from "../types";
import {setAlert} from "../context/alert";
import {setAuth, setUsername} from "../context/auth";
import {setCosts} from "../context";

export const removeUser = () => {
    localStorage.removeItem('auth');
    setAuth(false);
    setUsername('');
    setCosts([]);
}
export const getAuthDataFromLS = () => {
    try {
        const LSData = JSON.parse(localStorage.getItem('auth') as string);
        if(!LSData) {
            removeUser();
            return;

        }
        return LSData;
    } catch (e) {
        removeUser();
    }
}
export const handleAlertMessage = (alert: IAlert) => {
    setAlert(alert);
    setTimeout(() => {
        setAlert({alertStatus: '', alertText: ''});
    }, 3000);
}