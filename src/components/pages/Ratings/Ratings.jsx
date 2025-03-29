import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from '@/components/ui/button';

const questionsData = [
    {
        title: "Decision Makers",
        questions: [
            "How well do decision-makers understand and utilize Decision Quality?",
            "How is your Decision Quality culture reflected in leadership behavior and development?",
            "How well do decision-makers participate in decision-making processes?",
            "How does your organization promote and ensure high quality decision-making?",
            "How does making high quality decisions fit into the evaluation and promotion of decision-makers?"
        ]
    },
    {
        title: "Decision Staff",
        questions: [
            "How well-versed is your organization's decision staff in the principles and concepts of quality decision making?",
            "How well does your decision staff demonstrate the leadership skills necessary to lead high quality decision analysis?",
            "How well has your decision staff earned the confidence of decision-makers?",
            "How well trained are members of your decision staff?i",
            "How is your organization staffed for decision analysis and support?"
        ]
    },
    {
        title: "Process & Roles",
        questions: [
            "How do your decision processes support decision quality?",
            "How are your decision-makers engaged, and how do they participate, in your decision processes?",
            "How widespread is the understanding of the DQ process, tools and concepts in your organization?",
            "How well are your decision processes and tools linked to value creation?i"
        ]
    }
];

const Ratings = () => {
    const [ratings, setRatings] = useState(
        questionsData.map((section) => Array(section.questions.length).fill(0))
    );

    // Calculate overall rating for a section
    const getOverallRating = (sectionIndex) => {
        return ratings[sectionIndex].reduce((acc, val) => acc + val, 0) / ratings[sectionIndex].length;
    };

    // Update rating for a specific question
    const RatingChange = (sectionIndex, questionIndex, value) => {
        setRatings((prev) => {
            const newRatings = prev.map((section, i) =>
                i === sectionIndex ? section.map((r, j) => (j === questionIndex ? value : r)) : section
            );
            return newRatings;
        });
    };
    const clearAllListeners = () => {
        setRatings(questionsData.map((section) => Array(section.questions.length).fill(0)));
    }
    return (
        <>
            <div className='bg-blue-500 text-white mb-3 px-3 py-1'>
                <h3 className='text-center text-2xl'>
                    Raiffa-Howard Award Assessment of Organizational Decision Quality (ODQ)
                </h3>
            </div>
            <Accordion type="single" defaultValue="item-0" collapsible>
                {questionsData.map((section, sectionIndex) => (
                    <AccordionItem key={sectionIndex} value={`item-${sectionIndex}`}>
                        {/* Accordion Header with Dynamic Stars */}
                        <AccordionTrigger className="bg-blue-500 px-4 py-2 flex items-center justify-between rounded-none text-white hide-arrow no-underline hover:no-underline cursor-pointer">
                            <span className="text-lg font-semibold">{section.title}</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-6 h-6 ${i < getOverallRating(sectionIndex) ? "text-yellow-500" : "text-gray-300"}`} />
                                ))}
                            </div>
                        </AccordionTrigger>

                        {/* Accordion Content with Rating System */}
                        <AccordionContent className="p-4 bg-white border-t">
                            {section.questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="mb-4 flex justify-between">
                                    <p className="mb-2 text-gray-700">{questionIndex+1}. {question}</p>
                                    <div className="flex items-center gap-2">
                                        {/* Left Arrow */}
                                        <button
                                            className="p-2 border rounded-full disabled:opacity-50"
                                            onClick={() => RatingChange(sectionIndex, questionIndex, Math.max(0, ratings[sectionIndex][questionIndex] - 1))}
                                            disabled={ratings[sectionIndex][questionIndex] === 0}
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>

                                        {/* Rating Buttons */}
                                        {[...Array(5)].map((_, i) => (
                                            <button
                                                key={i}
                                                className={`w-10 h-10 flex items-center justify-center border rounded-full transition-colors ${ratings[sectionIndex][questionIndex] === i + 1 ? "bg-yellow-500 text-white" : "bg-gray-200"
                                                    }`}
                                                onClick={() => RatingChange(sectionIndex, questionIndex, i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}

                                        {/* Right Arrow */}
                                        <button
                                            className="p-2 border rounded-full disabled:opacity-50"
                                            onClick={() => RatingChange(sectionIndex, questionIndex, Math.min(5, ratings[sectionIndex][questionIndex] + 1))}
                                            disabled={ratings[sectionIndex][questionIndex] === 5}
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className='flex justify-end mt-2'>
            <Button onClick={() => clearAllListeners()} className="bg-blue-500">Clear All</Button>
            </div>            

        </>
    )
}

export default Ratings