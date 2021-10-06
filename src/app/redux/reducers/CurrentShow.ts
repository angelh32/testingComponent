
import { Episode, Show } from "../../types/types";


export interface CurrentShowState {
    current: Show;
    episodes?: Episode[];
}

const initialState: CurrentShowState = {
    current: {},
    episodes: []
};

export const SET_CURRENT = "SET_CURRENT"
export const SET_EPPISODES = "SET_EPPISODES"

export type ActionCurrent = { type: string; payload: CurrentShowState };

export const CurrentShowReducer = (
    state: CurrentShowState = initialState,
    action: ActionCurrent
) => {
    switch (action.type) {
        case SET_CURRENT:
            return { ...state, current: action.payload.current }
        case SET_EPPISODES:
            return { ...state, episodes: action.payload.episodes }
        default:
            return state;
    }
};