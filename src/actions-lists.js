import React from 'react';
import styled from 'styled-components';
import Search from './Components/Search.js';
import {Region} from './Components/Region.js';
import Wrapper from './Components/wrapper.js';

const ActionsListStyled = styled.div`
	.grid{
		display:grid;
		grid-template-columns:1fr;
		grid-row-gap:40px;
	}
`;

const ActionList = (props) => {
  return (
    <ActionsListStyled>
    	<Wrapper>
    		<div className="grid">
	    		<Search/>
		    	<Region/>
    		</div>
    	</Wrapper>
    </ActionsListStyled>
  )
}

export default ActionList;