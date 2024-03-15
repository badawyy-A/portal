import SideBar from "../components/SideBar";

function HomePage() {
    return ( 
        <div className="home-page">
            <SideBar home={"active-link"}/>
            <div className="container">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button>search</button>
                </div>
            </div>
        </div>
     );
}

export default HomePage;