
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));




const Create = () => {


  const titleInput= useRef()
  const priceInput= useRef()
  const navigate = useNavigate()

async function handelSubmit(e){
  e.preventDefault();
const title= titleInput.current.value
const price=  Number(priceInput.current.value) 
if(title =="" || price=='') return
try {
  await axios.post(`http://localhost:9000/transactions`,{title,price})
titleInput.current.value =''
priceInput.current.value=''
navigate('/')
} catch (error) {
  console.log('error',error)
}
}






  return<>
  <Box  sx={{width:"400px",maxWidth:'100%'}} component="form" 
    onSubmit={handelSubmit}
  >
  <TextField autoComplete='off'
  inputRef={titleInput}

          label="With normal TextField"
            fullWidth
          sx={{mt:"25px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">👉</InputAdornment>,
          }}
          variant="filled"
        />

  <TextField
  inputRef={priceInput}
  type='number'

          label="With normal TextField"
            fullWidth
          sx={{mt:"25px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />

<ColorButton type='submit' sx={{mt:'25px'}}  variant="contained">Create
          <ArrowForwardIosIcon />
 </ColorButton>




  </Box>
  
  </>
}

export default Create
