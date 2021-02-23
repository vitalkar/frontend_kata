import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './context/AppContextProvider';
import Main from './components/Main';
import './App.css';

const App = () => {
    return (
        <AppContextProvider>
                <Main />
        </AppContextProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));