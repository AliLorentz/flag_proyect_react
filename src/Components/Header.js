import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper.js';
import {Link} from 'react-router-dom';

const HeaderStyled=styled.div`
	background:var(--white);
	margin-bottom:1em;

	box-shadow:0 2px 4px 0 rgba(0,0,0,.06);
	.content{
		height:80px;
		display:flex;
		align-items:center;
		justify-content:space-between;
	}
	h1{
		font-size:14px;
	}
	.dark-mode{
		.moon{
			transform:rotate(-25deg);
			display:inline-flex;
			margin-right:15px;
		}
	}
	p{
		font-size:12px;
		font-weight:600;
	}
	a{
		text-decoration:none;
		color:var(--black);
	}
`;

const Header = (props) => {
	function handleClick(){

	}

  return (
    <HeaderStyled>
	    <Wrapper>
		    <div className="content">
			    <Link to="/"><h1>Where in the world?</h1></Link>
			    <div className="dark-mode">
			    	<p onClick={handleClick}>
			    		<span className="moon">
			    			<i className="far fa-moon"></i>
				    		<i className="fas fa-moon"></i>
				    		
			    		</span>
			    		Dark Mode	
			    	</p>
			    </div>
			</div>
	    </Wrapper>
    </HeaderStyled>
  )
}

export default Header;