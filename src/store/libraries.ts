import { create } from 'zustand';
import { getLibraries } from '@/services/getLibraries';

let initialState = {
  results: [],
  isLoading: false,
  error: undefined
}

type State = {
  results: any[];
  isLoading: boolean;
  error: undefined | object | Error;
};

type Actions = {
  onSetLibraries: () => Promise<void>;
};


export const useLibrariesStore = create<State & Actions>((set) => (
  {
    ...initialState,
    onSetLibraries: async() => {
      try {
        set({ isLoading: true, error: undefined });
        const response = await getLibraries();
        set({ results: response })
      } catch (e: any) {
        set({ error: e });
      } finally {
        set({ isLoading: false });
      }
    }
  }
))