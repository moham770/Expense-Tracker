
import {AppBar,Toolbar,Avatar,Typography, IconButton} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/WhatsApp Image 2023-10-09 at 03.07.48_b0a049f2.jpg'
import { Menu } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
const Appbar = ({drawerWidth,setShowIcon,setdrawerType}) => {
  return <>
     <AppBar sx={{ml:{xs:`0px`,sm:`${drawerWidth}px`},width:{xs:`100%`,sm:`calc(100% - ${drawerWidth}px)`}}} position='static' >
        <Toolbar>

          <IconButton onClick={()=>{
            setdrawerType('temporary')
            setShowIcon('block')
         
          }} sx={{display:{xs:'block',sm:'none'}}}  >
            <Menu  sx={{color:'#fff'}}/>
          </IconButton>
            <Link  underline="none" to='/'  className='flex-1 hover:text-[18px] transition-all duration-200 '> My expenses</Link>

            <Typography variant="body1"  sx={{ mr: 2 }} color="inherit">Mohamed Ayman</Typography>
            <Avatar alt="Mohamed Ayman" src={Logo}/>
         


        </Toolbar>
      </AppBar>
  
  </>
}

export default Appbar
