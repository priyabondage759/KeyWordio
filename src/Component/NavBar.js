import React from 'react'
import { Box, Typography, Stack } from "@mui/material"
import { Link } from "react-router-dom"

export function NavBar() {
  return (
    <Box padding="16px 14px" display="flex" alignItems="center" justifyContent="space-between" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
      <Link to="/">
        <Typography fontWeight={700} fontSize={20} sx={{ cursor: "pointer", opacity: .8 }}>APP LOGO</Typography></Link>

      <Stack direction="row" alignItems="center" gap="20px">
        <Link to="/">
          <Typography sx={{ fontSize: {md: 18, xs: 16}}}>DASHBOARD</Typography>
        </Link>
        <Link to="/create">
          <Typography sx={{ fontSize: {md: 18, xs: 16}}}>CREATE ADS</Typography>
        </Link>
      </Stack>
    </Box>
  )
}


