import {create} from "zustand/react";

interface UiState{
    tabIndex: number;
}
interface UiActions {
    setTabIndex: (index: number) => void;
}

type UiStore = UiState & UiActions;

const useUiStore = create<UiStore>((set) => ({
    tabIndex: 0,
    setTabIndex: (index: number) => set({ tabIndex: index }),
}));

export default useUiStore