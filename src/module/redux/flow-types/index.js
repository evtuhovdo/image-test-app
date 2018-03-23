// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type {
  ImagesStoreStateType,
  ImagesStoreActionType,
} from './imagesStore';

export type ReduxInitActionType = { type: '@@INIT' };

// TODO: кроме Images в сторе есть ещё модули. Надо ли их тоже типизировать?
export type StateType = ImagesStoreStateType;

export type ActionType = ReduxInitActionType | ImagesStoreActionType;

export type StoreType = ReduxStore<StateType, ActionType>;

export type DispatchType = ReduxDispatch<ActionType>;
