import { Checkbox, FormControlLabel } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Wrapper, CategoriesHeader } from './style';

// interface

const CategoryFilter: FC = (): ReactElement => {
    const mock = [
        {
            name: "grey",
            label: "Gray",
        },
        {
            name: "grey",
            label: "Gray",
        },
        {
            name: "grey",
            label: "Gray",
        },
        {
            name: "grey",
            label: "Gray",
        }, {
            name: "grey",
            label: "Gray",
        }
    ]
    return (
        <Wrapper>
            <CategoriesHeader>
                Categories
            </CategoriesHeader>
            {mock.map(category => {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                //   checked={gilad} 
                                //   onChange={handleChange} 
                                name={category.name}/>
                        }
                        label={category.label}
                    />
                )
            })}
        </Wrapper>
    )
}

export default CategoryFilter;