import { create } from 'zustand';
import { getAllBooks } from '@/services/getBook';

const initialState = {
  allbooks: [],
  books: [],
  isLoading: false,
  error: undefined
}

type State = {
  allbooks: any[];
  books: any[];
  isLoading: boolean;
  error: undefined | object | Error;
}

type Actions = {
  onSetAllBooks: () => Promise<void>;
  searchBooks: (input: string) => void;
  reset: () => void;
};

export const useBooks = create<State & Actions>((set, get) => (
  {
    ...initialState,
    onSetAllBooks: async() => {
      try {
        set({ isLoading: true, error: undefined });
        const response = await getAllBooks();
        set({ allbooks: response })
      } catch (e: any) {
        set({ error: e });
      } finally {
        set({ isLoading: false });
      }
    },
    searchBooks: (input) => {
      set({ books: [] });
      const { allbooks } = get()
      const dataFilter = allbooks.filter((book) => {
        return book.name.toLowerCase().includes(input.toLowerCase())
      });
      set({ books: dataFilter });
    },
    reset: () => {
      set({ books: [] });
    },
  }
))