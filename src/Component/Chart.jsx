import { Typography, Box, Stack, IconButton, TableContainer, Table, TableBody, TableRow, TableCell, TableHead} from "@mui/material"
import { Doughnut } from "react-chartjs-2";
import { Tooltip, ArcElement, Chart as ChartJs, Title, Legend } from "chart.js";
import { useEffect, useState, useCallback } from "react";
import TableChartIcon from '@mui/icons-material/TableChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

ChartJs.register(Tooltip, ArcElement, Title, Legend);
const DoughnutChart = ({ ctData, tableData }) => {
    const [chartData, setChartData] = useState({
        datasets: [
          {
            data: [],
            backgroundColor: ["Red", "Yellow", "Blue"]
          }
        ],
        labels: []
      });

      const [toggleView, setToggleView] = useState("Donut")

  useEffect(() => {
    setChartData({
      datasets: [
        {
          data: ctData.map((option ) => option.Clicks),
          backgroundColor: ["Red", "Yellow", 'violet', "Blue", "green"]
        }
      ],
      labels: ctData.map((option ) => option.group)
    });
  }, [ctData]);

  const handleToggleView = useCallback((type) => setToggleView(type))

  return (
    <Box flexDirection="column" height="320px" display="flex"  padding="20px" >
         <Box height="100%">
            {
                toggleView === "Donut" ? <Doughnut data={chartData} /> :<TableContainer>
                <Table>
                    <TableHead>


                        <TableRow>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>
                                <Stack direction="row" alignItems="center" gap="4px" justifyContent="center">
                                <Typography variant='span'>Group</Typography>
                                <ExpandMoreIcon />
                                
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Clicks</TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Costs</TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Conversion</TableCell>
                            <TableCell sx={{ color: "black", fontWeight: 600, textAlign: "center"}}>Revenue</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {tableData?.map((x) => (

                            <TableRow>

                                <TableCell sx={{ textAlign: "center"}}>{x.group}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.Clicks}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.costs}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.Conversion}</TableCell>
                                <TableCell sx={{ textAlign: "center"}}>{x.revenue}</TableCell>

                            </TableRow>


                        ))}


                        {/* <TableRow>
                            <TableCell sx={{ textAlign: "center"}}>Total</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>{TotalData.totalClicks}</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>USD-{TotalData.totalCosts}</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>{TotalData.totalConversion}</TableCell>
                            <TableCell sx={{ textAlign: "center"}}>USD-{TotalData.totalRevenue}</TableCell>

                        </TableRow> */}

                    </TableBody>




                </Table>
            </TableContainer>
            }
         </Box>

         <Stack  direction="row" justifyContent="flex-end" gap="10px" alignItems="center">
            <IconButton sx={{ backgroundColor: toggleView === "Donut" && "blue", color: toggleView === "Donut" && "white"}} onClick={() => handleToggleView("Donut")}>
                <DonutLargeIcon />
            </IconButton>
            <IconButton sx={{ backgroundColor: toggleView === "Table" && "blue", color: toggleView === "Table" && "white"}} onClick={() => handleToggleView("Table")}>
                <TableChartIcon />
            </IconButton>

         </Stack>
    </Box>
  )
}

export default DoughnutChart