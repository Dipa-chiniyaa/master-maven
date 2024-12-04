import { Outlet } from "react-router-dom";
import Footer from "../parts/footer";
import Nav from "../parts/navbar";
import SideBar from "../parts/sidebar";

const MasterMavenLayout = ()=>{

    return(
        <>
        <div className="Container-fluid">
            <div className="row">
                <div className="col">
                    <Nav />
                </div>
                <div className="row">
                <div className="col-3">
                    <SideBar />
                </div>
                <div className="col">
                    <Outlet />
                </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Footer />
                    </div>
                </div>

            </div>
        </div>
        </>
    );

}

export default MasterMavenLayout;