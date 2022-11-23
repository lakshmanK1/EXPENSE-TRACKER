import React, { useState } from "react"

export const AuthenticationContext = React.createContext({
    token:'',
    isLoggedIn : false,
    LogIn:(token)=>{},
    LogOut:()=>{}
})

const AuthenticationContextProvider = (props) => {
    const [token, setToken] = useState('');

    const UserLoggedIn = !!token;

    const handleLogIn = (token) =>{
        setToken(token);
    }

    const handleLogOut = () => {
        setToken(null);
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
