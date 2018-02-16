import { ActionTree } from 'vuex'
import { getPeople } from '~/api/people'
import { Symbols } from '~/constants'
import { ICafeService } from 'api/icafe-service'
import { lazyInject } from '~/ioc'
import { CafeService } from '~/api/cafe-service';

interface ActionRepository {
  select({ commit }, id: number)
}

export var actions = {

  async nuxtServerInit({ commit }) {
    const service: ICafeService = new CafeService
    let cafes = await service.getAll();
    commit(Symbols.MUTATIONS.SET_PEOPLE, cafes && cafes.items)
  },

  select({ commit }, id: string) {
    commit(Symbols.MUTATIONS.SELECT, id)
  }
}


