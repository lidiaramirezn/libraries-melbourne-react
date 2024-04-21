import '@/styles/header.scss';
import { Link } from 'react-router-dom';

export function Header() {
  const url = 'https://raw.githubusercontent.com/lidiaramirezn/libraries-melbourne-react/master';
  return(
  <header className='header'>

    <div className='header__container'>
      <Link to="/" relative="path">
        <div className='header__logo'>
          <svg width="43" height="43" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.5 23.8939C37.6955 19.0517 31.8307 14.2095 17.2958 13.8542C16.3411 13.8309 15.5625 14.6063 15.5625 15.5613C15.5625 22.6456 15.5625 49.4659 15.5625 57.398C15.5625 58.3528 16.3411 59.1029 17.2956 59.134C31.8307 59.6092 37.6955 66.0535 41.5 70.8958M41.5 23.8939C45.3045 19.0517 51.1692 14.2095 65.7042 13.8542C66.659 13.8309 67.4375 14.5889 67.4375 15.5439C67.4375 23.463 67.4375 49.4763 67.4375 57.3955C67.4375 58.3504 66.659 59.1029 65.7045 59.134C51.1695 59.6092 45.3045 66.0535 41.5 70.8958M41.5 23.8939V70.8958" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M66.5221 20.75H74.3542C75.309 20.75 76.0833 21.5242 76.0833 22.4792V67.5724C76.0833 68.9716 74.4347 69.9012 73.1558 69.333C70.4061 68.1112 65.8173 66.6186 59.8088 66.6186C49.6371 66.6186 41.5 72.625 41.5 72.625C41.5 72.625 33.3627 66.6186 23.1912 66.6186C17.1825 66.6186 12.5937 68.1112 9.84403 69.333C8.56518 69.9012 6.91666 68.9716 6.91666 67.5724V22.4792C6.91666 21.5242 7.69084 20.75 8.64582 20.75H16.4779" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          </svg>
          <p>Libraries <br></br> Melbourne</p>
        </div>
      </Link>
      <div>
        <a href="" target='_blank'>
          <img width={30} height={30} src={`${url}/src/assets/github.png`} alt="" />
        </a>
      </div>
    </div>
  </header>)
}