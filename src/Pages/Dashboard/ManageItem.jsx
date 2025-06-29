import React from 'react';
import useMenu from '../../hooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useAxios from '../../hooks/useAxios'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const ManageItem = () => {
    const [menu,,refetch] = useMenu();
    const axiosSceure = useAxios();
    const handleDeleted = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSceure.delete(`/menu/${item._id}`)
                // console.log(res.data)
                refetch()
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }

    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=' bg-orange-500'>
                            <th>#</th>
                            <th>Item photo</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
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
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    {

                                        <Link to={`/dashboard/updateItem/:${item._id}`}>
                                        <button
                                            //    onClick={() => handleUpdate(item)}
                                            className="btn btn-lg bg-orange-500">
                                            <FaEdit className='font-2xl text-white'></FaEdit>
                                        </button></Link>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleted(item)}
                                        className="btn bg-red-600 btn-lg">
                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;