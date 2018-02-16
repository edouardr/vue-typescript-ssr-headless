import { Cafe } from "~/models";
import { IState } from ".";

export const getters = {
  selectedCafe: (state: IState):Cafe => {
    console.log(state.cafes)
    return state.cafes && state.cafes.find(cafe => cafe.id === state.selected) || new Cafe()
  }
}
