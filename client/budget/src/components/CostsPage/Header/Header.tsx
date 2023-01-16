import {useEffect, useState} from "react";
import {Spinner} from "../../Spinner/Spinner";
import {ICostsHeaderProps} from "../../../types";
import {countTotalPrice} from "../../../utils/arrayUtils";
import {useStore} from "effector-react";
import {$totalPrice} from "../../../context";
import './styles.css'

export const Header = ({ costs }: ICostsHeaderProps) => {
    const [spinner, setSpinner] = useState(false);
    const totalPrice = useStore($totalPrice);

    useEffect(() => {
        countTotalPrice(costs);
    }, [costs])

    return (
        <div className="costs-header">
            <form className="d-flex mb-3">
                <div className="form-item">
                    <span className="mb-3">Куда было потрачено</span>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-item">
                    <span className="mb-3">Сколько было потрачено</span>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-item">
                    <span className="mb-3">Когда было потрачено</span>
                    <input type="text" className="form-control"/>
                </div>
                <button className='btn btn-primary add-btn'>
                    {spinner ? <Spinner top={5} left={20}/> : 'Добавить'}
                </button>
            </form>
            <div style={{textAlign: "end", marginBottom: "10px"}}>
                Итого:
                <span> {isNaN(totalPrice) ? 0 : parseInt(String(totalPrice))}</span>
                р.
            </div>
        </div>
    )
}