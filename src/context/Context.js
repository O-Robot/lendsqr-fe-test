import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useUserContext = () => {
    return useContext(Context)
}

export const Provider = ({children}) => {
    const [user, setUser] = useState([]);
    const [sidebar, setSidebar] = useState(true)

    const getUser = async (id) => {
        let users = JSON.parse(localstorage.getItem('users'))
        const user = user.find((user) => user.id === id);
        console.log('user', user)
        return user
    };
}