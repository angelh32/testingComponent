export interface Show {
    name?: string
    score?: number
    id?: number
    languaje?: string
    genres?: string[]
    status?: string
    network?: string
    imdb?: string
    summary?: string
    image?: string
}
export interface Episode {
    id: number,
    url: string,
    name: string,
    season: number,
    number: number,
    airdate: string,
    image: string,
    summary: string,
}