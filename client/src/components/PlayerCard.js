import React from "react"

const PlayerCard = props => {

    console.log(props)

    return (
        <div className="card-wrapper">
            <h1>Name: {props.player.name}</h1>
            <h2>team: {props.player.team}</h2>
            <h4>Rank: {props.player.rank}</h4>
        </div>
    )

}

export default PlayerCard;