import { Link, Outlet } from "react-router-dom";
import './index.scss';

export const Layout=()=>{
    return <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                
            </li>
            <li>
                <Link to="/Form">Form</Link>
            </li>
            <li>
                <Link to="/Todos">Todos</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
};