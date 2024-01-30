import React from "react";
import Grid from "@mui/material/Grid";
import { CardDiscovery } from "./CardDiscovery";
import imgMockExplore from "./mockImg/Explore_the_Possibilities.jpg";

// Mock de dados para os cards
const itemsMock = [
  {
    id: 1,
    personName: "Explore the Possibilities",
    avatar:
      "https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg",
    imageUrl: imgMockExplore,
  },
  {
    id: 2,
    personName: "Expand Your Mind",
    avatar:
      "https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg",
    imageUrl: imgMockExplore,
  },
  {
    id: 3,
    personName: "Geometric Landing Page",
    avatar:
      "https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg",
    imageUrl: imgMockExplore,
  },
];

export const CardGrid: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {itemsMock.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <CardDiscovery
            personName={item.personName}
            avatar={item.avatar}
            imageUrl={item.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};
