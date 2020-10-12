import React from "react";
import ReactDOM from "react-dom";
import NetSlider from "netslider";
import "netslider/dist/styles.min.css";
import { data } from "./data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="netslider">NetSlider</div>
      <div className="posters_one">
        <NetSlider
          className="netslider_title_card"
          data={data}
          slideTemplate={(props) => <SliderContainer {...props} />}
        />
      </div>
      <div className="posters_two">
        <NetSlider
          className="netslider_title_card"
          data={data}
          slideTemplate={(props) => <SliderContainer {...props} />}
        />
      </div>
      <div className="posters_three">
        <NetSlider
          className="netslider_title_card"
          data={data}
          slideTemplate={(props) => <SliderContainer {...props} />}
        />
      </div>
    </div>
  );
}
function SliderContainer(props) {
  return <div className="slider-container-title">{props.videoModel.title}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
