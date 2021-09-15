import * as React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { fetchShows } from "../redux/actions/GetShows";
import { RootState } from "../redux/store";
import ShowComponent from "./ShowComponent";
import { useHistory } from "react-router-dom"


interface SearchShowBarProps { }

const SearchShowBar: React.FC<SearchShowBarProps> = (props) => {

    const dispatch: Dispatch<any> = useDispatch()
    const [query, setQuery] = useState<string>("doctor")
    const [searchInfo, setSearchInfo] = useState<string>("doctor")
    let history = useHistory();

    const getShows = async (filter: string) => {
        setSearchInfo(filter)
        dispatch(fetchShows(searchInfo))
    }

    useEffect(() => {
        getShows(searchInfo)
    }, [searchInfo])

    function handleSearch(action: React.FormEvent<HTMLFormElement>) {
        action.preventDefault()
        getShows(query)//.then(()=>history.push("/"))
        
    }

    const handleOnChange = (action) => {
        action.preventDefault()
        console.log("Action.target.value", action.target.value)
        setQuery(action.target.value)
    }

    return (
        <div className="searchPage">
            <form className="searchForm" onSubmit={handleSearch}>
                <input type="text" onChange={handleOnChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchShowBar
