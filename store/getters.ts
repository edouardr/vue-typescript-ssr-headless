import { GetterTree } from "vuex";
import { Cafe } from "~/models";
import { IState } from ".";

export const getters: GetterTree<IState, IState> = {
  selectedCafe: (state: IState): Cafe => {
    return state.cafes && state.cafes.find((cafe) => cafe.id === state.selected) || new Cafe();
  },
};
