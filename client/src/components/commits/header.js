import { Button, Box } from "@mui/material"

export const CommitsHeader = ({ handleLoadCommits }) => {
    return (
        <header>
          <Box padding={5} display="flex" justifyContent="center" alignItems="center">
            <Button onClick={handleLoadCommits} color="secondary" variant="contained" size="large">Load Commits of this project</Button>
          </Box>
        </header>
    )
}