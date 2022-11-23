import React, { useState } from "react"

export const AuthenticationContext = React.createContext({
    token:'',
    isLoggedIn : false,
    LogIn:(token)=>{},
    LogOut:()=>{}
})

const AuthenticationContextProvider = (props) => {

    const LocalStorageToken = localStorage.getItem('token');
    const [token, setToken] = useState(LocalStorageToken);

    const UserLoggedIn = !!token;

    const handleLogIn = (token) =>{
        setToken(token);
        localStorage.setItem('token', token);
    }

    const handleLogOut = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const ContextValues = {
        token:token,
        isLoggedIn:UserLoggedIn,
        LogIn:handleLogIn,
        LogOut:handleLogOut
    }

    return(
        <AuthenticationContext.Provider value={ContextValues}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}
export default AuthenticationContextProvider
