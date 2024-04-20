import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLibrariesStore } from '@/store/libraries';
import { ILibrary, ISchedule } from '@/interfaces/library';
import '@/styles/library.scss';
import { convertTime } from '@/utils/convertTime';
import { Header, Footer } from '@/components';


function Library() {

  const { id } = useParams();
  const libraries = useLibrariesStore((state) => state.results);
  const [library, setLibrary] = useState<ILibrary>({id: '', name: ''})

  useEffect(() => {
    let dataFilter = libraries.filter(library => library.id === id);
    setLibrary(dataFilter?.[0]);
  }, [])
  
  return(
    <>
      <Header/>
      <main>
        {
          Object.keys(library)?.length ? (
          <section className='library'>
            <h1 className='library__title'>{ library.name }</h1>
            <p className="library__address">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
              fill="currentColor"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
              <a href={library.linkAddress} target='_blank'>
                {library.address}
              </a>
            </p>
            <img src={`./../src/assets/library-${library.id}.jpg`} alt='' />
            <div className="library__info">
              <div className="library__info-item">
                Opening hours:
              </div>
              <div className="library__info-item">
                <ul>
                  {
                    library.schedule?.map((time: ISchedule) => (
                      <li className="library__time">
                        <p>{`${time.day}: `}</p>
                        <p> {time?.start_time ? `${convertTime(time.start_time)} - ${convertTime(time.end_time)}`: 'Cerrado'}</p>                  
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
              
              <div></div>
            </div>
          </section>
          ) : undefined
        }
      </main>
      <Footer />
    </>
  )
}

export default Library;