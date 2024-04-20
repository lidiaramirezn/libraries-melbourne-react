const URL = 'https://demo4977042.mockable.io';

export const getRecommendedBooks = async () => {
  try {
    const response = await fetch(`${URL}/recommended-books`);
    const books = await response.json();

    return books?.map((book: any) =>({
      id: book.id,
      name: book.name
    }));
  } catch (error) {
    throw new Error('Error with books API')
  }
}

export const getAllBooks = async () => {
  try {
    const response = await fetch(`${URL}/books`);
    const books = await response.json();

    return books;
  } catch (error) {
    throw new Error('Error with books API')
  }
}