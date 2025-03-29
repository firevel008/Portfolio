import React from 'react'
import Counter from '../Counter/Counter'
import CountrySearch from '../SearchCountry/CountrySearch'
import RangeSlider from '../RangeSlider/RangeSlider'
import Memes from '../Memes/Memes'
import SearchBox from '../SearchBar/SearchBox'

const Home = () => {
    return (
        <>
            <div className='grid'>
                <div className='grid grid-cols-3 mb-4 space-x-3'>
                    <Counter />                
                    <RangeSlider />
                    <SearchBox />
                </div>
                <div className='grid grid-cols-2 space-x-3'>
                    <Memes />
                    <CountrySearch />
                </div>                
            </div>
        </>
    )
}

export default Home