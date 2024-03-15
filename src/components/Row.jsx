import { useRef } from "react";

function Row(props) {
    const td1 = useRef()
    const td2 = useRef()
    const td3 = useRef()
    const td4 = useRef()
    const td5 = useRef()
    const td6 = useRef()
    const td7 = useRef()
    const td8 = useRef()
    return ( 

            <tr>
                <td >{props.fristName}</td>
                <td >{props.lastName}</td>
                <td>{props.email}</td>
                <td >{props.adress}</td>
                <td >{props.phone}</td>
                <td >{props.location}</td>
                <td >{props.birthDate}</td>
                <td >{props.currDate}</td>
            </tr>

     );
}

export default Row;