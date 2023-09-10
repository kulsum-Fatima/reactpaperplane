import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <div>
      <div className='nav1'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
      <div>
        <div>
             <Button id='id2' variant="text"><HomeIcon/>home</Button>
             <Button id='id2' variant="text"><QueryBuilderRoundedIcon/>shop</Button>
             <Button id='id2' variant="text"><StarRateRoundedIcon/>featured</Button>
             </div>
             </div>
            {/* <MenuIcon /> */}
          {/* <div> */}
          <Typography
            variant="h6"
            Wrap
            component="div"
            sx={{ flexGrow: 1, 
              // display: { xs: 'none', sm: 'block' }
             }}
          >
            {/* MUI */}
          
            <div>
            <img src='https://canopy.co/images/logo/logo192.png' height={'30px'} width={"30px"}/>
            </div>
          
          </Typography>
          {/* </div> */}
          <Search>
            <div>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
          </Search>
      <div> 
          <Button id='id2' variant="text">login</Button>
         
          {/* <Box sx={{ '& button': { m: 1 } }}> */}
            
            <Button id='id1' variant="contained" size="small">
          join
        </Button>
           
            {/* </Box> */}
              </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </div>
  );
}