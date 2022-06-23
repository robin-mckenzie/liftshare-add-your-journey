import React, { ChangeEvent } from 'react'
import { Button, Form } from 'react-bootstrap'
import Geocode from "react-geocode";


const googleMapsApiKey = "AIzaSyB-xg1DsX-xgi4ZmKAef_j93QRb7VJ0Bqw";
Geocode.setApiKey(googleMapsApiKey);
Geocode.setLanguage("en");
Geocode.setRegion("uk");
Geocode.setLocationType("ROOFTOP");

const handleFormSubmit = (e :ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  console.log("handleSubmitButtonClick called.");

  console.log(e);

}

const AddJourneyForm = () => {
  return (
    <div>
      <h2>Add your journey</h2>
      <p>
        Whether you're looking to Liftshare as a driver or a passenger, 
        listing your journey is the best way to find a match.
      </p>
      <Form onSubmit={(e) => handleFormSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Journey start</Form.Label>
          <Form.Control id="originText" type="text" placeholder="e.g. Postcode, Street Name" />
          <Form.Control id="originLat" type="text" placeholder="[HIDDEN] Latitude"  />
          <Form.Control id="originLng" type="text" placeholder="[HIDDEN] Longitude" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Destination</Form.Label>
          <Form.Control id="destinationText" type="text" placeholder="e.g. Postcode, Street Name" />
          <Form.Control id="destinationLat" type="text" placeholder="[HIDDEN] Latitude"  />
          <Form.Control id="destinationLng" type="text" placeholder="[HIDDEN] Longitude" />
        </Form.Group>

        <Button variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddJourneyForm;