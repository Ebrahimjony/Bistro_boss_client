import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const MainLayout = () => {
    const location=useLocation()
    const noHeaderFooter=location.pathname.includes('login')||location.pathname.includes('signup')
    return (
        <div className="">
           {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;