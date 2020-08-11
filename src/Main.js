import React from 'react';
import Profil from './profile/ProfilPhoto';
import { FullName } from './profile/FullName';
import Address from './profile/Address';
import Background from './bg.jpg';
function Main(){
    const divBG = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <div style={divBG}>
        <Profil />
        <FullName />
        <Address />
        </div>
    );
}
export default Main;