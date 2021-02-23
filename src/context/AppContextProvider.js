import React, { createContext, useContext, useState } from 'react';

const user = {
    firstname: 'sandra',
    lastname: 'smith',
    email: 'invision@invisionapp.com',
    phone: '+144-3412-4422',
    location: 'new york, NY',
    interactions: 4,
}

const paymentAlts = [
    {id: 0, text: 'visa'},
    {id: 1, text: 'mastercard'},
    {id: 2, text: 'applepay'},
    {id: 3, text: 'paypal'},
];

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({ children }) {

    const [hideInfo, setHideInfo] = useState(false);
    const [chosenPaymentAlt, setChosenPaymentAlt] = useState(false);

    return (
        <AppContext.Provider value={{
            user,
            paymentAlts,
            chosenPaymentAlt,
            setChosenPaymentAlt,
            hideInfo,
            setHideInfo
        }}>
            {children}
        </AppContext.Provider>
    );
}