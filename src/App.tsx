import { Container, Grid } from '@mui/material';
import React from 'react';

import SearchField from './components/SearchField/SearchField';
import SortPanel from './components/SortPanel/SortPanel';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import PriceFilter from './components/PriceFilter/PriceFilter';
import ProductsList from './components/ProductsList/ProductsList';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid md={12}>
            <SearchField />
            <SortPanel />
          </Grid>
          <Grid md={3}>
            <CategoryFilter />
            <PriceFilter />
          </Grid>
          <Grid md={9}>
            <ProductsList />
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default App;
