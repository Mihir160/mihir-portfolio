import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Components/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1240px] mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />

    </div>
  );
}

export default App;
