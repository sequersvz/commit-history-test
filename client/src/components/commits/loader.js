import { Box, CircularProgress } from "@mui/material"

export const CommitsLoader = () => {
    return <Box marginTop={10} display="flex" justifyContent="center" alignItems="center"><CircularProgress size={60} color="secondary" /></Box>
}