import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CardProps {
  personName: string;
  avatar: string;
  imageUrl: string;
}

export const CardDiscovery = ({ personName, avatar, imageUrl }: CardProps) => {
  return (
    <MuiCard
      sx={{
        mb: 4,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 290,
          width: 389,
        }}
        image={imageUrl}
        alt={personName}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          pl: 0,
        }}
      >
        <img
          src={avatar}
          alt={`Avatar for ${personName}`}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        />
        <Typography variant="subtitle2">{personName}</Typography>
      </CardContent>
    </MuiCard>
  );
};
