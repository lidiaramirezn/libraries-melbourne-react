import '@styles/footer.scss';

export function Footer({fixed = false}) {
  const classFooter = fixed ? 'footer footer--fixed' : 'footer footer--absolute';

  return(
  <footer className={classFooter}>
    <div className='container'>
      <p>Designed and built with all the love in the world <span className='footer__made'>by Lidia Ramirez</span></p>
      {/* <p><a>Repository</a></p> */}
    </div>
  </footer>)
}