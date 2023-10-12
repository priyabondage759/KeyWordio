import React, { useEffect, useState } from 'react'
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography} from '@mui/material'
import axios from "axios"

export function TableData() {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((val)=>{
            console.log(val.data,"valll")
            setData(val.data)
        })
    },[])
  return (
    <div>
       
        <Grid item spacing={1} xs={12} md={6}>
                       
                            <Typography variant='h4'>
                                Ad Insight
                            </Typography>

                        <TableContainer>
                            <Table>
                                <TableHead>


                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>User</TableCell>
                                       

                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    {data?.filter((x)=> x.id<5).map((x) => (
                                        <TableRow>

                                            <TableCell>{x.id}</TableCell>
                                            <TableCell>{x.name}</TableCell>
                                            <TableCell>{x.username}</TableCell>
                                           
                                        </TableRow>


                                    ))}


                                </TableBody>

                            </Table>
                        </TableContainer>
                    </Grid>
      
    </div>
  )
}


