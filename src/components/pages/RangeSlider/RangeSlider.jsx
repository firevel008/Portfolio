import React, { useState } from 'react'

const RangeSlider = () => {
    const [strength, setStrength] = useState(0);
    const [speed, setSpeed] = useState(0);
    const totalPoints=15;

    const handleAttributeChange = (e, attributeName) => {
        const value = parseInt(e.target.value, 10);
        if (attributeName === "strength") {
            setStrength(value);
            if (value + speed > totalPoints) {
                setSpeed(totalPoints - value);
            }
        } else if (attributeName === "speed") {
            setSpeed(value);
            if (strength + value > totalPoints) {
                setStrength(totalPoints - value);
            }
        }
    };

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Range Slider</h5>
                <p className='text-gray-500'>Change the Strength and Speed</p>
                <div className="mt-5">
                    Character stats: <span id="points">{totalPoints - strength - speed}</span> points
                    <div>
                        <input
                            type="range"
                            id="strength"
                            min="0"
                            max={totalPoints}
                            value={strength}
                            step="1"
                            onChange={(e) => handleAttributeChange(e, "strength")}
                        />
                        Strength {strength}
                    </div>
                    <div>
                        <input
                            type="range"
                            id="speed"
                            min="0"
                            max={totalPoints}
                            value={speed}
                            step="1"
                            onChange={(e) => handleAttributeChange(e, "speed")}
                        />
                        Speed {speed}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RangeSlider