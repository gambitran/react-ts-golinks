import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home';
import { LinkRoute } from '../components/LinkRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <Home/>},
            {path: '/:name', element: <LinkRoute />}
        ]
    }
])
