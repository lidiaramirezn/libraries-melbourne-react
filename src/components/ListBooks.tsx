import '@/styles/books.scss';

export function ListBooks({books = []}) {
  const url = 'https://raw.githubusercontent.com/lidiaramirezn/libraries-melbourne-react/master';
  
  return(
  <div className='books'>
    {
      books?.map((book: any) => 
        
        (
          <div 
            className='book'
            key={book.id}>
              {/* <div className='book__cover'></div> */}
              <img src={`${url}/src/assets/recommended/${book.id}.jpg`} />
              {/* <p>{ book.name }</p>  */}             
          </div>
        )
      )
    }
  </div>
  )
}