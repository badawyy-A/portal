import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function SideBar(props) {
    const [active,setActive] = useState(false)
    const handleSideBar = ()=>{
        setActive(!active)
    }

    return ( 
        <div className={` side-bar ${active === true ? "active-side": ""}`}>
            <div className="head">
                <h1>logo</h1>
                <i onClick={handleSideBar} className={`${active === true ? "fa-solid fa-bars-staggered" : "fa-solid fa-bars"}`}></i>
            </div>
            <ul>
                <div className={`row ${props.home} `}>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/home"}><i className="fa-solid fa-house"></i></Link></li>
                </div>
                <div className="row">
                    <li><Link>Settings</Link></li>
                    <li><i className="fa-solid fa-gear"></i></li>
                </div>
                <div className="row">
                    <li><Link>Uesr</Link></li>
                    <li><i className="fa-solid fa-users"></i></li>
                </div>
                <div className={`row ${props.search}`}>
                    <li><Link to={"/home/search"}>Search</Link></li>
                    <li><Link to={"/home/search"}><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                </div>
            </ul>
        </div>
     );
}

export default SideBar;