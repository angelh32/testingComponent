import { apiToShows } from "../../tools/helpers";
import { Show } from "../../types/types";

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
            .then(resJson => dispatch(successGettingShows(apiToShows(resJson))))
    }
};