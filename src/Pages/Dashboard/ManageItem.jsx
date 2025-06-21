import React from 'react';
import useMenu from '../../hooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageItem = () => {
   const [menu] = useMenu();
//    const handleUpdate=(item)={
//    }

//    const handleDeleted=(id)=>{
//     console.log(id)
//    }

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
                                             
                                                 <button
                                                //    onClick={() => handleUpdate(item)}
                                                   className="btn btn-lg bg-orange-500">
                                                    <FaEdit className='font-2xl text-white'></FaEdit>
                                               </button>
                                             }
                                           </td>
                                           <td>
                                               <button
                                                //    onClick={() => handleDeleted(item._id)}
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