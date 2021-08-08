import React , {useState} from "react";
import CurationForm from '../forms/CurationForm';
// import { uuid } from "uuidv4";
// import api from "../api/contacts";

function CurationAdd(){
    const [curation, setCuration]=useState([]);
    const [id, setId]=useState();
    const [title, setTitle]=useState();
    const [image,setImage]=useState();
    const [description, setDescription]=useState();

    //addcuration  (axios post)
    // const addCurationHandler = async(curation)=>{
    //     console.log(curation);
    //     const request= {
    //         id: uuid(),
    //         ... curation,
    //     };
    // }
    // const response = await axois.post("/[이름]", request);
    // console.log(response);
    // setCuration([...curation, response.data]);


    const Add = (e)=>{
        e.preventDefault();
        if(id===""||title===""||image===""||description===""){
            alert("All the fields are mandatory!");
            return;
        }
        // addCurationHandler(curation);
        setId("");
        setTitle("");
        setImage("");
        setDescription("");
    }
    return(
        <>
            <CurationForm/>
        </>
    )
}

export default CurationAdd;