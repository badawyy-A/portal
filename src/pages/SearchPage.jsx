import SideBar from "../components/SideBar";
import Table from "../components/Table";

function SearchPage() {
    return ( 
    <div className="search-page">
        <SideBar search={"active-link"}/>


        <div className="container">
            <div className="head headd">
                <div className="search">
                    <input type="text" placeholder="search..." />
                    <button type="sumit">Search</button>
                </div>
            </div>
            <div className="table">
                <Table/>
            </div>   
            <ul>
                <li className="prev">Previos</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li className="next">Next</li>
            </ul>
        </div>

    </div> 
    );
}

export default SearchPage;