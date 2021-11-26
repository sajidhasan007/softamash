import React from 'react';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import App from '../OurWorks/App';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <App></App>
            <Feedback></Feedback>


        </div>
    );
};

export default Home;