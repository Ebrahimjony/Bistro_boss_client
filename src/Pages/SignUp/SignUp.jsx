import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provoder/AuthProvider";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocalLoginGoogle from "../../Components/SocalLoginGoogle";
const SignUp = () => {
    const { createUser, updateUserProfile, logOut } = useAuth()
    const navigate = useNavigate()
    const axiosPublic=useAxiosPublic()

    const {
        register, handleSubmit, reset, formState: { errors }, } = useForm()

    // const handleSignUp = (e) => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     createUser(email, password)

    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user)
    //         })

    // } atar poribotte ata react hook form search

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                updateUserProfile(data.displayName, data.photoURL)
                    .then((result) => {
                        //Create user entry in the database
                        const userInfo={
                            name:data.displayName,
                            email:data.email,
                            photo:data.photoURL,
                        }
                        axiosPublic.post('/users',userInfo)
                        .then(res=>{
                          if(res.data.insertedId){
                             reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User create successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                          }
                        })
                    })
                    .catch(error => console.log(error.message))
            })
    }




    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">

                    <p className="py-6">
                        Provident cupiditate voluptatem et in.
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">SignUp!</h1>
                        <form //onSubmit={handleSignUp}
                            onSubmit={handleSubmit(onSubmit)} className="fieldset">

                            <label className="label">Name</label>
                            <input type="text"  {...register("displayName", { required: true })} className="input" placeholder="name" />
                            {errors.name && <span className="text-red-500">name is required</span>}

                            <label className="label">Photo URL</label>
                            <input type="url"  {...register("photoURL", { required: true })} className="input" placeholder="photo url" />
                            {errors.photoURL && <span className="text-red-500">photo is required</span>}

                            <label className="label">Email</label>
                            <input type="email"  {...register("email", { required: true })} name="email" className="input" placeholder="Email" />
                            {errors.email && <span className="text-red-500">Email is required</span>}


                            <label className="label">Password</label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                })} name="password" className="input" placeholder="Password" />

                            {errors.password?.type === "required" && <span className="text-red-500">Password is required</span>}

                            {errors.password?.type === "minLength" && <span className="text-red-500">Password must be 6 caracter</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-500">Password must be minimum  uppercase special case letter digits lowercase letters.</span>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">SignUp</button>
                        </form>
                        <p><small>here<Link to='/login'>have an account</Link></small></p>
                        <div className="divider m-0"></div>
                    </div>                 
                    <div className="-mt-8 p-3">
                        <SocalLoginGoogle className="ml-4"></SocalLoginGoogle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;