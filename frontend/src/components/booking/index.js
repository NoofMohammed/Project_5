import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { useHistory, useParams } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { useSelector } from "react-redux";
// import Cleave from 'cleave.js/react';
import "./booking.css";

const Booking = () => {
  const { id } = useParams();
  console.log(id);
  const [place, setPlace] = useState({});
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [done, setDone] = useState(false);

  const history = useHistory();

  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/places/${id}`)
      .then((result) => {
        if (result.status == 200) {
          setPlace(result.data[0]);
          setFirstName(token.user.firstName);
          setCountry(token.user.country);
          setEmail(token.user.email);
          console.log(";llllllllllllllllll", result.data[0]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const booked = () => {
    setDone(true);
  };

  const Back = () => {
    history.push("/");
  };


  return (
    <>
      {!done ? (
        <div className="container text-center p-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="text-center">Place information</h1>
              <ul class="list-group">
                <li class="list-group-item bold-text">{place.name}</li>
                <li class="list-group-item bold-text">{place.city}</li>
                <li class="list-group-item bold-text">{place.address}</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="text-center">User information</h1>
              <ul class="list-group">
                <li class="list-group-item bold-text">{firstName}</li>
                <li class="list-group-item bold-text">{country}</li>
                <li class="list-group-item bold-text">{email}</li>
              </ul>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12 mt-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <form class="form-inline">
                <div class="form-group mb-2">
                  <label for="input-phone" class="sr-only">
                    Please Enter Your Phone Number
                  </label>
                  <input
                    type="text"
                    class="form-control input-phone"
                    id="input-phone"
                    placeholder="Enter Your Phone Number"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mb-2"
                  style={{ margin: "0px 7px" }}
                  onSubmit={booked}
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  class="btn btn-primary mb-2"
                  style={{
                    margin: "0px 0px",
                    backgroundColor: "#fff",
                    color: "#cf6262",
                    fontWeight: "600",
                  }}
                  onClick={Back}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="paragraph">ALL IS GOOD</p>

          <Button variant="primary" onClick={Back}>
            Back to Home Page
          </Button>
        </div>
      )}
    </>
  );
};

export default Booking;
