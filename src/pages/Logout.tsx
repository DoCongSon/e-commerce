import { useEffect } from "react";
import { logOut } from "../services/user.ts";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            await logOut();
            navigate("/login");
        })()
    }, []);
    return null
};

export default Logout;