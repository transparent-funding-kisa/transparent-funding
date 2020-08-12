import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color={props.color} href={props.value}>
        {props.value}
      </Button>
    </div>
  );
}

ContainedButtons.defaultProps = { value: "작성하기", color: "primary" };

function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
        <FormHelperText>
          3MB 이하의 JPEG, PNG 파일 사이즈 : 1200X675 픽셀 이상 텍스트 및 로고
          삽입 금지
        </FormHelperText>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>

    // <div className={classes.root}>
    //   <label htmlFor="contained-button-file">
    //     <Button variant="contained" color="primary" component="span">
    //       Upload
    //     </Button>
    // <FormHelperText>
    //   3MB 이하의 JPEG, PNG 파일 사이즈 : 1200X675 픽셀 이상 텍스트 및 로고
    //   삽입 금지
    // </FormHelperText>
    //   </label>
    // </div>
  );
}

export { UploadButtons };
