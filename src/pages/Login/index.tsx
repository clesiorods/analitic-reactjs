import { Link } from "react-router-dom";

export function Login() {
    return(
        <div>
            <Link to={`/dashboard`} >
                <button className="btn btn-primary" >Login</button>
            </Link>
        </div>
    )
}