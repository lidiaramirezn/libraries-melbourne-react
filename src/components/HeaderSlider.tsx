import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '@/styles/header-slider.scss';

const data = [
  {
    id: '01',
    imgMobile: './src/assets/portada-mobile-01.jpg',
    imgDesktop: './src/assets/portada-01.jpg'
  },
  {
    id: '02',
    imgMobile: './src/assets/portada-mobile-02.jpg',
    imgDesktop: './src/assets/portada-02.jpg'
  },
  {
    id: '03',
    imgMobile: './src/assets/portada-mobile-03.jpg',
    imgDesktop: './src/assets/portada-03.jpg'
  },
  {
    id: '04',
    imgMobile: './src/assets/portada-mobile-04.jpg',
    imgDesktop: './src/assets/portada-04.jpg'
  }
]

export function HeaderSlider() {
  
  return(
    <header className='header-slider'>
      <h1 className='title'>
        <div className='title__main'>Libraries</div>
        <div className='title__second'>MELBOURNE</div>
        <div className='title__text'>Spaces to read, to study</div>
      </h1>
      <Swiper 
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
          {
            data.map((item) => (
              <SwiperSlide key={item.id}>
                <picture>
                  <source media="(max-width: 1200px)" srcSet={item.imgMobile}/>
                  <img src={item.imgDesktop} />
                  <div className='wave'>
                  <svg fill="#fff" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
    </svg>
                  </div>
                </picture>
                
              </SwiperSlide>
            ))
          }
      </Swiper>
    </header>
  )
}