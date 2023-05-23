import { Autocomplete, TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { Wrapper } from './style';

const SearchField: FC = (): ReactElement => {
    const mock = ["1", "2", "3"]

    return (
        <Wrapper>
            <Autocomplete
                freeSolo
                id="searchInput"
                disableClearable
                options={mock.map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Enter your query or pick from list"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </Wrapper>
    )
}

export default SearchField;