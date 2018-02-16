import { IState } from './'
import { Symbols } from '~/constants'
import { Cafe } from 'models';

export const mutations = {
  [Symbols.MUTATIONS.SET_PEOPLE]: (state: IState, cafes: Array<Cafe>): void => {
    state.cafes = cafes
  },

  [Symbols.MUTATIONS.SELECT]: (state: IState, id: string): void => {
    state.selected = id
  }
}
