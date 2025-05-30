import { FaTrashAlt } from "react-icons/fa";
import useCard from "../../hooks/useCard";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";


const Card = () => {
      //return korbo je vabe use koebo sei vabe example[]
    const [card,refetch] = useCard();
    const axiosSecure = useAxios()
    const totalPrice = card.reduce((total, item) => total + item.price, 0)

    const handleDeleted = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cards/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            //refetch() update the card
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        };
                    })
            }
        });
    }


    return (
        <div>
            <div className="">
                <h2 className="text-4xl text-center">My Card</h2>
            </div>
            <div className="flex justify-evenly mt-4">
                <h2 className="text-3xl">Item:{card.length}</h2>
                <h2 className="text-xl">Total Price{totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th># </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                card.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{item.name}</span>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDeleted(item._id)}
                                            className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Card;