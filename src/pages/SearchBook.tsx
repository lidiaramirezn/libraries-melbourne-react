import { useForm, SubmitHandler } from "react-hook-form"
import '@/styles/search.scss';
import { Header } from '@/components';
import { useEffect, useState } from "react";
import { useBooks } from "../store/books";

type Inputs = {
  book: string
}

export function SearchBook() {

  const url = 'https://raw.githubusercontent.com/lidiaramirezn/libraries-melbourne-react/master';
  const onSetAllBooks = useBooks((state) => state.onSetAllBooks);
  const searchBooks = useBooks((state) => state.searchBooks);
  const resetBooks = useBooks((state) => state.reset);
  const books = useBooks((state) => state.books);
  const [initialStatus, setInitialStatus] = useState(false);

  const getAllBooks = async() => {
    await onSetAllBooks();
  }

  useEffect(() => {
    getAllBooks();    
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs>  = (data) => {
    setInitialStatus(true);
    searchBooks(data.book);
  }

  const resetSearch = () => {
    setInitialStatus(false);
    resetBooks();
    reset();
  }

  return(
    <>
      <Header/>
      <main className='search'>
        <section className='search__fields'>
          <form className='search__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='search__field'>
              <input
                className={touchedFields.book && errors.book ? 'input-invalid' : ''}
                placeholder='Enter a keyword, phare or topic' {...register("book", { 
                required: "This field is required",  
                minLength:  {
                  value: 2,
                  message: 'Search must be at least 2 letters',
                }
                })}></input>
              { touchedFields.book && errors.book && 
                <span className='search__error'>{errors.book.message}</span> }
            </div>
            <div className='search__wrapper-button'>
              <button type="submit" className='search__button'>
                <p>Search</p>                
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
              </button>
            </div>
          </form>
        </section>
        { initialStatus ? (
          books?.length ? 
            <section className="search__results">
              <p className="text" onClick={resetSearch}>Clean</p>
              {
                
                books.map((book) => (
                  <article className="result">    
                    <picture>
                      <img src={`${url}/src/assets/books/${book.id}.jpg`} alt="" />
                    </picture>
                    <div>
                      <h3 className="result__name">{book.name}</h3>
                      <p className="result__author">{book.author}</p>
                      { book.date ? 
                        <p className="result__date">{`Publishing ${book.date}`}</p> : undefined}     
                      { book.library ? 
                      <p className="result__library">
                        <span>
                          Available: 
                        </span>
                        {book.library}
                      </p> : undefined}        
                    </div>
                  </article>
                )
                )
              }
            </section>
          : 
            <section className='search__info'>
              <h3>No records were found for your search</h3>
              <p>There are no results matching your search</p>
            </section>
        )
          
          
          :
          <section className='search__info'>
            <p> 
              The information is just a mockup. 
              Use keywords: <strong>Javascript, PHP</strong>
              <br />
              The details that will be shown in the search are: 
            </p>
            <ul>
              <li>Name of the book (short)</li>
              <li>Author</li>
              <li>Library where the books are available</li>
            </ul>
          </section>
        }
        
      </main>
    </>
  )
}