import React,{useEffect,useState} from 'react';
import styled from 'styled-components'
import Country from './Country.js';
import {useSelector,useDispatch} from 'react-redux';

const CountryListStyled=styled.div`
	display:grid;
	grid-row-gap:2.3em;
  grid-auto-flow:columns;
  grid-column-gap:80px;
  grid-template-columns:repeat(auto-fill,264px);
	background:var(--background);
	justify-content:center;
	padding:4em 2em;
`;

const CountryList = (props) => {

	
	const dispatch = useDispatch();

	const countryListByName = useSelector((state) => state.countryListByName)
	 const countryList = useSelector((state) => {
	    if (state.filterByRegion !== '' && countryListByName.length === 0) { 	
	      return state.coutryFilteredByRegion;
	    }
	    if (countryListByName.length > 0) {
	      return countryListByName
	    }
    return state.countryList;
  })

	useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => {
        return response.json()
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list
        })
        // setCountryList(data)
       
      })
      .catch((e) => {
        console.log(e)
      })
  }, [dispatch])

  


  return (
    <CountryListStyled>

    	{countryList.map(({ name, flag, population, capital, region, nativeName, cioc, alpha2Code})=>{
    		return(
    			<Country
                flag={flag}
                name={name}
                key={name}
                population={population}
                region={region}
                capital={capital}
                nativeName={nativeName}
                cioc={cioc}
                alpha2Code={alpha2Code}
              />
			        )
  	})}
    </CountryListStyled>
  )
}

export default CountryList;