import { ApiEpisode, ApiEpisodeResponse, ApiShow, ApiShowsResults } from "../types/APITypes"
import { Episode, Show } from "../types/types"

export const removeHtmlTag = (rawText: string) => {

    return rawText.replace(new RegExp(/\<[\/bip]+\>/, 'g'), "")
}
export function apiToShows(rawData: ApiShowsResults): Show[] {
    const shows: Show[] = rawData.map((item: ApiShow) => {
        return {
            name: item.show.name,
            id: item.show.id,
            score: item.score,
            languaje: item.show.language,
            genres: item.show.genres,
            status: item.show.status,
            network: item.show.network ? item.show.network.name : "",
            imdb: item.show.externals.imdb,
            summary: item.show.summary,
            image: item.show.image ? item.show.image.medium : "",
        }
    })
    return shows
}
export function apiToEpisodes(rawData: ApiEpisodeResponse): Episode[] {
    const shows: Episode[] = rawData.map((item: ApiEpisode) => {
        return {
            id: item.id,
            url: item.url,
            name: item.name,
            season: item.season,
            number: item.number,
            airdate: item.airdate,
            image: item.image ? item.image.medium : "",
            summary: item.summary,
        }
    })
    return shows
}
export function setZeros(data:number) {
    const base = "00"+data
    return base.substring(base.length - 2) 
 }