import { Card, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';

export interface LinkData {
    name: string;
    description: string;
    url: string;
    views: number
}

export const Link = (prop: LinkData) => {

    const editHandler = () => {
        // Send to edit
    }

    const viewHandler = () => {
        console.log('hello')
    }

    return (
    <> 
        {(
            <Card elevation={5} sx={{ minWidth: 350, marginTop: 2, marginBottom: 2}}>
                <CardHeader
                    title={`go/${prop.name}`}
                    titleTypographyProps={{ fontSize: 34 }}
                    subheader={prop.url}
                    subheaderTypographyProps={{ fontSize: 14, fontStyle: 'italic' }}
                    action={
                        <>
                            <Tooltip title={`${prop.views} views`} placement='left'>
                                <IconButton disableRipple onClick={viewHandler}>
                                    <Visibility/>
                                </IconButton>
                            </Tooltip>
                            <IconButton onClick={editHandler}>
                                <Edit/>
                            </IconButton>
                        </>
                    }
                />
                <CardContent>
                    <Typography variant={'body2'} color={'textSecondary'}>
                        {prop.description}
                    </Typography>
                </CardContent>
            </Card>
        )}
    </>
    )
}
