import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Tooltip, ArcElement, Chart as ChartJs, Title, Legend } from "chart.js";


ChartJs.register(Tooltip, ArcElement, Title, Legend);

export function ChartData() {
    // const [data, setData] = useState([]);
    const [chartData, setChartData] = useState({
      datasets: [
        {
          data: [],
          backgroundColor: ["Red", "Yellow", "Blue"]
        }
      ],
      labels: []
    });
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data;
          const labels = users.map((user) => user.name);
          const data = users.map((user) => user.id);
  
          setChartData({
            datasets: [
              {
                data: data,
                backgroundColor: ["Red", "Yellow",'violet', "Blue", "green", "orange",'purple']
              }
            ],
            labels: labels
          });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
      <>
       <div className='chart-container' style={{width:"100vw",height:"50vh"}}>
       <Doughnut data={chartData} />

       </div>
      
      </>
    );
  }
  


