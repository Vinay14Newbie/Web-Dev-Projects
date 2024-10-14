import { Outlet } from "react-router-dom";
import { Header } from './components';

function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Layout