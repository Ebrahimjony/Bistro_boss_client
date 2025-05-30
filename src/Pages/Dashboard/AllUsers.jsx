import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxios()
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers:{
                    Authorization:`bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:`${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    const handleDeleted = (id) => {
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
                    axiosSecure.delete(`/users/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                //refetch() update the card
                                          refetch();
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
            <h1 className="text-3xl">All Users :{users.length}</h1>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className=' bg-orange-500'>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                      {
                                        user.role==='admin' ? 'admin' :
                                        
                                          <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-lg bg-orange-500">
                                            <FaUsers className='font-2xl text-white'></FaUsers>
                                        </button>
                                      }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleted(user._id)}
                                            className="btn bg-red-600 btn-lg"><FaTrashAlt className="text-white"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;