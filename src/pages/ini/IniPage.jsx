import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DrawerLeft from '../../components/drawer/Drawer';
import UnderlineTabs from '../../components/tabs/Tabs1';
import { MdOutlineSettings } from 'react-icons/md';
import CardPersonal from '../../components/cards/CardPersonal';
import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const margenSup = '10px';

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ marginLeft: '-10px', marginTo: '-80px' }}>
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup }}>
            <DrawerLeft selectedPath={'/'} />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6} sx={{ marginTop: margenSup} }>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
                backgroundColor="transparent"
                borderRadius="1px"
                padding="0.1rem "
            >
                <UnderlineTabs />
                <MdOutlineSettings size={20} color="black" />
            </Box>
            <p>PAGINA DE INICIO</p>
            
          </Grid>
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup}}>
            {/* Contenido aquí */}
            <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                ),
                sx: {
                bgcolor: '#ffffff', // Fondo gris claro
                borderRadius: '999px', // Borde redondeado
                '& input': {
                    borderRadius: '999px', // Borde redondeado
                },
                },
            }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}


