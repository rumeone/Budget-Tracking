import exp from "constants";

export interface IAlert {
    alertText: string;
    alertStatus: string;
}
export interface IAlertProps {
    props: IAlert;
}

export interface ISpinnerProps {
    top: number;
    left: number;
}

export interface ICostsHeaderProps {
    costs: ICosts[];
}

export interface ICosts {
    text: string;
    price: number;
    date: Date | string;
    _id?: string | number;
}