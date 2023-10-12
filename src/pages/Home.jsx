import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material"
import Card from '../Component/Card'
import AdTable from '../Component/AdTable'
import DoughnutChart from '../Component/Chart'
import axios from 'axios'

const Home = () => {
    const [click, setClick] = useState("")
    const [data, setData] = useState([])
    const [chartData, setChartData] = useState([])
    const [filterChartData, setFilterChartData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3004/users`).then((val) => setData(val.data))
    }, [])

    useEffect(() => {
        axios
          .get("http://localhost:3004/users")
          .then((response) => {
            const users = response.data;
            const labels = users.map((user) => user.group);
            const data = users.map((user) => user.id);
    
            setChartData(users);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

      useEffect(() => {
        let filteredData = chartData

        if(click !== "") {
            filteredData = filteredData?.filter(option => option?.group ===  click)
        }

        setFilterChartData(filteredData)
      }, [chartData, click])

    const handleClickChange = (event) => {
        setClick(event.target.value)
    }

    

    const tableBody = <AdTable data={data}  />

    const chartBody = <DoughnutChart ctData={filterChartData} tableData={chartData} />
    return (
        <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
                <Card title="Add Insights" body={tableBody} />
            </Grid>
            <Grid item lg={6} xs={12}>
                <Card title="Add Insights" isSelect selectLabel="Clicks" options={["Male", "Female", "Unknown"]} value={click} onChange={handleClickChange} body={chartBody} />
            </Grid>
        </Grid>
    )
}

export default Home