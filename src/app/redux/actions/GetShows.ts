import { apiToEpisodes, apiToShows } from "../../tools/helpers";
import { Show } from "../../types/types";
import { SET_EPPISODES } from "../reducers/CurrentShow";
// import fetch from "node-fetch";
import { ApiEpisodeResponse, ApiShowsResults } from "../../types/APITypes";
import { callApi, callApiEpisodeInfo, callApiEpisodeList, callApiShow } from "./ApiCall";

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
        return callApiShow(searchInfo)
            .then(resJson => dispatch(successGettingShows(resJson)))
    }
};

export const successGettingEpisodes = payload => ({
    type: SET_EPPISODES,
    payload
});

export const fetchEpisodes = searchInfo => {
    return dispatch => {
        return callApiEpisodeList(searchInfo)
            .then(resJson => dispatch(successGettingEpisodes({ episodes: resJson })))
    }
};

export const fetchEpisodeInfo = searchInfo => {
    return dispatch => {
        return callApiEpisodeInfo(searchInfo)
            .then(resJson => dispatch(successGettingShows(resJson)))
    }
};