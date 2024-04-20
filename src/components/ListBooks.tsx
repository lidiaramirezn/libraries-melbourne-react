import '@styles/books.scss';

export function ListBooks({books}) {
  return(
  <div className='books'>
    {
      books?.map((book: any) => 
        
        (
          <div 
            className='book'
            key={book.id}>
              {/* <div className='book__cover'></div> */}
              <img src={`./src/assets/recommended/${book.id}.jpg`} />
              {/* <p>{ book.name }</p>  */}             
          </div>
        )
      )
    }
  </div>
  )
}