import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { ItemState } from './item'

export interface AppState {
  item: ItemState
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>
