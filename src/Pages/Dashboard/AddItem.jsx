import { useForm } from 'react-hook-form';
import SectionTitle from '../../Components/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxios from '../../hooks/useAxios'
import Swal from 'sweetalert2';

const imgbbHostingKey = import.meta.env.VITE_image_hostimg_api;
const imgbbHostingApi = `https://api.imgbb.com/1/upload?key=${imgbbHostingKey}`
const AddItem = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios()
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgbbHostingApi, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(res.data)
        if (res.data.success) {
            const addItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price),
            }
            const menuItem = await axiosSecure.post('/menu', addItem)
            console.log(menuItem.data)
            if (menuItem.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: ' is added the menu item',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's New"></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-6">
                        <legend className="fieldset-legend">Recipe name*</legend>
                        <input
                            {...register("name")}
                            type="text" className="input min-w-full"
                            placeholder="recipe name"
                        />
                    </div>
                    <div className="flex gap-6">
                        <div className='w-full'>
                            <legend className="fieldset-legend">caterory name*</legend>
                            <select
                                {...register("category")}
                                defaultValue="category"
                                className="select select-neutral
                                  w-full">
                                <option disabled>category</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizzas</option>
                                <option value='soup'>Soups</option>
                                <option value='dessert'>Dessert</option>
                                <option value='drink'>Drink</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <legend className="fieldset-legend">Price*</legend>
                            <input type="number"
                                {...register("price")}
                                placeholder="price" className=" flex-shrink-0 input input-neutral w-full" />
                        </div>
                    </div>
                    <div className="">
                        <legend className="fieldset-legend">Your bio</legend>
                        <textarea
                            {...register("recipe")}
                            className="textarea h-24 w-full" placeholder="Bio"></textarea>
                    </div>
                    <div className='w-full mt-4'>
                        <input
                            {...register("image", { required: true })}
                            type="file" className="file-input file-input-ghost" />
                    </div>

                    <button className='btn mt-4'>
                        Add Item <FaUtensils ml-4></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;