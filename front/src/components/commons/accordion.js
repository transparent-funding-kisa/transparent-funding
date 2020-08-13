import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Btn from "../commons/button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            <b>기본 요건</b>
          </Typography>
          <Typography className={classes.secondaryHeading}>작성 전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            펀딩 진행을 위한 기본 요건을 확인하고자 합니다. 심사 시 확인하는
            중요한 정보이므로 반드시 정확한 정보를 입력하세요. 답변 내용이
            사실과 다른 경우, 약정 위반에 따른 불이익이 발생할 수 있습니다.
            <Btn href={1}></Btn>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <b>기본 정보</b>
          </Typography>
          <Typography className={classes.secondaryHeading}>작성 전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            프로젝트를 대표할 주요 기본 정보를 입력하세요.
            <Btn href={2}></Btn>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            <b>스토리 작성</b>
          </Typography>
          <Typography className={classes.secondaryHeading}>작성 전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            메이커님의 프로젝트를 소개해보세요. 스토리에는 메이커님의 진심과
            목소리가 잘 녹여질 수 있도록 명확하고, 솔직하게, 친근한 어투로
            작성하세요.
            <Btn href={3}></Btn>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            <b>리워드 설계</b>
          </Typography>
          <Typography className={classes.secondaryHeading}>작성 전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            서포터에게 제공할 리워드 내용을 입력하세요. 서포터가 쉽게 펀딩할 수
            있는 저렴한 리워드부터 서포터의 보다 빠른 펀딩을 유도할 수 있는
            얼리버드 리워드까지 다양한 리워드를 구성하세요.
            <Btn href={4}></Btn>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            <b>위험요인 및 정책</b>
          </Typography>
          <Typography className={classes.secondaryHeading}>작성 전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            펀딩 진행을 위한 기본 요건을 확인하고자 합니다. 심사 시 확인하는
            중요한 정보이므로 반드시 정확한 정보를 입력하세요. 답변 내용이
            사실과 다른 경우, 약정 위반에 따른 불이익이 발생할 수 있습니다.
            <Btn href={5}></Btn>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>
            <b>메이커 정보</b>
          </Typography>
          <Typography className={classes.secondaryHeading}>작성 전</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            펀딩 진행을 위한 기본 요건을 확인하고자 합니다. 심사 시 확인하는
            중요한 정보이므로 반드시 정확한 정보를 입력하세요. 답변 내용이
            사실과 다른 경우, 약정 위반에 따른 불이익이 발생할 수 있습니다.
            <Btn href={6}></Btn>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}