import { Dispatch, SetStateAction, createContext } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});
