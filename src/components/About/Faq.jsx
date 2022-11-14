import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import { faq } from './faqdata'
import { ExpandMore } from '@mui/icons-material'

const Faq = () => {
  return (
    <Box>
        {faq.map(q => (
            <Accordion key={q.id} sx={{marginBottom: '10px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography>{q.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {q.answer}
                </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
    </Box>
  )
}

export default Faq