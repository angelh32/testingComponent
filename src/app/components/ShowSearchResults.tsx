import * as React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from "redux";
import { fetchShows } from "../redux/actions/GetShows";
import { RootState } from "../redux/store";
import ShowComponent from "./ShowComponent";
import "./ShowSearchResults.css";


interface ShowSearchResultsProps { }

const ShowSearchResults: React.FC<ShowSearchResultsProps> = (props) => {

    const showList = useSelector((state: RootState) => state.ShowListReducer.shows)

    const listItems = showList.map((media) => {
        return <ShowComponent show={media} />
    })
    if (showList.length==0){
    return (
        <h5>No results :(</h5>
    )
    }
    return (
        <div className="searchPage">
            <div className="searchGrid">{listItems}</div>
        </div>
    )
}

export default ShowSearchResults
