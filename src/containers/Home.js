import React, {Component} from 'react'
import Slider from "react-slick";

export default class Home extends Component{

  next = () => {
   this.slider.slickNext();
 }
 previous = () => {
   this.slider.slickPrev();
 }

  render(){
    const settings = {
      // dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="home-container">
        <h1>Welcome to Go Stamp!</h1>
        <p>Here is the instruction how to use our app</p>
        <Slider ref={c => (this.slider = c)} {...settings}>
         <div key={1}>
           <img className="home-image" src="./image/store.png" alt="store"/>
         </div>
         <div key={2}>
           <img className="home-image" src="./image/deal.png" alt="deal"/>
         </div>
         <div key={3}>
           <img className="home-image" src="./image/st.png" alt="st"/>
         </div>
       </Slider>
       <div style={{ textAlign: "center" }}>
         <button className="button" onClick={this.previous}>
           Previous
         </button>
         <button className="button" onClick={this.next}>
           Next
         </button>
       </div>
     </div>
   );
  }
}
