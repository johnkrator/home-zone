import {create} from "zustand";

interface IRegistrationStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const UseRegistrationModal = create<IRegistrationStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));

export default UseRegistrationModal;
