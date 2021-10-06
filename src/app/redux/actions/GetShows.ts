import { apiToEpisodes, apiToShows } from "../../tools/helpers";
import { Show } from "../../types/types";
import { SET_EPPISODES } from "../reducers/CurrentShow";
import fetch from "node-fetch";
import { ApiEpisodeResponse, ApiShowsResults } from "../../types/APITypes";

export const START_GETTING_SHOWS = "START_GETTING_SHOWS"
export const SUCCESS_GETTING_SHOWS = "SUCCESS_GETTING_SHOWS"

export const startGettingShows = payload => ({
    type: START_GETTING_SHOWS,
    ...payload
});

export const successGettingShows = payload => ({
    type: SUCCESS_GETTING_SHOWS,
    list: payload
});

export const fetchShows = searchInfo => {
    return dispatch => {
        return fetch(`https://api.tvmaze.com/search/shows?q=${searchInfo}`)
            .then(apicall => apicall.json())
            .then(resJson => dispatch(successGettingShows(apiToShows(resJson as ApiShowsResults))))
    }
};

export const successGettingEpisodes = payload => ({
    type: SET_EPPISODES,
    payload
});

export const fetchEpisodes = searchInfo => {
    return dispatch => {
        return fetch(`https://api.tvmaze.com/shows/${searchInfo}/episodes`)
            .then(apicall => apicall.json())
            .then(resJson => dispatch(successGettingEpisodes({ episodes: apiToEpisodes(resJson as ApiEpisodeResponse) })))
    }
};

export const fetchEpisodeInfo = searchInfo => {
    return dispatch => {
        return fetch(`https://api.tvmaze.com/search/shows?q=${searchInfo}`)
            .then(apicall => apicall.json())
            .then(resJson => dispatch(successGettingShows(apiToShows(resJson as ApiShowsResults))))
    }
};