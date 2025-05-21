import { Link } from 'react-router-dom';
import PopularItemCard from '../../Components/PopularItemCard';
import SectionTitle from '../../Components/SectionTitle';
import Cover from './Cover';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div className=' flex flex-col items-center mt-4 mb-4'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
                {
                    items.map(item => <PopularItemCard key={item._id}
                        item={item}></PopularItemCard>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b uppercase">order your favourite food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;