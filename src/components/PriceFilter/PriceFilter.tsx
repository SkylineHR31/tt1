import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Wrapper, CategoriesHeader } from '../CategoryFilter/style';
import { InputsWrapper } from './style';

const PriceFilter: FC = (): ReactElement => {
    // input handler and validation for only numeric values 

    return (
        <Wrapper>
            <CategoriesHeader>
                Price
            </CategoriesHeader>
            <InputsWrapper>
                <TextField id="outlined-basic" label="Min" variant="outlined" />
                -
                <TextField id="outlined-basic" label="Max" variant="outlined" />
            </InputsWrapper>
        </Wrapper>
    )
}

export default PriceFilter;