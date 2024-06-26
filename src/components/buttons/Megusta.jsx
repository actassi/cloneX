import React from "react";
import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const iconMegusta = {
  favorite: Favorite,
};

const Megusta = ({ icon, color, onClick }) => {
  const IconComponent = iconMegusta[icon];

  // Verifica si el componente existe
  if (!IconComponent) {
    console.error(`Icono "${icon}" no es válido.`);
    return null;
  }

  return (
    <IconButton onClick={onClick}>
      <IconComponent style={{ color }} />
    </IconButton>
  );
};

export default Megusta;

