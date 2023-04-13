import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
          <Typography className="faq-q">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{renderAnswer(answer)}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FaqQuestion
