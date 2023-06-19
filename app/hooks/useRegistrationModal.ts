import {create} from "zustand";

interface IRegistrationStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegistrationModal = create<IRegistrationStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default useRegistrationModal;
