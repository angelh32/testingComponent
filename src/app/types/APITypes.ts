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