import { Box, Chip } from '@mui/material';

interface RenderFormTagsProps {
  tags?: string[];
  [x: string]: unknown;
}

export function RenderFormTags({ tags, ...rest }: RenderFormTagsProps) {
  if (!tags?.length) return;

  return (
    <Box justifyContent="flex-end" ml="auto" gap={1} {...rest}>
      {tags?.map(tag => (
        <Chip key={tag} label={tag} sx={{ color: 'primary' }} />
      ))}
    </Box>
  );
}

interface RenderTagsProps {
  tags?: ITag[];
  [x: string]: unknown;
}

export function RenderTags({ tags, ...rest }: RenderTagsProps) {
  if (!tags?.length) return;

  return (
    <Box justifyContent="flex-end" flex={1} gap={1} {...rest}>
      {tags?.map(({ tag }, key) => (
        <Chip key={key} label={tag.label} sx={{ color: 'primary' }} />
      ))}
    </Box>
  );
}
