import { Link, LinkItem } from '../../components/Link'
import { Grid2 } from '@mui/material'

export const Home = () => {

    let data: Array<LinkItem> = [
        {name: 'fb', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit varius lacus, ut pulvinar leo vehicula vel. Curabitur iaculis malesuada est, et tempus justo sollicitudin id. Suspendisse dapibus justo ut sem malesuada, et tempus ipsum condimentum. Integer dictum risus arcu, efficitur elementum ipsum posuere ac.', url: 'https://facebook.com'},
        {name: 'yt', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit varius lacus, ut pulvinar leo vehicula vel. Curabitur iaculis malesuada est, et tempus justo sollicitudin id. Suspendisse dapibus justo ut sem malesuada, et tempus ipsum condimentum. Integer dictum risus arcu, efficitur elementum ipsum posuere ac.', url: 'https://youtube.com'},
        {name: 'argocd', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit varius lacus, ut pulvinar leo vehicula vel. Curabitur iaculis malesuada est, et tempus justo sollicitudin id. Suspendisse dapibus justo ut sem malesuada, et tempus ipsum condimentum. Integer dictum risus arcu, efficitur elementum ipsum posuere ac.', url: 'https://argoproj.github.io/cd/'}
    ]

    return (
        <Grid2 container>
            {data.map((link) => (
                <Link {...link}/>
            ))}
        </Grid2>
    )
}
