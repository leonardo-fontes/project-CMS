import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../components/pages/Login";

export const RequireAuth = ({children} :  {children: JSX.Element}) => {

    const auth = useContext(AuthContext);
    //trocar o retorno pelo navigate
    if(!auth.user) {
        return <Login />;
    }

    return children;
}