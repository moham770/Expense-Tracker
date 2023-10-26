
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Home = () => {

  const {palette:{ayman:{main}}} = useTheme()


  const [data,setData]= useState([])
  let totalPrice = 0
  async function getdata(){
    try {
     const {data}= await axios.get(`http://localhost:9000/transactions`)

      setData(data)

    } catch (error) {
      console.log(error)
    }
  }


  async function deleteData(id){
  try {
    await axios.delete(`http://localhost:9000/transactions/${id}`)
    getdata()
  } catch (error) {
    console.log('err',error)
  }
  }


  useEffect(() => {
    getdata()
  }
  ,[])

if(data.length === 0 ){
  return <Typography  variant='h5' color='error'>No Data Found</Typography>
}
  return <Box sx={{width:"360px",maxWidth:'100%'}} >
{data?.map((item)=>{
  totalPrice +=item.price
   return <Paper
    key={item.id}  variant="elevation" sx={{pl:'20px',display:"flex",justifyContent:'space-between',alignItems:'center',position:'relative',paddingTop:"25px",pb:'5px',mb:'10px'}} >
    
      <Typography variant='h6'>{item.title}</Typography>
      <Typography sx={{mr:'25px',opacity:'0.8'}} variant='h6'>${item.price}</Typography>
        <IconButton onClick={()=>{deleteData(item.id)}} size='small' sx={{position:'absolute',right:'5px',top:'0%'}}>
           <CloseIcon fontSize='medium'/>
        </IconButton>
       
    </Paper>
})}
<Typography  variant="h5" color="main">👉 You spend <Typography component='span' variant='inherit' className='text-[#095]' >${totalPrice}</Typography></Typography>
  </Box>
}

export default Home
