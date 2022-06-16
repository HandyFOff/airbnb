import React from "react";
import Hero from "./main/Hero";
import Card from "./main/Card";
import cardsData from "./main/cardsData";

export default function Main() {
    const cardsElements = cardsData.map((card) => 
        <Card
            key={card.id}
            {...card}
        />
    );
    return (
        <div className="main">
            <div className="main_container">
                <Hero/>
                <section className="cards">
                   {cardsElements}
                </section>
            </div>
        </div>
    )
}