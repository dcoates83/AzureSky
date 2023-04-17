import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from '@mui/material'

interface Props {
  question: string
  answer: string
}

const FaqQuestion = (props: Props) => {
  const { question, answer } = props
  const renderAnswer = require('html-react-parser')
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{question}</Typography>
        </AccordionSummary>
        <Divider></Divider>
        <AccordionDetails>
          <Typography>{renderAnswer(answer)}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FaqQuestion
