import { useGetLinkByNameQuery } from '../../api/Backend';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material'

export const LinkRoute = () => {
    const {name} = useParams();
    const { data, isLoading } = useGetLinkByNameQuery({name: name});

    return (
        <>
            {
                isLoading ? (
                    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
                        <CircularProgress/>
                    </Box>
                ) : (data && data.url) ? (
                    window.location.assign(data.url)
                ) : (
                    window.location.assign('/')
                )
            }
        </>
    )
}
