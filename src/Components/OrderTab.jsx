
import OrderCard from './OrderCard';

const OrderTab = ({item}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
                        {
                            item.map(item=><OrderCard
                            key={item._id}
                            item={item}></OrderCard>)
                        }
                    </div>
    );
};

export default OrderTab;