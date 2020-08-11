import React from "react";
import Card from "@material-ui/core/Card";
import CardIcon from "../components/commons/card";
import Accordion from "../components/commons/accordion";
import Drawer from "../components/commons/drawer";

const FundingApply = (props) => {
  return (
    <>
      <Drawer value={props.match.params.Id}></Drawer>
    </>
  );
};

export default FundingApply;
