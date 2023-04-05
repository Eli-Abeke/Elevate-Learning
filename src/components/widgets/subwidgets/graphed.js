import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';





export default function Graph(props){
	const data = props.data
	const width = props.width
	const height = props.height

	const options = {
		scales: {
		  x: {
			grid: {
			  display: false
			}
		  },
		  y: {
			ticks: {
                display: false
            },
			grid: {
			  display: false
			}
		  }
		},
		elements:{
			line:{
				tension:(0.3)
			},
			point:{ pointStyle: false },
			pointHoverRadius:20
		},
		responsive:true,
		maintainAspectRatio:true,
		plugins:{
			legend:{
				display:false
			}
		}
		

	}

	  return (
		<div className=" w-[100%] h-[100%]">
		  <Line
			data={data}
			className={"w-max h-max"}
			width={250}
			options = {options}
		  />
		</div>
	  );
	}

