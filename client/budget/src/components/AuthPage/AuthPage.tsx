export const AuthPage = ({type}: {type:'login' | 'registration'}) => {
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
        </div>
    )
}