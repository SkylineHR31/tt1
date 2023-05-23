import { styled } from '@mui/system';

export const Wrapper = styled('div')(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
  gridAutoRows: "500px",
  gridGap: theme.spacing(2),
}));


  // .product-card {
  //   color: rgb(65, 64, 64);
    
  //     &-img {
  //       object-fit: contain;
  //       width: 100%;
  //       height: 70%;
  //       margin-bottom: 20px;
  //     }
  //   }