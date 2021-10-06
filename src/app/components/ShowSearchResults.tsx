import { Grid } from '@mui/material';
import * as React from "react";
import { useSelector } from 'react-redux';
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
      <Grid container spacing={2}>
        {listItems}
      </Grid>
    );
}

export default ShowSearchResults
