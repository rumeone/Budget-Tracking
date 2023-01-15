import './styles.css';
import {Link} from "react-router-dom";
import {MutableRefObject, useRef, useState} from "react";
export const AuthPage = ({type}: {type:'login' | 'registration'}) => {
    const [spinner, setSpinner] = useState(false);

    const usernameRef = useRef() as MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

    const handleLogin = (username: string, password: string) => {

    }

    const currentAuthTitle = type === 'login' ? 'Войти' : 'Регистрация';
    return(
        <div className='container'>
            <h1>{currentAuthTitle}</h1>
            <form className='form-group'>
                <label className='auth-label'>
                    Введите имя пользователя
                    <input type="text" className="form-control"/>
                </label>
                <label>
                    Введите пароль
                    <input type="text" className="form-control"/>
                </label>
                <button className='btn btn-primary auth-btn'>
                    {currentAuthTitle}
                </button>
            </form>
            {type === 'login' ?
                <div>
                <span className='question-text'>Еще нет аккаунта?</span>
                    <Link to={'/registration'}>Зарегестрироваться</Link>
            </div>
                : <div>
                    <span>Уже есть аккаунт?</span>
                    <Link to={'/login'}>Войти</Link>
                </div>
            }
        </div>
    )
}