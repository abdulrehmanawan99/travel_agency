import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React, {useState} from "react";
import NavHeader from "./NavHeader";
import {useDispatch} from 'react-redux';
import { AddTravel } from "./store";
import { useNavigate } from "react-router-dom";

const AddTravelForm = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const [destinationTitle, setDestinationTitle] = useState("");
const [destinationDescription, setDestinationDescription] = useState("");
const [maxPersons, setMaxPersons] = useState("");
const [status, setStatus] = useState("");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [cost, setCost] = useState("");
const [thumbnail, setThumbnail] = useState("");

const handleSubmit =(e)=>{
    e.preventDefault();

    const formData = {
        id: Math.random(),
        destinationTitle,
        destinationDescription,
        maxPersons,
        status,
        startDate,
        endDate,
        cost,
        thumbnail
      };
  
      // Dispatch an action to send the data to Redux
      dispatch(AddTravel.addTravel(formData));
  
      // Reset the form values
      setDestinationTitle("");
      setDestinationDescription("");
      setMaxPersons("");
      setStatus("");
      setStartDate("");
      setEndDate("");
      setCost("");
      setThumbnail("");

     navigate('/');

    };


  return (
    <>
      <NavHeader />
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Destintion</Form.Label>
                <Form.Control type="text" value={destinationTitle} onChange={(e)=> setDestinationTitle(e.target.value)} placeholder="Destination" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description of Destination</Form.Label>
                <Form.Control as="textarea" rows={3} value={destinationDescription} onChange={(e)=> setDestinationDescription(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Max Persons We carry</Form.Label>
                <Form.Control type="number" value={maxPersons} onChange={(e)=> setMaxPersons(e.target.value)} placeholder="" />
              </Form.Group>
              <Form.Select aria-label="Default select example" value={status} onChange={(e)=> setStatus(e.target.value)}>
                <option>Status</option>
                <option value="Coming">Coming</option>
                <option value="Past">Past</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Start-Date</Form.Label>
                <Form.Control type="date" value={startDate} onChange={(e)=> setStartDate(e.target.value)} placeholder="Start-Date" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>End-Date</Form.Label>
                <Form.Control type="date" value={endDate} onChange={(e)=> setEndDate(e.target.value)} placeholder="Start-Date" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Cost Per Person</Form.Label>
                <Form.Control type="number" value={cost} onChange={(e)=> setCost(e.target.value)} placeholder="" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control type="file" value={thumbnail} onChange={(e)=> setThumbnail(e.target.value)} placeholder="Destination" />
              </Form.Group>
              
              <Button type="submit" variant="dark">Add</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTravelForm;
