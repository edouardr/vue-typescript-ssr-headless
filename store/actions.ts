import { ActionContext, ActionTree } from "vuex";
import { CafeService } from "~/api/cafe-service";
import { ICafeService } from "~/api/icafe-service";
import { Symbols } from "~/constants";
import { IState } from "./";

export const actions: ActionTree<IState, IState> = {
  async nuxtServerInit({ commit }: ActionContext<IState, IState>) {
    const cafeService: ICafeService = new CafeService();
    const cafes = await cafeService.getAll();
    commit(Symbols.MUTATIONS.SET_PEOPLE, cafes && cafes.items);
  },

  select({ commit }: ActionContext<IState, IState>, id: string) {
    commit(Symbols.MUTATIONS.SELECT, id);
  },

};
