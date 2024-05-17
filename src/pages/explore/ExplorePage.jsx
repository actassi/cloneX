import * as React from "react";
import { useState, useEffect } from "react";
import {
  CssBaseline,
  Box,
  Grid,
  Container,
  TextField,
  InputAdornment,
  Card,
  Button,
} from "@mui/material";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import DrawerLeft from "../../components/drawer/Drawer";
import { Search as SearchIcon } from "@mui/icons-material";
import { Typography } from "@mui/material";

import MandarMensajes from "../../components/cards/CardMandarMensajes"; // Ajusta la ruta según sea necesario
import GiphyViewer from "../../components/apis/giphy/Giphy"; // Importar GiphyViewer
import TraerMensajes from "../../components/cards/CardTraerMensajes";
import UnderlineTabs from "../../components/tabs/Tabs1.jsx";
import { MdOutlineSettings } from "react-icons/md";
import "./explore.css"
const margenSup = "80px";

export default function ExplorePage() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    // Función para obtener los mensajes desde Firebase
    const obtenerMensajes = async () => {
      const mensajesQuery = query(
        collection(db, "mensajes"),
        orderBy("timestamp", "desc")
      );
      const mensajesSnapshot = await getDocs(mensajesQuery);
      const mensajesList = mensajesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMensajes(mensajesList); // Ya están ordenados por timestamp descendente
    };

    // Llamar a la función para obtener los mensajes cuando el componente se monta
    obtenerMensajes();
  }, []);

  const handleNuevoMensaje = (mensaje) => {
    setMensajes((prevMensajes) => [mensaje, ...prevMensajes]);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginLeft: "-10px", marginTop: "-80px" }}>
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              marginTop: margenSup,
              position: "sticky",
              top: "0",
              alignSelf: "flex-start",
            }}
          >
            <DrawerLeft selectedPath={"/home"} />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6} sx={{ marginTop: margenSup }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
             
              }}
            >
              <Box
                display="grid"
                alignItems="center"
                justifyContent="space-between"
                border="0px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
                backgroundColor="transparent"
                borderRadius="1px"
                padding="0.1rem"
            
              >
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
                      width:500,
                      bgcolor: "#F1F1F1", // Fondo gris claro
                      borderRadius: "999px", // Borde redondeado
                      "& input": {
                        borderRadius: "999px", // Borde redondeado
                      },
                    },
                  }}
  sx={{boxShadow:"none"}}               />
              </Box>
              <MdOutlineSettings size={25} color="black"  />
            </Box>
            <UnderlineTabs />
            <Box sx={{ display: "Grid", gap: "4%", textAlign: "left" , marginTop:"3%"}}>
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Card sx={{boxShadow:"none"}}>
                  <p className="tipografiaNormal ">Tendencia</p>
                  <h3 className="tipografiaNegrita">Codo a Codo</h3>
                  <h6 className="tipografiaNormal">99,233mil posts</h6>
                </Card>
                <Button sx={{fontSize:16}}>...</Button>
              </Box>{" "}
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Card sx={{boxShadow:"none"}}>
                  <p className="tipografiaNormal ">Tendencia</p>
                  <h3 className="tipografiaNegrita">React Js</h3>
                  <h6 className="tipografiaNormal">13,233mil posts</h6>
                </Card>
                <Button sx={{fontSize:16}}>...</Button>
              </Box>{" "}
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Card sx={{boxShadow:"none"}}>
                  <p className="tipografiaNormal ">Tendencia</p>
                  <h3 className="tipografiaNegrita">Firebase</h3>
                  <h6 className="tipografiaNormal">1,000mil posts</h6>
                </Card>
                <Button sx={{fontSize:16}}>...</Button>
              </Box>{" "}
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Card sx={{boxShadow:"none"}}>
                  <p className="tipografiaNormal ">Tendencia</p>
                  <h3 className="tipografiaNegrita">Material Ui</h3>
                  <h6 className="tipografiaNormal">35,060mil posts</h6>
                </Card>
                <Button sx={{fontSize:16}}>...</Button>
              </Box>{" "}
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Card sx={{boxShadow:"none"}}>
                  <p className="tipografiaNormal ">Tendencia</p>
                  <h3 className="tipografiaNegrita">Vite</h3>
                  <h6 className="tipografiaNormal">25,700mil posts</h6>
                </Card>
                <Button sx={{fontSize:16}}>...</Button>
              </Box>{" "}
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Card  sx={{boxShadow:"none"}}>
                  <p className="tipografiaNormal ">Tendencia</p>
                  <h3 className="tipografiaNegrita">Axios</h3>
                  <h6 className="tipografiaNormal">3,000mil posts</h6>
                </Card>
                <Button sx={{fontSize:16}}>...</Button>
              </Box>{" "}
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup }}>
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
                  bgcolor: "#ffffff", // Fondo gris claro
                  borderRadius: "999px", // Borde redondeado
                  "& input": {
                    borderRadius: "999px", // Borde redondeado
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
