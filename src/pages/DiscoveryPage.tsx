import { Stack, Container, Typography, Box } from "@mui/material";
import { SearchBarDiscovery } from "../components/Forms/SearchBarDiscovery";
import { CardGrid } from "../components/Cards/CardGridDiscovery";

export const DiscoveryPage = () => {
  return (
    <Stack alignItems={"center"}>
      <Typography
        variant="h4"
        sx={{
          my: 8,
        }}
      >
        Junte-se à comunidade de inovação, inspiração <br /> e descobertas,
        transformando experiências em <br />
        <Box display={"flex"} justifyContent={"center"}>
          conexões inesquecíveis
        </Box>
      </Typography>
      <Container maxWidth="lg">
        <SearchBarDiscovery />
        <CardGrid />
      </Container>
    </Stack>
  );
};
