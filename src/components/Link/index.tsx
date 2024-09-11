import { useState } from 'react';
import { Card, CardContent, CardHeader, Icon, IconButton, Typography } from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';


export interface LinkItem {
    name: string;
    description: string;
    url: string
}

export const Link = (prop: LinkItem) => {

    const [isVisible, setIsVisible] = useState(true)

    const removeLink = () => {
        setIsVisible(false)
    }

    const editLink = () => {
    }

    return (
    <> 
        {isVisible && (
            <Card elevation={5} sx={{ minWidth: 600, maxHeight: 200}}>
                <CardHeader
                    title={`go/${prop.name}`}
                    titleTypographyProps={{ fontSize: 34}}
                    subheader={prop.url}
                    subheaderTypographyProps={{ fontSize: 14, fontStyle: 'italic'}}
                    action={
                        <>
                            <IconButton>
                                <Visibility />
                            </IconButton>
                            <IconButton>
                                <Edit />
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
