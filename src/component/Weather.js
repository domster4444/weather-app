import React, { Component } from 'react'
import './Weather.css'
class Weather extends Component {

    constructor(props){
    super(props)
    this.inputRef=React.createRef()
    this.state={
         hellocountry:'nepal',
         inputcountry:null,
         testvalue:null,
         country_name:null,
         coordinate_longitude:null,
         coordinate_latitude:null,
         temperature:null,
         Pressure:null,
         Humidity:null,
         Sea_level:null,
         Wind_speed:null,
         linkformap:null
        }
}
componentDidMount(){
    var A='https://api.openweathermap.org/data/2.5/weather?appid=0c42f7f6b53b244c78a418f4f181282a&q='+this.state.hellocountry

    fetch(A).then((resp)=> {
        resp.json().then((result) => {
            // console.warn(result)
        
        // this.setState({testvalue:result.base})
        this.setState({country_name:result.name})
        this.setState({coordinate_longitude:result.coord.lon})
        this.setState({coordinate_latitude:result.coord.lat})
        this.setState({temperature:result.main.temp})
        this.setState({Pressure:result.main.pressure})
        this.setState({Humidity:result.main.humidity})
        this.setState({Sea_level:result.main.sea_level})
        this.setState({Wind_speed:result.wind.speed})
         var mapapi="https://api.maptiler.com/maps/hybrid/?key=8zhajsmWFwpr4bLHth7b#7".concat("/").concat(result.coord.lat).concat("/").concat(result.coord.lon)
        this.setState({linkformap:mapapi})
     
    })
    })
}










 

clickHandler(){
    this.setState({
        hellocountry:this.inputRef.current.value})
console.log(this.inputRef.current.value)


var A='https://api.openweathermap.org/data/2.5/weather?appid=0c42f7f6b53b244c78a418f4f181282a&q='+this.state.hellocountry

fetch(A).then((resp)=> {
    resp.json().then((result) => {

this.setState({country_name:result.name})
this.setState({coordinate_longitude:result.coord.lon})
this.setState({coordinate_latitude:result.coord.lat})
this.setState({temperature:result.main.temp})
this.setState({Pressure:result.main.pressure})
this.setState({Humidity:result.main.humidity})
this.setState({Sea_level:result.main.sea_level})
this.setState({Wind_speed:result.wind.speed})
 var mapapi="https://api.maptiler.com/maps/hybrid/?key=8zhajsmWFwpr4bLHth7b#7".concat("/").concat(result.coord.lat).concat("/").concat(result.coord.lon)
this.setState({linkformap:mapapi})






})
})

}
















    render() {
        return (
            <div className='maindiv'>




<div>
    <input className='inputbox' type='textbox' placeholder='Country Name' ref={this.inputRef} />
<button onMouseDown={()=>this.clickHandler()} onMouseUp={()=>this.clickHandler()} onClick={()=>this.clickHandler()} >FIND WEATHER</button>

</div>



<div className='weatherinfo'>
<br/>
<h3>
{/* {this.state.testvalue} */}
Country Name : {this.state.country_name}<br/>
Longitude : {this.state.coordinate_longitude}<br/>
Latitude : {this.state.coordinate_latitude}<br/>
Temperature : {this.state.temperature}<br/>
Pressure : {this.state.Pressure}<br/>
Humidity : {this.state.Humidity}<br/>
Sea Level : {this.state.Sea_level}<br/>
Wind Speed : {this.state.Wind_speed}<br/>
</h3>  
</div>


    <iframe className='map' title='map' width="500" height="300" src={this.state.linkformap}></iframe>


<div>
</div>




</div>
        )
    }
}

export default Weather
