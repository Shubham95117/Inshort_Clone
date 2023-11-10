import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import categories from '../data/category';
import { styled } from '@mui/system';
const StyledMenuIcon = styled(MenuIcon)({
  transition: 'width 0.3s',
  '&:hover': {
    width: '30px',
    // color:'red'
  },
  boxShadow: 'none', // Remove the box shadow
});

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
export default function SwipeableTemporaryDrawer({setcategory}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 140,paddingLeft:4,paddingRight:2 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem >
             Categories
          </ListItem>
      </List>
      <Divider />
      <List >
        {categories.map((text) => (
          <ListItem style={{height:50,borderRadius:1}} key={text}   disablePadding>
            <ListItemButton onClick={()=>setcategory(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
      <div>
       
        <React.Fragment key={'left'
    }>
          <Button onClick={toggleDrawer('left'
          , true)}> <StyledMenuIcon color='action' fontSize='15px' sx={{ ml: 1,pl:1 }} /></Button>

<ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor
            ={'left'
        }
            open={state['left'
        ]}
            onClose={toggleDrawer('left'
            , false)}
            onOpen={toggleDrawer('left'
            , true)}
          >
            {list('left')}
          </SwipeableDrawer>
    </ThemeProvider>

        </React.Fragment>
    </div>
  );
}