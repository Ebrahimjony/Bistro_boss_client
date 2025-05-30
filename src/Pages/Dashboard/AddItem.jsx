import { useForm } from 'react-hook-form';
import SectionTitle from '../../Components/SectionTitle';
import { FaUtensils } from 'react-icons/fa';


const AddItem = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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
                         {...register("image")}
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