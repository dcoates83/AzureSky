import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material'
import parse from 'html-react-parser'

interface Props {
  id: string
  question: string
  answer: string
}

const FaqQuestion = (props: Props) => {
  const { answer, id, question } = props
  return (
    <Box sx={{ width: '100%' }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>{parse(answer)}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FaqQuestion
