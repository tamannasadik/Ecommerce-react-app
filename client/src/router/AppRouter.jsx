import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../pages/Layout";
// import { ProductsPage } from "../pages";
import { AdminLayout, ContactsPage, LoginPage, ProductsPage } from "../pages";
 const adminRoutes= [
        {
          index:true,
          element:<div>Admin Dashboard</div>,
        },
        {
       path:'inventory',
       element:<div>Give product inventory</div>,
    },
    {
       path:'profile',
       element:<div>Admin Profile</div>,
    },
        
       ];

const router = createBrowserRouter([
  {
    path:"/",
    element:  <Layout />, 
    children: [
    {
       path:'',
       element:<ProductsPage />,
    },
    {
       path:'contacts',
       element:<ContactsPage />,
    },
    {
       path:'admin',
       element:<AdminLayout />,
       children: adminRoutes,
    },
  ],
  },
  {
      path:'login',
      element:<LoginPage  />,
    },
]);


export const AppRouter = () => {
  return (
    <RouterProvider  router={router} />
  )
}
