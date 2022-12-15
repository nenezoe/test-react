import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./RegistrationScreen.css";


const RegistrationScreen = () => {

    return (
        <div className="registration">
            <div> <img  src="/images/pix.jpeg" alt="img"/></div>
            <div>
                <h3>Create Organizer Account</h3>
                <p>Please be have your comprtition details ready as they are required during regestration </p>

            <RegisterForm />
            </div>

        </div>
    )
}

export default RegistrationScreen;