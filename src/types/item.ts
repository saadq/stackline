export interface Review {
  customer: string
  review: string
  score: number
}

export interface Sale {
  weekEnding: string
  retailSales: number
  wholesaleSales: number
  unitsSold: number
  retailerMargin: number
}

export interface Item {
  id: string
  title: string
  image: string
  subtitle: string
  brand: string
  reviews: Array<Review>
  retailer: string
  details: Array<string>
  tags: Array<string>
  sales: Array<Sale>
}

export type Data = Array<Item>

export interface ItemState {
  item: Item | null
  loading: boolean
  errorMessage: string
}

export enum ActionTypes {
  GET_ITEM_REQUEST = 'GET_ITEM_REQUEST',
  GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS',
  GET_ITEM_FAILURE = 'GET_ITEM_FAILURE'
}

export interface GetItemRequestAction {
  type: ActionTypes.GET_ITEM_REQUEST
}

export interface GetItemSuccessAction {
  type: ActionTypes.GET_ITEM_SUCCESS
  item: Item
}

export interface GetItemFailureAction {
  type: ActionTypes.GET_ITEM_FAILURE
  error: Error
}

export type ItemAction =
  | GetItemRequestAction
  | GetItemSuccessAction
  | GetItemFailureAction
