import { Outlet } from 'react-router-dom'
import Appbar from '../Appbar/Appbar'
import Drawer from '../Sidebar/Sidebar'
import Box from '@mui/material/Box'
import { ThemeProvider,createTheme ,CssBaseline  } from '@mui/material';
import { useState } from 'react';
import { grey ,indigo} from '@mui/material/colors';

const Layout = () => {

  const [mode,setMood]= useState(localStorage.getItem('theme')||'light')

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
           ayman:{
            main: indigo[500]
           }
          }
        : {
          ayman:{
      
            main: grey[700]
           }
          
          }),
    },
})
const [showIcon,setShowIcon] = useState('none')
const [drawerType,setdrawerType] = useState('permanent')  
 const drawerWidth = 240;
  return <>
      <ThemeProvider theme={darkTheme}>
           <CssBaseline />
  <Appbar setdrawerType={setdrawerType} drawerType={drawerType}   setShowIcon={setShowIcon} drawerWidth={drawerWidth}/>
  <Drawer setdrawerType={setdrawerType} setShowIcon={setShowIcon} drawerType={drawerType}  showIcon={showIcon}  mood='dark' setMood={setMood} drawerWidth={drawerWidth}/>
  <Box sx={{ml:{xs:0,sm:` ${drawerWidth}px`},display:'flex',justifyContent:'center',alignItems:'center',mt:'25px'}} component={`main`}>
      
<Outlet/>
    </Box>
    
    </ThemeProvider>
  </>
}

export default Layout
