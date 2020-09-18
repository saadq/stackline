import { ItemState, ItemAction, ActionTypes } from '../types/item'

const initialState: ItemState = {
  item: null,
  loading: false,
  errorMessage: ''
}

export function sales(
  state: ItemState = initialState,
  action: ItemAction
): ItemState {
  switch (action.type) {
    case ActionTypes.GET_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      }

    case ActionTypes.GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.item
      }

    case ActionTypes.GET_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error.message
      }

    default:
      return state
  }
}
