import React from "react";

export default function Card(props) {
    console.log(props);
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" alt="person-img" src={props.img}></img>
            <div className="card-info">
                <div className="info-rating">
                    <span>{props.rating}</span>
                    <span className="gray"> {props.rewiewCount}</span>
                    <span className="gray"> · {props.country}</span>
                </div>
                <div className="info-job">
                    <span>{props.title}</span>
                </div>
                <div className="info-price">
                    <span><b>From ${props.price}</b> / person</span>
                </div>
            </div>
        </div>

        /* TEST CHAPTER */

    )
}