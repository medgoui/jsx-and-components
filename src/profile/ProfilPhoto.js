import React from 'react';
function ProfilPhoto(){
    const styleImg = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%"
    };

    return <img src="profile.png" style={styleImg} alt="Profile picture" />;
}
export default ProfilPhoto;