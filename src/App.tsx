import './App.css'
import { Outlet } from 'react-router';
import { Layout } from './components/Layout'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <>
        <Layout>
            <Outlet/>
        </Layout>
    </>
  )
}
