
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='w-full max-w-2xl mx-auto'>
            <h1 className='text-3xl'>User Review</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='text-xl'>Name</label>
                <input 
                type='text'className='input w-full'{...register("name", { required: true, maxLength: 20 })} />

                <legend className='text-xl'>Details</legend>
                <input type="text" className='input  w-full' {...register("details", {  max: 99 })} />

                <legend className='text-xl w-full'>Rating</legend>
                <input type='number' className='input w-full' {...register("rating", { required: true })} /><br />
               <button className='btn mt-2 '>Add Review
                
               </button>
            </form>
        </div>
    );
};

export default Review;