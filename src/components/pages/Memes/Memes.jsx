import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

const Memes = () => {
    const [memes, setMemes] = useState({
        url: "https://loremflickr.com/640/480/city"
    });
    const [allMemes, setAllMemes] = useState();

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((results) => {
            setAllMemes(results.data.memes);
        })
    },[]);
    function getMemes() {
        const randomImages = Math.floor(Math.random() * allMemes.length);
        setMemes(allMemes[randomImages]);
    }
    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Memes Components</h5>
                <p className='text-gray-500'>Dynamic Memes</p>
                <div className="mt-2">
                    <img width="50%" src={memes.url} className='mb-2' />
                    <Button onClick={getMemes} className="bg-blue-500 hover:bg-blue-600 rounded text-white transition">Get Memes</Button>
                </div>
            </div>
        </>
    )
}

export default Memes