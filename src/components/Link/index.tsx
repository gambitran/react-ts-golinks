import { Card, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';

export interface LinkItem {
    name: string;
    description: string;
    url: string
}

export const Link = (prop: LinkItem) => {

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
                            <Tooltip title="3,000 total views" placement='left'>
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
