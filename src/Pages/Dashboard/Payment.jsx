import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle";
import CheackoutForm from './CheackoutForm'
import { Elements } from "@stripe/react-stripe-js";
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    return (
        <div>
           <SectionTitle heading='Payment for your food'subHeading='payment info'></SectionTitle>
           <div>
            <Elements stripe={stripePromise}>
            <CheackoutForm></CheackoutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;