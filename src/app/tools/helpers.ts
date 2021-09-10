import { ApiShow, ApiShowsResults } from "../types/APITypes"
import { Show } from "../types/types"

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