import '@styles/list-libraries.scss';
import { Library } from "@types/library";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ListLibraries({allLibraries}) {
  const [libraries, updateLibraries] = useState([])
  const navigate = useNavigate();
  
  const handleLibraryClick = (id: string) => {
    navigate(`/library/${id}`);
  }

  const showAll = () => {
    updateLibraries(allLibraries)
  }

  useEffect(()=>{
    updateLibraries(allLibraries.slice(0, 4))
  }, [allLibraries])

  return(
    <section className='list-libraries'>
      <div className='cards'>
        {
          libraries?.map((library: Library) => 
          (
            <div 
              key={library.id}
              className='card' 
              onClick={() => handleLibraryClick(library.id)}>
                <div className='card__overlay'></div>
              <img className='card__image' src={`./src/assets/library-${library.id}.jpg`}></img>
              <div className='card__title'>
                { library.name }
              </div>
            </div>
          )) 
        }
      </div>
      { libraries.length !== allLibraries.length ? (
        <div className='list-libraries__button'>
          <button onClick={showAll}>Show all ({allLibraries.length}) </button>
        </div>
      ) : undefined }
      
    </section>
  )
}