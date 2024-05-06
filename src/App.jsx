import './App.scss';
import Login from './pages/login/Login.jsx';
import Contact from './pages/contact/Contact.jsx';
import Book from './pages/book/Book.jsx';
import Header from './Components/header/Header.jsx';
import Footer from './Components/footer/Footer.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Components/home/Home.jsx';
import Register from './pages/register/Register.jsx';

const Layout = () => {
  return (
    <div className='layout-app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>404 Not Found</div>,

      children: [
        { index: true, element: <Home /> },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'book',
          element: <Book />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
