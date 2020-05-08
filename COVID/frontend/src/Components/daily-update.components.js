import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Form,Button,Card} from 'react-bootstrap'



export default class TodosList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            covid:[],
            country_covid:[],
            isLoaded:false,
            isLoaded1:false,
            search_country: '',
            country_name: '',
            city_name: '',
            city_weather:'',
            form_submitted: false,
            country_deaths:'',
            country_active_cases:'',
            country_confirmed_cases:'',
            country_deaths:'',
            country_recovered:''
        }

        this.onChangeSearchCountry = this.onChangeSearchCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    
    onChangeSearchCountry(e) {
        this.setState({
            search_country: e.target.value,
        });
    }

    componentDidMount(){
        var city= "chennai"
        fetch('https://api.covid19api.com/summary')
        .then(res =>res.json())
        .then(json =>{
            this.setState({
                error:null,
                isLoaded:true,
                covid:json,
            })
        })
    }


    fetchWeather(){
        var city = 'chennai'
        fetch('http://api.weatherapi.com/v1/current.json?key=80a38f9e491f4a8ca18162345200705&q='+city)
        .then(res =>res.json())
        .then(json =>{
            this.setState({
                error:null,
                isLoaded:true,
                items:json,
            })
        })
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     var city = this.state.search_city
    //     fetch('http://api.weatherapi.com/v1/current.json?key=80a38f9e491f4a8ca18162345200705&q='+city)
    //     .then(res =>res.json())
    //     .then(json =>{
    //         this.setState({
    //             error:null,
    //             isLoaded:true,
    //             items:json,

    //         })
    //     })
    //     console.log("inside handle submit")
    //     console.log(this.state.items)
    //     if(this.state.isLoaded){
    //         this.setState({
    //             country_name:this.state.items.location.country,
    //             city_name:this.state.items.location.name,
    //             city_weather:this.state.items.current.temp_c

    //         })
    //     }
    // }


    handleSubmit(event){
        event.preventDefault();
        var country = this.state.search_country
        fetch('https://api.covid19api.com/country/'+country+'?from=2020-05-01T00:00:00Z&to=2020-05-06T00:00:00Z')
        .then(res =>res.json())
        .then(json =>{
            this.setState({
                error:null,
                isLoaded1:true,
                country_covid:json,
            })
        })
        console.log("inside handle submit")
        var last_item = this.state.country_covid.length - 3
        console.log(this.state.country_covid[last_item.Confirmed])
        if(this.state.isLoaded1){
            this.setState({
                country_name:this.state.country_covid[last_item].Country,
                country_confirmed_cases:this.state.country_covid[last_item].Confirmed,
                country_active_cases:this.state.country_covid[last_item].Active,
                country_recovered:this.state.country_covid[last_item].Recovered,
                country_deaths:this.state.country_covid[last_item].Deaths,  
            })
        }
    }



    
    render() {
        var {isLoaded,items,covid,country} = this.state;

        if(!isLoaded){
            return <div>loading</div>
        }
        else{
        
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search by Country</Form.Label><br></br>
                        <Form.Label>use small letters and hyphens for space</Form.Label>
                        <Form.Control type="text" value ={this.state.search_country} onChange = {this.onChangeSearchCountry} placeholder="Enter country name" />
                    </Form.Group>
                    <Form.Label>Click twice</Form.Label><br></br>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
                <br></br>
                <br></br>
                <br></br>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Total Confirmed  {covid.Global.TotalConfirmed}</Card.Title>
                        <Card.Text>Total Deaths  {covid.Global.TotalDeaths}</Card.Text> 
                        <Card.Text>Total Recovered  {covid.Global.TotalRecovered}</Card.Text>
                    </Card.Body>
                </Card>
                <br></br><br></br><br></br>
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{items.location.country}</Card.Title>
                        <Card.Text>{items.location.name}</Card.Text> 
                        <Card.Text>{items.current.temp_c}</Card.Text>
                    </Card.Body>
                </Card> */}

                
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.country_name}</Card.Title>
                        <Card.Text> Confirmed {this.state.country_confirmed_cases}</Card.Text> 
                        <Card.Text> Deaths {this.state.country_deaths}</Card.Text> 
                        <Card.Text> Recovered {this.state.country_recovered}</Card.Text> 
                        <Card.Text> Active {this.state.country_active_cases}</Card.Text>
                    </Card.Body>
                </Card>

            </div>
          );
    }   }
}