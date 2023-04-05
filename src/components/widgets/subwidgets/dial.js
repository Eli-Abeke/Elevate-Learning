import {React, useState} from 'react'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


export default function Dial(props) {
  const [Input, setInput] = useState(props.input);
  



  return (
    <div className="h-min rounded-Brand">
      <div className="border-[1px] border-[#01B075] rounded-full">
      <CircularProgressbar 
      value={Input} maxValue={1}
      text={`${Input * 100}%`}
      strokeWidth={4}
      styles={buildStyles({
        textColor: "white",
        pathColor: "#01B075",
        trailColor: "transparent",
        strokeLinecap: "butt",
        
      })}
      />
      </div>
    </div>
  )
}
