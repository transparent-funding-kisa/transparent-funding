import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '../../components/commons/select';
import Cookies from 'universal-cookie';

export default function FormDialog() {
  const cookies = new Cookies();
  const [name, setName] = React.useState(() => {
    if (cookies.get('name')) return cookies.get('name');
    return ' ';
  });
  const [material, setMaterial] = React.useState(() => {
    if (cookies.get('material')) return cookies.get('material');
    return ' ';
  });
  const [color, setColor] = React.useState(() => {
    if (cookies.get('color')) return cookies.get('color');
    return ' ';
  });

  const handleName = (e) => {
    cookies.set('name', e.target.value);
    setName(e.target.value);
  };

  const handleMaterial = (e) => {
    cookies.set('material', e.target.value);
    setMaterial(e.target.value);
  };

  const handleColor = (e) => {
    cookies.set('name', e.target.value);
    setColor(e.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        추가하기
      </Button>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">리워드 정보 제공 고시</DialogTitle>
        <DialogContent>
          <DialogContentText>
            서포터에게 제공하는 리워드의 종류를 선택하고 해당하는 리워드 정보
            제공 고시를 입력하세요.
          </DialogContentText>
          <Select />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id="Name"
              label="품명 및 모델명"
              variant="outlined"
              placeholder="내용 입력"
              onChange={handleName}
              value={name}
            />
          </div>
          <div>
            <TextField
              id="Material"
              label="제품 소재"
              variant="outlined"
              placeholder="내용 입력"
              onChange={handleMaterial}
              value={material}
            />
          </div>
          <div>
            <TextField
              id="Color"
              label="색상"
              variant="outlined"
              placeholder="내용 입력"
              onChange={handleColor}
              value={color}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleClose} color="primary">
            등록
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
