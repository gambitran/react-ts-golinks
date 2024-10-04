import { useGetLinkByNameQuery } from '../../api/Backend';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material'
import { useEffect } from 'react'

export const LinkRoute = () => {
    const { name } = useParams();
    const { data, isLoading, isError } = useGetLinkByNameQuery({name: name});

    useEffect(() => {
        if (data && data.url) {
            window.location.assign(data.url)
        }
    }, [data])

    if (isLoading) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
                <CircularProgress/>
            </Box>
        )
    }

    if (isError) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
                Error
            </Box>
        )
    }
}
