import { DOCK_WINDOWS } from "src/components/desktop/dock";
import { create } from "zustand";

interface WindowState {
  visible: boolean;
  expanded: boolean;
  width: number;
  height: number;
}

interface DraggableWindowsState {
  [key: string]: WindowState;
}

interface DraggableWindowsStore {
  windows: DraggableWindowsState;
  toggle: (id: string) => void;
  expand: (id: string) => void;
  visible: (id: string) => boolean;
  expanded: (id: string) => boolean;
}

const initialWindowsState: DraggableWindowsState = {
  [DOCK_WINDOWS.ABOUT_ME]: { visible: true, expanded: false, width: 0, height: 0 },
};

const useDraggableWindows = create<DraggableWindowsStore>((set, get) => ({
  windows: initialWindowsState,
  toggle: (id: string) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], visible: !state.windows[id]?.visible },
      },
    })),
  expand: (id: string) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], expanded: !state.windows[id]?.expanded },
      },
    })),

  visible: (id: string) => get().windows[id]?.visible || false,
  expanded: (id: string) => get().windows[id]?.expanded || false,
}));

export default useDraggableWindows;
