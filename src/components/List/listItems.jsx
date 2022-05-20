import React from 'react'
import { ListItemButton , ListItemIcon , ListItemText,ListSubheader,Typography} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import { BiCube, BiBox } from 'react-icons/bi';
import { FiPackage,FiMessageCircle,FiPenTool } from 'react-icons/fi'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';



export const mainListItems = (
    <>
    <ListItemButton style={{maxWidth: '25px', maxHeight: '30px', minWidth: '35px', minHeight: '25px'}}>
      <ListItemIcon style={{color: '#7e57c2'}}>
        <GridViewIcon />
      </ListItemIcon>
      <ListItemText style={{color: '#7e57c2',fontWeight: 'bold'}} primary="Dashboard" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <BiCube size={23}/>
      </ListItemIcon>
      <ListItemText style={{color: '#9e9e9e'}} primary="Product" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText style={{color: '#9e9e9e'}} primary="Favourites" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <FiMessageCircle size={23} />
      </ListItemIcon>
      <ListItemText style={{color: '#9e9e9e'}} primary="Messages" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '200px', maxHeight: '35px'}}>
      <ListItemIcon>
        <FiPackage size={23} />
      </ListItemIcon >
      <ListItemText style={{color: '#9e9e9e'}} primary="Orders Lists" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '300px', maxHeight: '35px',marginBottom: '5px'}}>
      <ListItemIcon>
        <BiBox size={23} />
      </ListItemIcon>
      <Typography style={{color: '#9e9e9e'}} >
        Product Stock
      </Typography>
    </ListItemButton>
    </>
  
);

export const secondaryListItems = (
    <>
    <ListSubheader component="div"  style={{color: '#9e9e9e',marginTop: '0px'}}>
      ACCOUNT
    </ListSubheader>
    <ListItemButton style={{maxWidth: '30px',maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText style={{color: '#9e9e9e'}} primary="Setting" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <FiPenTool size={23} />
      </ListItemIcon>
      <ListItemText style={{color: '#9e9e9e'}} primary="Themes" />
    </ListItemButton>
    <ListItemButton style={{maxWidth: '30px', maxHeight: '35px', minWidth: '30px', minHeight: '30px'}}>
      <ListItemIcon>
        <HelpOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText style={{color: '#9e9e9e'}} primary="Helps" />
    </ListItemButton>
    </>
);

// export  {mainListItems,secondaryListItems};
