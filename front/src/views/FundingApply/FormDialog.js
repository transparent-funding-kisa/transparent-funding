import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Text from '../../components/commons/textField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '../../components/commons/select';

export default function FormDialog() {
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
            />
          </div>
          <div>
            <TextField
              id="Material"
              label="제품 소재"
              variant="outlined"
              placeholder="내용 입력"
            />
          </div>
          <div>
            <TextField
              id="Color"
              label="색상"
              variant="outlined"
              placeholder="내용 입력"
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
