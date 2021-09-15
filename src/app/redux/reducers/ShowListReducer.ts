import { Episode, Show } from "../../types/types";
import { SUCCESS_GETTING_SHOWS } from "../actions/GetShows";


export interface ShowListState {
  shows: Show[];
}

const initialState = {
  shows: [],
};


export type ActionShowList = { type: string; list: Show[] };

export const ShowListReducer = (
  state: ShowListState = initialState,
  action: ActionShowList
) => {
  console.log("🚀 ~ file: ShowListReducer.ts ~ line 20 ~ state", action.type, state)
  switch (action.type) {
    case SUCCESS_GETTING_SHOWS:
      return { shows: action.list }
    default:
      return state;
  }
};