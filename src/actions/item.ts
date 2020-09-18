import data from './data.json'
import {
  ActionTypes,
  GetItemRequestAction,
  GetItemSuccessAction,
  GetItemFailureAction,
  Data,
  Item
} from '../types/item'
import { AppThunk } from '../types/app'
import { sleep } from '../utils/sleep'

export function GetItemRequest(): GetItemRequestAction {
  return {
    type: ActionTypes.GET_ITEM_REQUEST
  }
}

export function getItemSuccess(item: Item): GetItemSuccessAction {
  return {
    type: ActionTypes.GET_ITEM_SUCCESS,
    item
  }
}

export function getItemFailure(error: Error): GetItemFailureAction {
  return {
    type: ActionTypes.GET_ITEM_FAILURE,
    error
  }
}

export function fetchItem(): AppThunk {
  return async (dispatch) => {
    dispatch(GetItemRequest())
    try {
      await sleep()
      const item = (data as Data)[0]
      dispatch(getItemSuccess(item))
    } catch (error) {
      dispatch(getItemFailure(error))
    }
  }
}
