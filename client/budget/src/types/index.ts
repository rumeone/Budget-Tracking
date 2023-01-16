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
    costs: ICost[];
}

export interface ICost {
    text: string;
    price: number;
    date: Date | string;
    _id?: string | number;
}

export interface IBaseEffectArgs {
    url: string;
    token:string;
}

export interface ICreateCost extends IBaseEffectArgs{
    cost: ICost;

}
export interface IRefreshToken extends IBaseEffectArgs{
    username: string;
}

export interface IHandleAxiosPayload {
    type: string;
    createCost?: Partial<ICreateCost>;
    getCost?: Partial<IBaseEffectArgs>;
}