import { Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/system';

export const Wrapper = styled('div')(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

export const SortButton = styled(Button)(({ theme }) => ({
  border: "1px solid",
  color: "#000",
  backgroundColor: blueGrey[100],
  borderRadius: "0",
  "&:hover": {
    backgroundColor: blueGrey[100],
    olor: "#000",
    border: "1px solid",
  }
}));