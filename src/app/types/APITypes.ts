// https://api.tvmaze.com/search/shows?q=${searchInfo}
export type ApiShowsResults = ApiShow[]
export interface ApiShow {
    score: number,
    show: {
        id: number,
        url: string,
        name: string,
        type: string,
        language: string,
        genres: string[],
        status: string,
        runtime: number,
        averageRuntime: number,
        premiered: string,
        officialSite: string,
        schedule: {
            time: string,
            days: string[]
        },
        rating: {
            average: number
        },
        weight: number,
        network: {
            id: 8,
            name: string,
            country: {
                name: string,
                code: string,
                timezone: string
            }
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
            tvrage: number,
            thetvdb: number,
            imdb: string
        },
        image: {
            medium: string,
            original: string
        },
        summary: string,
        updated: number,
        _links: {
            self: {
                href: string
            },
            previousepisode: {
                href: string
            }
        }
    }
}

/**
 * Episodes API
 * https://api.tvmaze.com/shows/{showId}/episodes
 */

export type ApiEpisodeResponse = ApiEpisode[]
export interface ApiEpisode {
    id: number,
    url: string,
    name: string,
    season: number,
    number: number,
    type: string,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    image: {
        medium: string,
        original: string
    },
    summary: string,
    _links: {
        self: {
            href: string
        }
    }
}

/**
 * Episodes API
 * https://api.tvmaze.com/episodes/{episodeId}
 */

export interface ApiEpisodeInfo {
    id: number,
    url: string,
    name: string,
    season: number,
    number: number,
    type: string,
    airdate: string,
    airtime: string,
    airstamp: string,
    runtime: number,
    image: {
        medium: string,
        original: string
    },
    summary: string,
    _links: {
        self: {
            href: string
        }
    }
}