import React from 'react'
import Todo from '../TodoComponent/Todo'
import './TodoList.css'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

function TodoList(props) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    return (
        <div className='tabs-wrapper'>
             <div className='tab-stripe'>
                <AppBar className='tab-bar' position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{style: {background:'red'}}}
                        textColor='secondary'
                        aria-label="full width tabs example"
                        centered
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                </div>
                <SwipeableViews className='tab-content'
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} 
                    dir={theme.direction}
                    >
                       <Todo todos={props.todos} delete={props.delete} key={props.todos} />
                    </TabPanel>
                    <TabPanel value={value} index={1}
                     dir={theme.direction}
                     >
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} 
                    dir={theme.direction}
                    >
                        Item Three
                    </TabPanel>
                </SwipeableViews>
             
        </div>
    )
}

export default TodoList
