import { Cafe } from "models";
import { MutationTree } from "vuex";
import { Symbols } from "~/constants";
import { IState } from "./";

export const mutations: MutationTree<IState> = {
  [Symbols.MUTATIONS.SET_PEOPLE]: (state: IState, cafes: Cafe[]): void => {
    state.cafes = cafes;
  },

  [Symbols.MUTATIONS.SELECT]: (state: IState, id: string): void => {
    state.selected = id;
  },
};
