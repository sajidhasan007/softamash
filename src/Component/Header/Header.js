import React, { useEffect } from 'react';
//import Navbar from '../Navber/Navber';
import Navber from '../Navber/Navber';

import './Header.css';


const Header = () => {

    useEffect(() => {
        document.title = "About Page";
    }, []);


    return (
        <div className='main'>

            <div className='header'>
                <Navber></Navber>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>




                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffff" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,186.7C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Header;