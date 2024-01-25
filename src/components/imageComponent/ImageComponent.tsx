import { Box } from "@mui/material";

type Props = {
  imageURL: string;
  position?: string;
  width?: number | string;
  height?: number | string;
};

export const ImageComponent = ({
  imageURL,
  position = "center",
  width = "auto",
  height = "auto",
}: Props) => {
  return (
    <Box
      src={imageURL}
      component="img"
      height={height}
      width={width}
      sx={{
        objectFit: "contain",
        objectPosition: position,
      }}
    />
  );
};
