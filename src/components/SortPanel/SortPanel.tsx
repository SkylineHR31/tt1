import React from 'react';

import { SortButton, Wrapper } from './style';

const SortPanel = () => {

    return (
        <Wrapper>
            <SortButton size="large"
                variant="outlined"
                onClick={() => {
                    alert('clicked');
                }}>
                Sort by
            </SortButton>
            <SortButton size="large"
                variant="outlined"
                onClick={() => {
                    alert('clicked');
                }}>
                Sort by
            </SortButton>
            <SortButton size="large"
                variant="outlined"
                onClick={() => {
                    alert('clicked');
                }}>
                Sort by
            </SortButton>
        </Wrapper>
    )
}

export default SortPanel;