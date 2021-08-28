import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjustedExpirationTime = new Date(currentTime).getTime();
    const remainingDuration = adjustedExpirationTime - currentTime;
    return remainingDuration;
}

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const userIsLoggedIn = !!token;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
    }

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        const remainingTime = calculateRemainingTime(expirationTime);
        setTimeout(() => {
            logoutHandler();
        }, remainingTime);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;