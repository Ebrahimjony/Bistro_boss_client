import Cover from '../Menu/Cover'
import menuImg from "../../assets/menu/banner3.jpg"
import menuImg2 from "../../assets/menu/dessert-bg.jpeg"
import menuImg3 from "../../assets/menu/pizza-bg.jpg"
import menuImg4 from "../../assets/menu/soup-bg.jpg"
import menuImg5 from "../../assets/menu/salad-bg.jpg"
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';
import SectionTitle from '../../Components/SectionTitle';
import { Link } from 'react-router-dom'

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    return (
        <div>
            {/* our menu item */}
            <Cover img={menuImg} title={"our menu"}></Cover>
            <SectionTitle
                subHeading="Don't Miss"
                heading={"today's offer"}>
            </SectionTitle>
            <MenuCategory
                items={offered}
                btn='order your favourite food'
            ></MenuCategory>

            {/* desserts item */}
            <MenuCategory title={'desserts'} img={menuImg3} items={desserts}></MenuCategory>

            {/* pizza item */}
            <MenuCategory title={'pizzas'} img={menuImg2} items={pizzas}></MenuCategory>

            {/* Soups item */}
            <MenuCategory title={'soups'} img={menuImg4} items={soups}></MenuCategory>

            {/* salad item */}
            <MenuCategory title={'salads'} img={menuImg5} items={salads}></MenuCategory>
        </div>
    );
};

export default Menu;