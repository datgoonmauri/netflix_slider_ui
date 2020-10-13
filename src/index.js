import React from "react";
import ReactDOM from "react-dom";
import NetSlider from "netslider";
import "netslider/dist/styles.min.css";
import { data } from "./data";
import "./styles.css";
import SliderContainer from "./SliderContainer";


function App() {
    return (

        <div className="App">
            <div className="poster_one">
            <div className="netslider">N</div>
            <div className='netslider-container' style={{ overflow: 'hidden', height: '150px', background:'linear-gradient(#03045e 0%, #0077b6 32%, #caf0f8 100%)'}}>
                <NetSlider
                    className="netslider_title_card"
                    data={data}
                    style={{height: '150px'}}
                    slideTemplate={(props) => <SliderContainer {...props}  />}
                />
            </div>
            </div>
            <div className="poster_two">
            <div className='netslider-container' style={{ overflow: 'hidden', size:'portrait',height: '200px', background: 'linear-gradient(#9bf6ff 0%, #fdffb6 62%, #bdb2ff 100%)' }}>
                <NetSlider
                    className="netslider_title_card"
                    data={data}
                    slideTemplate={(props) => <SliderContainer {...props} />}
                />
            </div>
            </div>
            <div className="poster_three">
            <div className='netslider-container' style={{ overflow: 'hidden',margin:'20px', height: 'initial', background: 'linear-gradient(#dc2f02 0%, #9d0208 44%, #370617 100%)' }}>
                <NetSlider
                    className="netslider_title_card"
                    data={data}
                    slideTemplate={(props) => <SliderContainer {...props} />}
                />
            </div>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
