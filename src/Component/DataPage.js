import { Grid, Paper, TableContainer,Stack, Table, TableHead, Button, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import { TableData } from "./TableData"
import { ChartData } from "./ChartData"
import { Tooltip, ArcElement, Chart as ChartJs, Title, Legend } from "chart.js";


ChartJs.register(Tooltip, ArcElement, Title, Legend);


export function DataPage() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);



    useEffect(() => {
        axios.get(`http://localhost:3004/users`).then((val) => setData(val.data))
    }, [])

    const TotalData = useMemo(() => {
        const initialValue = {
            totalClicks: 0,
            totalCosts: 0,
            totalConversion: 0,
            totalRevenue: 0
        };
        const totals = data.reduce((accumulator, current) => {
            const clicks = parseInt(current.Clicks, 10) || 0;
            const costs = parseInt(current.costs, 10) || 0;
            const conversion = parseInt(current.Conversion, 10) || 0;
            const revenue = parseInt(current.revenue, 10) || 0;

            return {
                totalClicks: accumulator.totalClicks + clicks,
                totalCosts: accumulator.totalCosts + costs,
                totalConversion: accumulator.totalConversion + conversion,
                totalRevenue: accumulator.totalRevenue + revenue
            };
        }, initialValue);

        return totals;

        // console.log('Total Clicks:', totals.totalClicks);
        // console.log('Total Costs:', totals.totalCosts);
        // console.log('Total Conversion:', totals.totalConversion);
        // console.log('Total Revenue:', totals.totalRevenue);

    }, [data])
    return (
        <div>

            <Paper elevation={0}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={5}>
                      
                            <Typography variant='h4'>
                                Ad Insight
                            </Typography>

                       
                        <TableContainer>
                            <Table>
                                <TableHead>


                                    <TableRow>
                                        <TableCell>Campigns</TableCell>
                                        <TableCell>Clicks</TableCell>
                                        <TableCell>Costs</TableCell>
                                        <TableCell>Conversion</TableCell>
                                        <TableCell>Revenue</TableCell>

                                    </TableRow>

                                </TableHead>

                                <TableBody>

                                    {data?.map((x) => (

                                        <TableRow>

                                            <TableCell>{x.Campaigns}</TableCell>
                                            <TableCell>{x.Clicks}</TableCell>
                                            <TableCell>{x.costs}</TableCell>
                                            <TableCell>{x.Conversion}</TableCell>
                                            <TableCell>{x.revenue}</TableCell>

                                        </TableRow>


                                    ))}


                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell>{TotalData.totalClicks}</TableCell>
                                        <TableCell>USD-{TotalData.totalCosts}</TableCell>
                                        <TableCell>{TotalData.totalConversion}</TableCell>
                                        <TableCell>USD-{TotalData.totalRevenue}</TableCell>

                                    </TableRow>

                                </TableBody>




                            </Table>
                        </TableContainer>
                    </Grid>


                    {/* ---------------------------------- */}



                    <Grid item xs={12} md={6} lg={7} >

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={1}

                        >
                            <Typography variant='h4'>
                                Ad Insight
                            </Typography>




                            <Button variant='contained' color='inherited' onClick={() => setShow(!show)}>
                                {show ? "Chart data" : "table data"}
                            </Button>

                        </Stack>



                        {show ? <ChartData /> : <TableData />}





                    </Grid>


                </Grid>

            </Paper>

        </div>
    )
}


