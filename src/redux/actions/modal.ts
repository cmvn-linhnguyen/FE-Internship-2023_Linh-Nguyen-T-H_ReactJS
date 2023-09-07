import { TOGGLE_MODAL } from '../types/modal';

export const toggleModal = (isOpen: boolean) => {
  return { type: TOGGLE_MODAL, payload: isOpen };
};
