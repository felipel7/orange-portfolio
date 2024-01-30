import { useForm, Controller } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const tagsMock = ["React", "Material-UI", "TypeScript", "Hook Form"];

interface FormData {
  searchQuery: string;
}

export const SearchBarDiscovery = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="searchQuery"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Autocomplete
            sx={{
              mb: 3,
              width: "60%",
            }}
            {...field}
            freeSolo
            options={tagsMock}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Buscar tags"
                margin="normal"
                variant="outlined"
              />
            )}
            onInputChange={(event, value) => {
              field.onChange(value);
            }}
          />
        )}
      />
    </form>
  );
};
