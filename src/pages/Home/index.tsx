import { useState } from 'react';
import Link from '../../components/Link'

const Home = () => {
    const [data, _] = useState([
        {name: 'fb', description: 'Facebook', url: 'https://facebook.com'},
        {name: 'yt', description: 'Youtube', url: 'https://youtube.com'},
        {name: 'argocd', description: 'ArgoCD', url: 'https://argoproj.github.io/cd/'}
    ])

    return (
        <div>
            {data.map((link) => 
                <Link name={link.name} description={link.description} url={link.url}/>
            )}
        </div>
       
    )
}

export default Home;