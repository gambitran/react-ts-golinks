import React, { useState, Fragment } from 'react'
import { useCreateLinkMutation, useGetLinksQuery, LinkItem } from '../../api/Backend'
import { Link } from '../../components/Link'
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
} from '@mui/material'
import { Add } from '@mui/icons-material'


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
                                <Link key={link.id} {...link}/>
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
                                    const { newName, newUrl, newDescription } = formJson
                                    await createLink({
                                        name: newName,
                                        url: newUrl,
                                        description: newDescription
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
                                    multiline
                                    rows={4}
                                    slotProps={ { htmlInput: { maxLength: 255}}}
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
