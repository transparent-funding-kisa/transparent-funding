import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Fade from "@material-ui/core/Fade";
import FormHelperText from "@material-ui/core/FormHelperText";
import Textfield from "@material-ui/core/TextField";
export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState("female");
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState("none");

  const handleChange = (event) => {
    setValue(event.target.value);
    setOpen(event.target.value === "no" ? true : false);
    setDisplay(event.target.value === "no" ? "block" : "none");
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <br></br>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label={props.label[0]}
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label={props.label[1]}
          />
        </RadioGroup>
      </FormControl>
      <Fade in={open} style={{ display: display }}>
        <div>
          <FormHelperText>
            리워드가 다른 판매처에서 유통된 적이 있다면 리워드로 제공할 수
            없습니다.<br></br>
            기존에 유통하던 제품/서비스에 비해 개선된 점이 있다면 아래에
            상세하게 작성해주세요.
          </FormHelperText>
          <Textfield
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="ex) 리워드의 개선점을 보완하여 세부기능 OO이 추가되었고, 이전에 판매된 적이 없는 새로운 브라운 컬러로 리워드 프로젝트를 진행하려 합니다."
            helperText="500자 남음"
            size="medium"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
      </Fade>
    </>
  );
}
