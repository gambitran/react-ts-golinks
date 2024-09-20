import { Fragment, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import { Edit, Visibility } from '@mui/icons-material';
import { useUpdateLinkMutation, useDeleteLinkMutation, LinkItem } from '../../api/Backend';
import { Link } from 'react-router-dom'

export const LinkCard = ({id, name, description, url, views}: LinkItem) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [ updateLink ] = useUpdateLinkMutation();
    const [ deleteLink ] = useDeleteLinkMutation();

    const editFormOpenHandler = () => {
        setOpenEdit(true);
    }

    const editFormCloseHandler = () => {
        setOpenEdit(false);
    };

    return (
    <> 
        {(
            <Card elevation={5} sx={{ minWidth: 350, marginTop: 2, marginBottom: 2}}>
                <CardHeader
                    title={<Link to={`/${name}`} style={{ textDecoration: 'none', color: 'inherit'}}>go/{name}</Link>}
                    titleTypographyProps={{ fontSize: 34 }}
                    subheader={url}
                    subheaderTypographyProps={{ fontSize: 14, fontStyle: 'italic' }}
                    action={
                        <>
                            <Tooltip title={`${views} views`} placement='left'>
                                <IconButton disableRipple>
                                    <Visibility/>
                                </IconButton>
                            </Tooltip>
                            <Fragment>
                                <IconButton onClick={editFormOpenHandler}>
                                    <Edit />
                                </IconButton>
                                <Dialog
                                    open={openEdit}
                                    onClose={editFormCloseHandler}
                                    disableRestoreFocus
                                    PaperProps={{
                                        component: 'form',
                                        onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                                            event.preventDefault();
                                            const formData = new FormData(event.currentTarget);
                                            const formJson = Object.fromEntries((formData as any).entries());
                                            const { newName, newUrl, newDescription } = formJson
                                            
                                            await updateLink({
                                                id: id,
                                                name: newName,
                                                url: newUrl,
                                                description: newDescription,
                                                views: views
                                            }).unwrap()
                                            .catch((e) => console.log(e))

                                            editFormCloseHandler();
                                        }
                                    }}
                                >
                                    <DialogTitle>Edit Golink</DialogTitle>
                                    <DialogContent>
                                        <TextField
                                            autoFocus
                                            required
                                            fullWidth
                                            slotProps={ { htmlInput: { maxLength: 100}}}
                                            margin='dense'
                                            id='newName'
                                            name='newName'
                                            label='Name'
                                            type='text'
                                            variant='standard'
                                            defaultValue={name}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            slotProps={ { htmlInput: { maxLength: 250}}}
                                            margin='dense'
                                            id='newUrl'
                                            name='newUrl'
                                            label='URL'
                                            type='url'
                                            variant='standard'
                                            defaultValue={url}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            multiline
                                            rows={3}
                                            margin='dense'
                                            id='newDescription'
                                            name='newDescription'
                                            label='Description'
                                            type='text'
                                            variant='standard'
                                            slotProps={ { htmlInput: { maxLength: 200}}}
                                            defaultValue={description}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={async () => {

                                            await deleteLink({
                                                id: id
                                            }).unwrap()
                                            .catch((e) => console.log(e))

                                            editFormCloseHandler();
                                        }} color='error'>Delete</Button>
                                        <Box sx={{ flexGrow: 1 }}/>
                                        <Button onClick={editFormCloseHandler}>Cancel</Button>
                                        <Button type='submit'>Save</Button>
                                    </DialogActions>
                                </Dialog>
                            </Fragment>
                        </>
                    }
                />
                <CardContent>
                    <Typography variant={'body2'} color={'textSecondary'}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        )}
    </>
    )
}
