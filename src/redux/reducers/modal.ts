import { TOGGLE_MODAL } from '../types/modal';

export interface ModalState {
  isOpen: boolean;
}

export const initialState: ModalState = {
  isOpen: false,
};

export const modalReducer = (state = initialState, action: any): ModalState => {
  const objReducer: Record<string, () => ModalState> = {
    [TOGGLE_MODAL]: () => {
      return { ...state, isOpen: action.payload };
    },
  };
  return typeof objReducer[action.type] === 'function'
    ? objReducer[action.type]()
    : state;
};
