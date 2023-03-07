import CommitIcon from '@mui/icons-material/Commit';
import { Chip, Link, Box, Stepper, Step, StepLabel, Typography, StepContent} from '@mui/material';


export const CommitsList = ({commits, commitsToShow, onChangeCommits}) => {

    if(!commits.length) {
        return(
        <Box marginTop={10} display="flex" justifyContent="center" alignItems="center">
            <Typography variant='h5' color="secondary">No commits to show</Typography>
        </Box>
        )
    }

  return (
    <>
      <Stepper orientation="vertical" >
        {commits.map((commit) => (
          <Step active key={commit.sha}>
            <StepLabel
              icon={<CommitIcon color='secondary' />}
            >
                <Typography color="#FFFFFF">
                    {commit.commit.author.name}
                </Typography>
                <Typography variant='overline'>
                    <Link color="secondary" href={commit.html_url} target="_blank" rel="noreferrer noopener">{commit.sha.substring(0, 9)}</Link>
                </Typography>
            </StepLabel>
            <StepContent>
                    <Box bgcolor={"#9599E2"} padding={2} borderRadius={2}>
                        <Typography color="#FFFFFF">{commit.commit.message}</Typography>
                    </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Box marginTop={10} display="flex" justifyContent="center" alignItems="center">
            {Array.from({length: 5}, ((_, i) => (i + 1) * 5)).map((n) => <Box marginRight={2}><Chip onClick={() => onChangeCommits(n)} clickable label={`${n}`} disabled={commitsToShow === n} color='secondary' /></Box>)}
      </Box>
    </>
  );
}