import { Box, CardContent, Typography, Stack, IconButton, Select, MenuItem, FormControl } from "@mui/material"
import MuiCard from "@mui/material/Card"
import HelpIcon from '@mui/icons-material/Help';

const Card = ({ title, isSelect, selectLabel, options, value, onChange, body }) => {
    return (
        <MuiCard sx={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", border: "1px solid #99999940"}} >
            <CardContent sx={{ padding: 0}}>
                <Box padding="10px" borderBottom="1px solid #99999970" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography fontSize={18}>{title}</Typography>

                    <Stack direction="row" alignItems="center" gap="10px">
                        {
                            isSelect && <FormControl >
                            <Select
                            size="small"
                              value={value}
                              onChange={onChange}
                              displayEmpty
                              inputProps={{ 'aria-label': 'Without label' }}
                              sx={{
                                boxShadow: "none",
                                ".MuiOutlinedInput-notchedOutline": { border: "1px solid #99999990" },
                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "1px solid #99999990",
                                  },
                                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "1px solid #99999990",
                                  },
                              }}
                            >
                              <MenuItem value="">
                               {selectLabel}
                              </MenuItem>
                              {
                                options?.map((option, index) => (
                                    <MenuItem key={index} value={option}>{option}</MenuItem>
                                ))
                              }
                              
                            </Select>
                            
                          </FormControl>
                        }
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                    </Stack>
                </Box>

                <Box>
                    {body}
                </Box>

            </CardContent>
        </MuiCard>
    )
}

export default Card