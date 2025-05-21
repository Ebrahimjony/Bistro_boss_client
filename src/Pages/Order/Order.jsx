import Cover from '../Menu/Cover'
import coverImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import OrderCard from '../../Components/OrderCard';
import { useParams } from 'react-router-dom';
import OrderTab from '../../Components/OrderTab';

const Order = () => {
    const categories=['salads','pizzas','soups','desserts','drinks'];
     const {category}=useParams();
     const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
       const [menu] = useMenu();
      
    const drinks = menu.filter(item => item.category === 'drinks')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')

    return (
        <div className=''>
            <Cover img={coverImg} title={"order food"} ></Cover>

            <Tabs className=' flex flex-col items-center' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salads</Tab>
                    <Tab>Pizzas</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                      <OrderTab item={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                      <OrderTab item={pizzas}></OrderTab>               
                </TabPanel>
                <TabPanel>                
                      <OrderTab item={soups}></OrderTab>                   
                </TabPanel>
                <TabPanel>
                    <OrderTab item={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;