import * as React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchEpisodes } from "../redux/actions/GetShows";
import { RootState } from "../redux/store";
import { setZeros } from "../tools/helpers";
import { Show } from "../types/types";
// .replace(new RegExp(/\<[\/bp]\>/, 'g'),"")
interface ShowDetailsPageProps {
    show: Show;
    match: any;
}

const ShowDetailsPage: React.FC<ShowDetailsPageProps> = ({
    match
}: ShowDetailsPageProps) => {

    const dispatch: Dispatch<any> = useDispatch()
    const episodes = useSelector((state: RootState) => state.CurrentShowReducer.episodes)
    useEffect(() => {
        dispatch(fetchEpisodes(match.params.id))
    }, [])
    const listEpisodes = episodes.map(item=>{return <p key={item.id}>{`S${setZeros(item.season)}E${setZeros(item.number)} ${item.name}`}</p>})
    return (
        <div>
            {listEpisodes}
        </div>
    )
}

export default ShowDetailsPage
