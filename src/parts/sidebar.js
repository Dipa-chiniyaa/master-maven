import { Link } from "react-router-dom";
// import "../styles/style.css";

const SideBar = () => {
  return (
    <>
      <div className="container-fluid text-center m-2">
        <div className="card p-2">
          <div className="card mt-2">
            <div class="card-body">
              <Link className="btn btn-white" to="#">
                Go somewhere
              </Link>
            </div>
          </div>
          <div className="card mt-2">
            <div class="card-body">
              <Link className="btn btn-white" to="#">Go somewhere</Link>
            </div>
          </div>
          <div className="card mt-2">
            <div class="card-body">
              <Link className="btn btn-white" to="#">Go somewhere</Link>
            </div>
          </div>
          <div className="card mt-2">
            <div class="card-body">
              <Link className="btn btn-white" to="#">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
