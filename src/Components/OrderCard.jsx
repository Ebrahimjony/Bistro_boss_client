import useMenu from '../hooks/useMenu';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxios from '../hooks/useAxios'
import useCard from '../hooks/useCard';


const OrderCard = ({ item }) => {

  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigat = useNavigate();
  const location = useLocation();
  const axiosSecure=useAxios();
  const [,refetch]=useCard();
//, deoyar karon first user projon nai tai ',' use hoise
  const handleSpacifikItem = spacifikItem => {
    console.log(spacifikItem);
    if (user && user.email) {
      const sendSpacifikItem = {
        menuId: _id,
        email:user.email,
        name,
        image,
        price
      }

      axiosSecure.post('/cards', sendSpacifikItem)//hook theke astese
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} is added`,
              showConfirmButton: false,
              timer: 1500
            });
               // refetch() update process
            refetch()
          }
        })

    }
    else {
      Swal.fire({
        title: "please login?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigat('/login', { state: { from: location } })
        }
      });
    }
  }


  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image} />
      </figure>
      <p className='bg-slate-900 absolute right-2 text-white p-1 rounded-xl mt-4 mr-4'>${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleSpacifikItem(item)}
            className="btn btn-outline border-0 border-b">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;