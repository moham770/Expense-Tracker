import {Drawer,List,Divider,ListItemButton,ListItemIcon,ListItemText,Button,useTheme} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import {NavLink, useLocation } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
export default function Sidebar({drawerWidth,setMood,showIcon,drawerType,setShowIcon,setdrawerType}) {


  const {palette:{mode}, palette:color} = useTheme()
  const {pathname} = useLocation()

    
  const [allLinks] = useState([
    {  pathname:'/',icon:   <HomeRoundedIcon /> , primary:'Home'},
    {pathname:'/create',icon:  <CreateRoundedIcon/> , primary:'Create'},
    {pathname:'/profile',icon: <Person2RoundedIcon />  , primary:'Profile'},
    { pathname:'/setting',icon:  <SettingsRoundedIcon  /> , primary:'Settings'},
    { pathname:'/logout',icon:  <LoginRoundedIcon  />  , primary:'Logout'},
    ]) 

  



  return (
<>
<Drawer
     sx={{
      display:{xs: showIcon , sm:'block'},
      width: `${drawerWidth}px`,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: `${drawerWidth}px`,
        boxSizing: 'border-box',
      },
    }}

    variant={drawerType}
    anchor="left"
    open={true}
    onClose={() => {
      setShowIcon('none')
      setdrawerType('permanent')
    }
    }
      >
  

    <Button sx={{pb:2 }}   onClick={()=>{
        localStorage.setItem('theme',mode ==='dark' ?'light': 'dark')
      setMood(mode ==='dark'? 'light':'dark')}}>
      {mode ==='dark' ?<DarkModeIcon/>:<LightModeIcon sx={{color:'orange'}}/>}
    
     </Button>

    
    <Divider />

    <List
      sx={{ width: '100%', maxWidth: 360,}}
      component="nav"
    >
      
      {allLinks.map((item,index)=>(
        <ListItemButton    key={index}
      component={NavLink} to={item.pathname} 
        sx={
         pathname === `${item.pathname}`
           ? {
              '&:hover': {
                bgcolor: color.ayman.main,
              },
              bgcolor: color.ayman.main,
              color:'#fff'
            }
          : null
          }>
          <ListItemIcon >
            <span className={pathname === `${item.pathname}` ? 'text-white' : null}>
            {item.icon}
            </span>
        </ListItemIcon>
        <ListItemText primary={item.primary} />
      </ListItemButton>
      
   
      
      )
      )}

      
      </List>
 
  </Drawer>

 
</>
  );
}

