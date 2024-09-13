import React, { useState, useEffect, Fragment } from 'react'
import { getLinks, addLink } from '../../api/Backend'
import { Link, LinkData } from '../../components/Link'
import { 
    Fab, 
    Box, 
    Button,
    Container, 
    Dialog,
    DialogActions,
    DialogContent, 
    DialogTitle, 
    TextField 
} from '@mui/material'
import { Add } from '@mui/icons-material'


export const Home = () => {
    const [links, setLinks] = useState<LinkData[]>([])
    const [open, setOpen] = useState(false);

    const formOpenHandler = () => {
        setOpen(true);
    };

    const formCloseHandler = () => {
        setOpen(false);
    };

    useEffect(() => {
        (async () => {
            await getLinks()
            .then(response => response.json())
            .then(res => setLinks(res))
        })();
    },[]);

    return (
        <>
            <Container>
                <Box>
                    {links.map((link) => (
                        <Link key={link.name} {...link}/>
                    ))}
                </Box>
            </Container>
            <Container>
                <Box position='fixed' right='0' bottom='0' marginRight='10px' marginBottom='10px'>
                    <Fragment>
                        <Fab onClick={formOpenHandler} color='default' size='medium'><Add fontSize='large'/></Fab>
                        <Dialog
                            open={open}
                            onClose={formCloseHandler}
                            disableRestoreFocus
                            PaperProps={{
                                component: 'form',
                                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                                    event.preventDefault();
                                    const formData = new FormData(event.currentTarget);
                                    const formJson = Object.fromEntries((formData as any).entries());
                                    const { name, url, description } = formJson
                                    addLink({name, url, description})
                                    setLinks(links => [{'name': name, 'url': url, 'description': description, 'views': 0}, ...links])
                                    window.scrollTo(0, 0)
                                    formCloseHandler();
                                }
                            }}
                        >
                            <DialogTitle>Add Golink</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    required
                                    fullWidth
                                    margin='dense'
                                    id='name'
                                    name='name'
                                    label='Name'
                                    type='text'
                                    variant='standard'
                                />
                                <TextField
                                    required
                                    fullWidth
                                    margin='dense'
                                    id='url'
                                    name='url'
                                    label='URL'
                                    type='url'
                                    variant='standard'
                                />
                                <TextField
                                    required
                                    fullWidth
                                    margin='dense'
                                    id='description'
                                    name='description'
                                    label='Description'
                                    type='text'
                                    variant='standard'
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={formCloseHandler}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </Fragment>
                </Box>
            </Container>
        </>
    )
}
