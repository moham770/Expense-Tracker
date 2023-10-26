
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Create from './components/Create/Create.jsx'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings';
import Logout from './components/Logout/Logout';



const router= createBrowserRouter([
    {path:'',element:<Layout/>, children:[
        {index:true,element:<Home/>},
        {path:'/create',element:<Create/>},
        {path:'/profile',element:<Profile/>},
        {path:'/setting',element:<Settings/>},
        {path:'/logout',element:<Logout/>},

    ]}
])




ReactDOM.createRoot(document.getElementById('root')).render(


        <RouterProvider router={router}/>
   


)
