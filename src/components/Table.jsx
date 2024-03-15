import Row from "./Row";
function Table() {
    return ( 
        <table class="table  ">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Date of Birth</th>
                    <th>Creation Date</th>
                </tr>
            </thead>
            <tbody>
                <Row 
                    fristName={"John"}
                    lastName={"Doe"}
                    email={"john.doe@example.com"}
                    adress={"123 Main St, Anytown USA"}
                    phone={"555-1234"}
                    location={"New York, NY"}
                    birthDate={"1990-05-15"}
                    currDate={"2022-03-21"}
                />
                <Row 
                    fristName={"Jane"}
                    lastName={"Smith"}
                    email={"jane.smith@example.com"}
                    adress={"456 Oak Ave, Someville CA"}
                    phone={"555-5678"}
                    location={"Los Angeles, CA"}
                    birthDate={"1985-09-22"}
                    currDate={"2021-11-03"}
                />
            </tbody>
        </table>
    );
}

export default Table;