
import * as React from "react"
import { useEffect, useState } from 'react';
import { removeHtmlTag } from "../tools/helpers";
import { Show } from "../types/types"
import "./ShowComponent.css"
// .replace(new RegExp(/\<[\/bp]\>/, 'g'),"")
interface ShowComponentProps {
    show: Show
}

const ShowComponent: React.FC<ShowComponentProps> = (props) => {
    const summary = props.show.summary? removeHtmlTag(props.show.summary) : "No Summary";
    const genres = props.show.genres.map(item=>{
        return <li>{item}</li>
    })
    return (
        <div className="cardShow">
            <img className="showImage" src={props.show.image} alt="Show image"/>
            <h1>{props.show.name} <span>{(props.show.score*10).toFixed(1)}</span></h1>
            <div className="showInfo">
                <div>{props.show.status}</div>
                <div>{props.show.languaje}</div>
                <div><a href={`https://www.imdb.com/title/${props.show.imdb}/`}>IMDb</a></div>
                <div><ul>{genres}</ul></div>
            </div>
            <div>{summary}</div>
        </div>
    )
}

export default ShowComponent
