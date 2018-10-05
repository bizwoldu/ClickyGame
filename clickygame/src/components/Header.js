import  React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
    <h1 id="logo"><b>clicky game</b></h1>
    <br/>
    <h5  className="subtitle"> How to Play:</h5>
    <br/>
    <h5 className="subtitle">Click on an image to get started! After each click, the image will shuffke. <br/> The goal is to select each image only once!</h5>
    </div>
)
export default Header;