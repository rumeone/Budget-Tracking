import {useTheme} from "../../hooks";
import {useStore} from "effector-react";
import {$username} from "../../context/auth";

export const Header = () => {
    const {switchTheme, theme} = useTheme();
    const username = useStore($username);
    return (
        <header className={`navbar navbar-dark bg-${theme === 'dark' ? 'dark' : 'primary'}`}>
            <div className='container'>
                <h1 style={{color: "white"}}>Costs app</h1>
                {username.length ? <h2 style={{color: "white"}} >{username}</h2> : ''}
                <button
                    onClick={switchTheme}
                    className={`btn btn-${theme === 'dark' ? 'light' : 'dark'}`}
                >
                    {theme === 'dark' ? 'Go light' : 'Go dark'}
                </button>
            </div>
        </header>
    )
}