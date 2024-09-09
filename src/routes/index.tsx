import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/Home';
import About from '../pages/About';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Homepage/>},
            {path: '/about', element: <About/>}
        ]
    }
])