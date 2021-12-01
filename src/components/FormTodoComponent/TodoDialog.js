import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { FormControl, FormHelperText, Input, InputLabel, SpeedDial,SpeedDialAction, SpeedDialIcon, styled } from '@mui/material';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

export default function TodoDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [input, setInput] = React.useState('')

  const onInputchange = (e) => {
      setInput(e.target.value);
  }
  const onAddHandler = (e) =>{
      e.preventDefault()
      props.onAdd(input)
      setInput('')
      setOpen(false);
  }

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', do: handleClickOpen},
    { icon: <SaveIcon />, name: 'Save', do:''},
    { icon: <PrintIcon />, name: 'Print', do:'' },
    { icon: <ShareIcon />, name: 'Share', do:'' },
  ];
  

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', top: 5, left: 16 }}
        icon={<SpeedDialIcon />}
        direction='right'
        >
        {actions.map((action) => (
          <SpeedDialAction
          key={action.name}
          onClick={action.do}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
      </SpeedDial>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
          <form onSubmit={onAddHandler}>
            <FormControl>
                <InputLabel htmlFor="new-todo">To do:</InputLabel>
                <Input id="new-todo" type="text" className="" name="" value={input} onChange={onInputchange} aria-describedby="todo input" />
                <FormHelperText id="todo-helper-text">What plans do you have?</FormHelperText>

            </FormControl>
            <Button disabled={!input} variant="contained" type="submit">Add</Button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}