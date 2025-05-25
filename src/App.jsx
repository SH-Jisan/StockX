import React from 'react';
import Profile from '../src/pages/profile/Profile.jsx';
import Tempo from '../src/tempo/Tempo.jsx';
import Charts from '../src/pages/statistics/Charts.jsx';
import UserInfo from '../src/tempo/UserInfo.jsx'
const App = () =>{
    return (
        <>
            <Profile />
            <UserInfo />
        </>
    );
}


export default App;