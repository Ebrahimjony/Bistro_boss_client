import SectionTitle from "../../Components/SectionTitle";
import FeaturedImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="Featured-item bg-fixed text-white pt-10 mb-4">
            <SectionTitle subHeading='Check it out'
            heading='Featured item'></SectionTitle>
            <div className="md:flex justify-center  bg-slate-500 bg-opacity-50 items-center px-36 py-20">
                <img className="w-96" src={FeaturedImg} alt="" />
                <div className="ml-4">
                    <p>Aug 20 2027</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem perspiciatis inventore, quasi, animi, pariatur ipsum nemo cupiditate eius hic temporibus dolor exercitationem numquam provident. Maxime itaque molestiae Nihil quidem perspiciatis inventore, quasi, animi, pariatur ipsum nemo cupiditate eius hic temporibus dolor exercitationem numquam provident. Maxime itaque molestiae  iure impedit?</p>
               <button className="btn btn-outline border-0 border-b">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;