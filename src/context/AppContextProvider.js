import React, { createContext, useContext, useState } from 'react';
import AppStore from '../store/AppStore';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {

    const store = new AppStore();

    return (
        <AppContext.Provider value={{store}}>
            {children}
        </AppContext.Provider>
    );
}