import { TableContainer, Table, Stack, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material'
import React, { useMemo, useState, useCallback } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const AdTable = ({ data }) => {
    const [isCampagin, setIsCampagin] = useState(false)
    

    const TotalData = useMemo(() => {
        const initialValue = {
            totalClicks: 0,
            totalCosts: 0,
            totalConversion: 0,
            totalRevenue: 0
        };
        const totals = data?.reduce((accumulator, current) => {
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



    }, [data])

    const toogleCampagin = useCallback(() => setIsCampagin(state=> !state), [])
    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>


                        <TableRow>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>
                                <Stack onClick={toogleCampagin} direction="row" alignItems="center" gap="4px" justifyContent="center">
                                <Typography variant='span'>Campaigns</Typography>
                               {isCampagin ? <ExpandLessIcon /> :  <ExpandMoreIcon />}
                                
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Clicks</TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Costs</TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Conversion</TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Revenue</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {data?.map((x) => (

                            <TableRow>

                                <TableCell sx={{ textAlign: "center"}}>{x.Campaigns}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.Clicks}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.costs}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.Conversion}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.revenue}</TableCell>

                            </TableRow>


                        ))}


                        <TableRow>
                            <TableCell sx={{ textAlign: "center"}}>Total</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>{TotalData.totalClicks}</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>USD-{TotalData.totalCosts}</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>{TotalData.totalConversion}</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>USD-{TotalData.totalRevenue}</TableCell>

                        </TableRow>

                    </TableBody>




                </Table>
            </TableContainer>
        </>
    )
}

export default AdTable