import React, { useState, Fragment } from 'react';
import { useCreateLinkMutation, useGetLinksQuery, LinkItem } from '../../api/Backend';
import { LinkCard } from '../../components/LinkCard';
import { 
    Fab, 
    Box, 
    Button,
    CircularProgress,
    Container, 
    Dialog,
    DialogActions,
    DialogContent, 
    DialogTitle, 
    TextField,
    Typography
} from '@mui/material';
import { Add } from '@mui/icons-material';


export const Home = () => {
    const { data, error, isLoading } = useGetLinksQuery();
    const [ createLink ] = useCreateLinkMutation();
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);

    const openAddFormHandler = () => {
        setIsAddFormOpen(true);
    };

    const closeAddFormHandler = () => {
        setIsAddFormOpen(false);
    };

    return (
        <>
            <Container>
                <Box>
                    {
                        isLoading ? (
                            <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
                                <CircularProgress/>
                            </Box>
                        ) : error ? (
                            <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
                                <Box>Error fetching links...</Box>
                            </Box>
                        ) : ( data && data.length > 0 ? (
                            data.map((link: LinkItem) => (
                                <LinkCard key={link.id} {...link}/>
                            ))
                        ) : (
                            <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
                                <Typography>No links yet. Click + to create one!</Typography>
                            </Box>
                        )
                    )}
                </Box>
            </Container>
            <Container>
                <Box position='fixed' right='0' bottom='0' marginRight='10px' marginBottom='10px'>
                    <Fragment>
                        <Fab onClick={openAddFormHandler} color='default' size='medium'><Add fontSize='large'/></Fab>
                        <Dialog
                            open={isAddFormOpen}
                            onClose={closeAddFormHandler}
                            disableRestoreFocus
                            PaperProps={{
                                component: 'form',
                                onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                                    event.preventDefault();
                                    const formData = new FormData(event.currentTarget);
                                    const formJson = Object.fromEntries((formData as any).entries());
                                    const { name, url, description } = formJson
                                    await createLink({
                                        name: name,
                                        url: url,
                                        description: description
                                    }).unwrap()
                                    .catch((e) => console.log(e))
                                    
                                    window.scrollTo(0, 0)
                                    closeAddFormHandler();
                                }
                            }}
                        >
                            <DialogTitle>Add Golink</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    required
                                    fullWidth
                                    slotProps={ { htmlInput: { maxLength: 100}}}
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
                                    slotProps={ { htmlInput: { maxLength: 250}}}
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
                                    multiline
                                    rows={3}
                                    slotProps={ { htmlInput: { maxLength: 200}}}
                                    margin='dense'
                                    id='description'
                                    name='description'
                                    label='Description'
                                    type='text'
                                    variant='standard'
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={closeAddFormHandler}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </Dialog>
                    </Fragment>
                </Box>
            </Container>
        </>
    )
}
