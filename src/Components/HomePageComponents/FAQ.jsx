import "../../css/FAQ.css";

// Accordion Imports
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
    return (
        <div className="faq_wrapper">
            <div className="content">
                <h2>
                    <span className="questionmark_icon">?</span>Frequently Ask
                    Questions
                </h2>
                <div className="questions_div">
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                What should I do with household hazardous waste?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Household hazardous waste, such as batteries,
                                paint, cleaning chemicals, and electronics,
                                should not be thrown in the regular trash.
                                Instead, take them to a designated hazardous
                                waste collection center in your area. Many
                                municipalities organize collection events for
                                proper disposal of these items.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>
                                How can I reduce food waste at home?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                To reduce food waste, plan your meals and create
                                shopping lists to avoid overbuying. Store
                                perishable items properly to prolong their shelf
                                life. Use leftovers creatively to make new
                                meals. Consider composting food scraps to reduce
                                the amount of waste sent to landfills.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>
                                What can I do with old electronics and e-waste?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                E-waste should not be discarded with regular
                                garbage. Look for e-waste recycling centers in
                                your community or contact electronic retailers
                                that offer recycling services. Many
                                organizations and municipalities host e-waste
                                collection events for proper disposal.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>
                                How can I participate in waste reduction efforts
                                in my community?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                There are several ways to get involved in waste
                                reduction efforts. Join local clean-up
                                initiatives or volunteer for community recycling
                                programs. Encourage your community to adopt
                                recycling and composting practices. Advocate for
                                waste reduction policies and support businesses
                                that prioritize sustainability and waste
                                reduction.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
