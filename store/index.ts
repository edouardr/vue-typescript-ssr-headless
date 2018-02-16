import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { Cafe } from '~/models'
import { inject } from 'inversify'

export interface IState {
  selected: string,
  cafes: Array<Cafe>
}

export const state = () => ({
  selected: '',
  cafes: []
})

export { actions, getters, mutations }
