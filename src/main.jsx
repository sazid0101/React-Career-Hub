import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Jobs from './Components/Jobs/Jobs';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },{
        path:'/jobs',
        element: <Jobs></Jobs>
      },{
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },{
        path: '/blogs',
        element: <Blogs></Blogs>
      },{
        path: '/job/:id',
        element: <JobDetails></JobDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
