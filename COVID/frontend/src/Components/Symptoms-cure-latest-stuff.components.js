import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Form,Button,Card} from 'react-bootstrap'



export default class TodosList extends Component {
    
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search by Country</Form.Label>
                        <Form.Control type="email" placeholder="Enter country name" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Country name</Card.Title>
                        <Card.Text>Total number of cases</Card.Text> 
                        <Card.Text>Total number of deaths</Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}