import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h2>Oops..!</h2>
            <NavLink to={'/'}><button>Back to home</button></NavLink>
        </div>
    );
};

export default Error;