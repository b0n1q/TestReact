import React from 'react';
import { GooglePlacesInput } from '../GooglePlacesInput';

import './App.css';

function App() {
    return (
        <div className="App">
            Enter a location
            <GooglePlacesInput />
        </div>
    );
}

export default App;
