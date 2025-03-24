import { Label } from '@/components/ui/label'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/components/Redux/Counter/counterSlice'

const Counter = () => {
    const values = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Counter Components</h5>
                <p className='text-gray-500'>Count Increment and Decrement</p>
                <div className="flex justify-around mt-5 text-center">
                    <div className="flex justify-between w-50">
                        <Button className="bg-blue-500 hover:bg-blue-600 rounded text-white transition" onClick={() => dispatch(decrement())}>-</Button>
                        <Label className="text-2xl w-100 bg-accent justify-around">{values}</Label>
                        <Button className="bg-blue-500 hover:bg-blue-600 rounded text-white transition" onClick={() => dispatch(increment())}>+</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter