import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { blueGrey } from '@mui/material/colors';

export const Wrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  backgroundColor: blueGrey[100]
}));

export const CategoriesHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));