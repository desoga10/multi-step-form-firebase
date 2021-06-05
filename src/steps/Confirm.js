import React,{useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import firebase from '../config/firebase'



const Confirm = ({values}) => {

  const {firstName, lastName, email, job, city, country} = values

  useEffect( () => {
    firebase.firestore().collection("multiFormData").doc().set({
      fname:firstName,
      lname:lastName,
      email:email,
      job:job,
      city: city,
      location:country
    }).then( (data) =>
      console.log(data)
    ).catch( (err) =>
      console.log(err)
    )
  },[])

  return (
    <div>
      <h4>Your data has been submitted successfully 😇 </h4>
      <ListGroup style={{maxWidth:'600px', margin:'auto'}}>
        <ListGroup.Item variant="secondary">FIRST NAME: {firstName} </ListGroup.Item>
        <ListGroup.Item variant="success">LAST NAME: {lastName}</ListGroup.Item>
        <ListGroup.Item variant="danger">EMAIL: {email}</ListGroup.Item>
        <ListGroup.Item variant="info">JOB: {job} </ListGroup.Item>
        <ListGroup.Item variant="light">CITY: {city}</ListGroup.Item>
        <ListGroup.Item variant="dark">COUNTRY: {country} </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Confirm
