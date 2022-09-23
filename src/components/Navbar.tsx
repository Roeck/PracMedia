import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <div>
                <p> {auth.currentUser?.displayName} </p>
                <img src={auth.currentUser?.photoURL || ""} width="20" height="20" />
            </div>
        </div>
    );
};