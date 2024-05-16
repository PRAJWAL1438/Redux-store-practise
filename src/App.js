import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Componets/Body";
import Header from "./Componets/Header";
import Cart from "./Uttils/Cart"
import Error from "./Componets/Error"


const Jsx = () => {
  return (
    <>
      <Header />
       <Outlet/>
    </>
  );
}

function App() {
  return (
    <div className="App">
       <RouterProvider router={AppRouter}>
          <Jsx />
          </RouterProvider>
    
    </div>
  );
}

const AppRouter = createBrowserRouter([{
   path: "/",
   element : <Jsx/>,
   children :[
    {
    path : "/",
    element : <Body/>
    },{
      path: "/cart",
      element : <Cart/>
    }
   ],
   errorElement : <Error/>
}])







export default App;
