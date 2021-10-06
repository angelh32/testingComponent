import { apiToEpisodes, apiToShows } from "../../tools/helpers"
import { ApiEpisodeResponse, ApiShowsResults } from "../../types/APITypes"

export const callApi  = (url: string) => {
    return fetch(url)
}

export const callApiShow = (searchInfo) => {
    return callApi(`https://api.tvmaze.com/search/shows?q=${searchInfo}`)
        .then(apicall => apicall.json())
        .then(resJson => apiToShows(resJson as ApiShowsResults))
}

export const callApiEpisodeList = (searchInfo) => {
    return callApi(`https://api.tvmaze.com/shows/${searchInfo}/episodes`)
        .then(apicall => apicall.json())
        .then(resJson => apiToEpisodes(resJson as ApiEpisodeResponse))
}
export const callApiEpisodeInfo = (searchInfo) => {
    return callApi(`https://api.tvmaze.com/search/shows?q=${searchInfo}`)
        .then(apicall => apicall.json())
        .then(resJson => apiToShows(resJson as ApiShowsResults))
}

export default callApi;