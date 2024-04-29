import { useEffect } from 'react';
import '@/styles/home.scss';
import { Footer, HeaderSlider, ListBooks, ListLibraries } from '@/components';
import { useLibrariesStore } from '@/store/libraries.ts';
import { useRecommended } from '@/hooks/useRecommendBook.ts';
import { useNavigate } from 'react-router-dom';

function Home() {
  const onSetLibraries = useLibrariesStore((state) => state.onSetLibraries);
  const allLibraries: any = useLibrariesStore((state) => state.libraries);
  const { recommendedBooks } = useRecommended();
  const navigate = useNavigate();
  
  const getAllLibraries = async() => {
    await onSetLibraries();
  }

  useEffect(() => {
    getAllLibraries();    
  }, [])

  const handleSearchBookClick = () => {
    navigate('/search-book');
  }

  return (
    <>
      <HeaderSlider/>
      <main className='container  home__container'>
        <section className='section'>
          <div className='intro'>
            <div className='intro__title'>
              <span>Libraries</span>
              <br />
              <span>Melbourne</span>              
            </div>
            <div className='intro__text'>
              <p>
              This website is inspired by the public libraries of Melbourne, Australia. In this demo I only mention 08 libraries.
              </p>
              <p>
                Public resources from the following pages have been used on this website:&nbsp;
                <a target='_blank' href='https://www.slv.vic.gov.au/'>State Library Victoria</a>&nbsp; and &nbsp;
                <a  target='_blank' href='https://librarysearch.melbourne.vic.gov.au/cgi-bin/spydus.exe/MSGTRN/WPAC/HOME'>City of Melbourne Libraries</a>
              </p>
            </div>
          </div>
          
        </section>
        <section className='section'>
          <h2 className='subtitle'>Libraries</h2>
          <div className='list-cards'>
            <ListLibraries allLibraries={allLibraries} />
          </div>
        </section>
        <section className='section'>
          <h2 className='subtitle'>Books of the month</h2>
          <div className='list-books'>
            <ListBooks books={recommendedBooks}/>
          </div>
          <div className='list-books__button'>
            <button onClick={handleSearchBookClick}>Search book</button>
          </div>
        </section>        
      </main>
      <Footer />
    </>
  )
}

export default Home
