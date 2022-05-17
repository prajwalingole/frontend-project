import React from 'react'
import { ListItemButton , ListItemIcon , ListItemText,ListSubheader,Typography} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';



export const mainListItems = (
    <>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <GridViewIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <ViewInArIcon />
      </ListItemIcon>
      <ListItemText primary="Product" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Favourites" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <ChatBubbleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '200px', maxHeight: '35px'}}>
      <ListItemIcon>
        <ProductionQuantityLimitsIcon />
      </ListItemIcon>
      <ListItemText primary="Orders Lists" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '300px', maxHeight: '35px',marginBottom: '15px'}}>
      <ListItemIcon>
        <Inventory2OutlinedIcon />
      </ListItemIcon>
      <Typography >
        Product Stock
      </Typography>
    </ListItemButton>
    </>
  
);

export const secondaryListItems = (
    <>
    <ListSubheader component="div"  style={{marginTop: '5px'}}>
      Account
    </ListSubheader>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <DarkModeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Themes" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <HelpOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Helps" />
    </ListItemButton>
    </>
);

// export  {mainListItems,secondaryListItems};
