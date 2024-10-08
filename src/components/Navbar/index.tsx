import {
    alpha,
    AppBar,
    Box,
    IconButton,
    InputBase,
    styled,
    Toolbar,
    Typography,
} from '@mui/material'
import {
    Login,
    Search
} from '@mui/icons-material';

const SearchStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky' color='primary' enableColorOnDark>
                <Toolbar>
                    <Typography sx={{ display: { xs:'none', sm:'flex' } }}>
                            Golinks
                    </Typography>
                    <SearchStyle>
                        <SearchIconWrapper>
                            <Search />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Search…'
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchStyle>
                    <Box sx={{ flexGrow: 1 }}>
                    </Box>
                    <IconButton color='inherit'>
                        <Login/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
