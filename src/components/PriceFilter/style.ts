import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const InputsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));
