import './App.css'
import { Outlet } from 'react-router';
import { Layout } from './components/Layout'

export const App = () => {

  return (
    <>
        <Layout>
            <Outlet/>
        </Layout>
    </>
  )
}
