import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const CountryStyled = styled.div`
	text-align:left;
	border-radius:5px;
	margin:1em;
	overflow:hidden;
	box-shadow:0 0 7px 2px rgba(0,0,0,.03);
	img{
		width:100%;
		height:160px;
		object-fit:cover;
	}

	.details{
		padding:1.5em;
	}

	h2{
		margin:0px;
		margin-bottom:1rem;
		font-size:18px;
	}
	p{
		font-size:.9em;
		margin-bottom:.5rem;
	}
	a{
		text-decoration:none;
		color:var(--black);
	}
`;



function Country({flag,name,population,region,capital,alpha3Code}){

  return (
  	<CountryStyled>
  		<Link to={"/country/"+name}>
  		<img loading="lazy" src={flag} alt=""/>
  		<div className="details">
	  		<h2>{name}</h2>
	  		<p><strong>Population:</strong> {population}</p>
	  		<p><strong>Region:</strong> {region}</p>
	  		<p><strong>Capital:</strong> {capital}</p>
  		</div>
  	</Link>
  	</CountryStyled>
  )
}

export default Country;