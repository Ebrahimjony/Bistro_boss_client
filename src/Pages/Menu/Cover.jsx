import PopularItem from "../Home/PopularItem";


const Cover = ({ img, title }) => {
    return (
        <div className="">
            <div
                className="hero h-[700px] w-[1280px]"
                style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md p-6 border-2 rounded-xl bg-slate-500 bg-opacity-50">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Cover;