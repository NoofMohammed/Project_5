import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import "./dashboard.css";
export default function AddPlace() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [availability, setAvailability] = useState("");
  const [capacity, setCapacity] = useState("");
  const history = useHistory();
  const newPlace = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/places", {
        name,
        description,
        img,
        city,
        address,
        availability,
        capacity,
      })
      .then((result) => {
        console.log(name);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const home = () => {
    history.push("/dashboard");
  };
  return (
    <>
      <div className="formAddPlace">
        <Form onSubmit={newPlace}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">Place Name</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="PLace Name here"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="description here"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">img</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="img here"
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">capacity</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="capacity here"
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">city</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="city here"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">address</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="address here"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="name_label">availability</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="availability here"
              onChange={(e) => {
                setAvailability(e.target.value);
              }}
            />
          </Form.Group>
          <div className="click">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" onClick={home}>
            Home
          </Button>
        </div>
        </Form>
      </div>
    </>
  );
}
