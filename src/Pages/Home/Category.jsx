
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';
const Category = () => {
    return (
        <div className="">
            <SectionTitle
                subHeading={'From 11.00 to 10.00pm'}
                heading={'order online'}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper  mb-6"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" srcset="" />
                    <h3 className='text-3xl text-center text-white -mt-16 uppercase'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" srcset="" />
                    <h3 className='text-3xl text-center text-white -mt-16 uppercase'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" srcset="" />
                    <h3 className='text-3xl text-center text-white -mt-16 uppercase'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" srcset="" />
                    <h3 className='text-3xl text-center text-white -mt-16 uppercase'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" srcset="" />
                    <h3 className='text-3xl text-center text-white -mt-16 uppercase'>salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;