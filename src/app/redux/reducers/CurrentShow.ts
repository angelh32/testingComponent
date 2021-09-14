
import { Show } from "../../types/types";


export interface CurrentShowState {
    current: Show;
}

const initialState: CurrentShowState = {
    current: {},
};

export const SetCurrent = "SET_CURRENT"

export type ActionCurrent = { type: string; current: Show };

export const CurrentShowReducer = (
    state: CurrentShowState = initialState,
    action: ActionCurrent
) => {

    switch (action.type) {
        case SetCurrent:
            return { shows: action.current }
        default:
            return state;
    }
};