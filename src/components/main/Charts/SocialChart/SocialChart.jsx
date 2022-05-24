import React from 'react'
import { Box, Grid, Typography, Card, CardContent,IconButton } from '@mui/material';
import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';
import { SocialData } from '../Data';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import logo1 from './logo1.png';


const SocialChart = () => {
  
  return (
    <Box
      sx={{border: "2px solid #e4e4e4",borderRadius: "5px",padding: "5px 10px",position: "relative",}}
    >
      <Box
        sx={{display: "flex",justifyContent: "space-between",alignItems: "center"}}
      >
        <Typography variant="h5" component="h4"
          sx={{fontSize: "14px",fontWeight: "bold",color: '#4e4e84'}}
        >
          Social Source
        </Typography>
        <IconButton sx={{color:'#bdbdbd'}} >
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <ResponsiveContainer width="100%" height={123}>
        <PieChart>
          {SocialData.map((entry, index) => (
            <Pie data={[entry]}
              cx="50%"
              cy={100}
              startAngle={entry.st}
              endAngle={entry.ed}
              innerRadius={entry.inr}
              outerRadius={entry.otr}
              paddingAngle={0}
              dataKey="value"
            >
              <Cell key={`cell-${index}`} fill={entry.color} />
            </Pie>
          ))}
        </PieChart>
      </ResponsiveContainer>

      <Box
        sx={{position: "absolute",left: "50%",top: "105px",transform: "translateX(-50%)",display: "flex",flexDirection: "column",alignItems: "center",
        }}
      >
        <Typography variant="h6" component="h6"
          sx={{ fontSize: "10px",color: '#bdbdbd'}}
        >
          TOTAL SALES
        </Typography>
        <Typography variant="h5" component="h4"
          sx={{fontSize: "16px",fontWeight: "bold",color:'#4e4e84'}}
        >
          3,234
        </Typography>
        <Typography variant="h5" component="h4"
          sx={{ fontSize: "10px",fontWeight: "bold",color:'#4e4e84'}}
        >
          <img
            src={logo1}
            alt="logo"
            style={{ height: "10px", width: "10px" }}
          />
          Products
        </Typography>
      </Box>
      <Box
        sx={{display: "flex",justifyContent: "space-between",alignItems: "center",marginBottom: "0px",marginTop: "10px"}}
      >
        <Box sx={{ borderTop: "4px solid #21cc9e", padding: "5px 0px" }}>
          <Typography variant="h6" component="h5"
            sx={{fontSize: "11px",color: '#bdbdbd'}}
          >
            E-Commerce
          </Typography>
          <Typography variant="h6" component="h5"
            sx={{fontSize: "14px",fontWeight: "bold",color: '#4e4e84'}}
          >
            1,618
          </Typography>
        </Box>
        <Box sx={{ borderTop: "4px solid #8676ff", padding: "5px 0px" }}>
          <Typography variant="h6" component="h6"
            sx={{ fontSize: "11px",color:'#bdbdbd' }}
          >
            Facebook
          </Typography>
          <Typography variant="h6" component="h5"
            sx={{fontSize: "14px",fontWeight: "bold", color: '#4e4e84'}}
          >
            808
          </Typography>
        </Box>
        <Box sx={{ borderTop: "4px solid #eff4f8", padding: "5px 0" }}>
          <Typography variant="h6" component="h6"
            sx={{  fontSize: "11px",color:'#bdbdbd' }}
          >
            Instagram
          </Typography>
          <Typography variant="h6" component="h5"
            sx={{ fontSize: "14px", fontWeight: "bold", color:'#4e4e84'}}
          >
            808
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default SocialChart