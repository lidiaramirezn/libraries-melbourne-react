import { useEffect, useState } from 'react';
import { getRecommendedBooks } from '@services/getBook';

export function useRecommended() {
  const [recommendedBooks, updateBooks] = useState([]);

  const getBooks = async() => {
    const data = await getRecommendedBooks();
    updateBooks(data);
  }

  useEffect(() => {
    getBooks();
  }, [])

  return { recommendedBooks }
}