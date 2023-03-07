import { Container, Box } from "@mui/material"
import { useState } from "react"
import { CommitsList } from "../components/commits/commitsList"
import { CommitsHeader } from "../components/commits/header"
import { CommitsLoader } from "../components/commits/loader"
import { getCommits } from "../services/api"


export const CommitsContainer = () => {
    const [commits, setCommits] = useState([])
    const [commitsLimit, setCommitsLimit] = useState(10)
    const [isLoading, setIsLoading] = useState(false)

    const handleChangeCommits = async (n) => {
        setCommitsLimit(n)
        setIsLoading(true)
        try {
            const getCommitsRes = await getCommits(1, n);
            setCommits(getCommitsRes.data)
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }

    const handleLoadCommits = async () => {
            setIsLoading(true)
            try {
                const getCommitsRes = await getCommits();
                setCommits(getCommitsRes.data)
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false)
    }

    return(
        <Container>
            <CommitsHeader handleLoadCommits={handleLoadCommits} />
        <Box marginTop={10}>
            {isLoading ? <CommitsLoader /> : <CommitsList commits={commits} commitsToShow={commitsLimit} onChangeCommits={handleChangeCommits} />}
        </Box>
        </Container>
    )
}