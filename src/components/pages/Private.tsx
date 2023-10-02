import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function Private() {
    const auth = useContext(AuthContext);

    return(
        <div>
            <h2>
                pagina privada, usuário logado!
            </h2>
        </div>
    )
}

export default Private;