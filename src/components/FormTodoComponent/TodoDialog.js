import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { FormControl, FormHelperText, Input, InputLabel, SpeedDial,SpeedDialAction, SpeedDialIcon, TextField } from '@mui/material';
import './TodoDialog.css'

import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


export default function TodoDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [dueDate, setDueDate] = React.useState(Date.now());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInput('');
    setDueDate();
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
    { icon: <NoteAddIcon />, name: 'AddTask', do: handleClickOpen},
    { icon: <MonetizationOnIcon />, name: 'BudgetPlans', do:''},
  ];

  const handleChange = (newValue) => {
    setDueDate(newValue);
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', top: 20, left: 20 }}
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
                <Input id="new-todo" type="text" name="todo" value={input} onChange={onInputchange} aria-describedby="todo input" />
                <FormHelperText className="form-element" id="todo-helper-text">What plans do you have?</FormHelperText>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                   
                    name="dueDate"
                    label="Date&Time picker"
                    value={dueDate}
                    minDate={Date.now()}
                    onChange={handleChange}
                    renderInput={(params) => <TextField className="form-element" {...params} />}
                  />
                </LocalizationProvider>
                <Button disabled={!input} variant="contained" type="submit">Add</Button>
            </FormControl>
           
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