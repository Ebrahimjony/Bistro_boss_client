import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../Components/SectionTitle";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="">
            <SectionTitle
                subHeading='whats Our Clients Say'
                heading={'testimonials'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper items-center">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>

                        <div className="flex flex-col items-center mx-24 my-12 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p>{review.details}</p>

                            <h2 className="text-2xl text-orange-600">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;