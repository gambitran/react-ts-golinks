import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home';
import { Edit } from '../pages/Edit';
import { About } from '../pages/About';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Home/>},
            {path: '/edit', element: <Edit/>},
            {path: '/about', element: <About/>}
        ]
    }
])