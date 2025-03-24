import React from 'react'
import Counter from '../Counter/Counter'
import CountrySearch from '../SearchCountry/CountrySearch'
import RangeSlider from '../RangeSlider/RangeSlider'

const Home = () => {
    return (
        <>
            <div className='flex space-x-6'>
                <Counter />
                <CountrySearch />
                <RangeSlider />
            </div>
        </>
    )
}

export default Home