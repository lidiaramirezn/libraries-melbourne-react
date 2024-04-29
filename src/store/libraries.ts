import { create } from 'zustand';
import { getLibraries } from '@/services/getLibraries';

let initialState = {
  libraries: [],
  library: [],
  isLoading: false,
  error: undefined
}

type State = {
  libraries: any[];
  library: any;
  isLoading: boolean;
  error: undefined | object | Error;
};

type Actions = {
  onSetLibraries: () => Promise<void>;
  getLibrary: (id: string | undefined) => void;
};


export const useLibrariesStore = create<State & Actions>((set, get) => (
  {
    ...initialState,
    onSetLibraries: async() => {
      try {
        set({ isLoading: true, error: undefined });
        const response = await getLibraries();
        set({ libraries: response })
      } catch (e: any) {
        set({ error: e });
      } finally {
        set({ isLoading: false });
      }
    },
    getLibrary: (id) => {
      const { libraries } = get()
      const dataFilter = libraries.filter(library => library.id === id);
      set({ library : dataFilter[0] });
    }
  }
))