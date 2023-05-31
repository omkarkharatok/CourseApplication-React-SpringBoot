import React, { Fragment,useEffect, useState } from "react";
import { Form,FormGroup,Button,Input,Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse =()=>{

    useEffect(()=>{
        document.title="Add Courses"
     }, []);

     const [course, setCourse] = useState({})

    //  from handler function
    const handelForm = (e) =>{
        console.log(course);

        postDatatoServer(course);
        e.preventDefault();
    }

    // creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added Successfully")
            },
            (error)=>{
                console.log(error);
                console.log(error);
                toast.error("Something went wrong")
            }
        )
    };

         return(
        <Fragment>

            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handelForm}>

                <FormGroup>
                    <label for="userId" >Course Id</label>
                    <Input type="text" name="userId" id="userId"placeholder="Enter Here" 
                        onChange={(e)=>{
                            setCourse({...course,id:e.target.value});
                        }}
                        />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title"
                     onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}
                     />
                </FormGroup>

                <FormGroup>
                    <label for="description"></label>
                <Input type="textarea" name="text" id="description" placeholder="Enter description here" 
                style={{height:150}}
                onChange={(e)=>{
                    setCourse({...course,description:e.target.value});
                }}
                />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button color="warning ms-2" type="reset">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;