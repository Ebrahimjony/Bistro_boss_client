import SectionTitle from "../../Components/SectionTitle";
import PopularItemCard from "../../Components/PopularItemCard";
import useMenu from "../../hooks/useMenu";

const PopularItem = () => {
    const[menu,loading]=useMenu() //coustome hook
    
       const PopularItem=menu.filter(item=>item.category==='popular')
   
    return (
        <div>
            <SectionTitle heading='Form Our Mune'
            subHeading='Popular item'>
            </SectionTitle>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {
                    PopularItem.map(item=><PopularItemCard key={item._id}
                    item={item}></PopularItemCard>)
                }
            </div>
        </div>
    );
};

export default PopularItem;