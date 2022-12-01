import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';

export const SearchParams = ({ drawerWidth = 240 }) => {
  return (
    <div>

            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Parámetros de búsqueda
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Materiales Utilizados','Dimensiones de las obras','Corriente Artística'].map( text => (
                        <ListItem key={ text } disablePadding>                            
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Exercitation cillum irure elit consectetur.' } />
                                </Grid>                            
                        </ListItem>
                    ))
                }
            </List>
        
    </div>
  )
}
