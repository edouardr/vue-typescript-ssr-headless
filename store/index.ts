import { inject } from "inversify";
import Vuex from "vuex";
import { CafeService } from "~/api/cafe-service";
import { Cafe } from "~/models";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export interface IState {
  cafes: Cafe[];
  selected: string;
}

const createStore = () => {
  return new Vuex.Store<IState>({
    actions,
    getters,
    mutations,
    state: {
      cafes: [],
      selected: "",
    },
  });
};

export default createStore;
