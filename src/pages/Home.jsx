import React from "react";
import '../components/atoms/card/card.css'
import CardCake from '../components/atoms/card/CardCake'
import CardCookies from '../components/atoms/card/CardCookies'
import CardBread  from '../components/atoms/card/CardBread'

const Home = () => {
    return (
        <div>
            <h1>¿Qué te apetece hoy?</h1>

            <div className="products-container">
                <CardCake/>
                <CardCookies />
                <CardBread />
            </div>
        </div>
    );
};

export default Home;
