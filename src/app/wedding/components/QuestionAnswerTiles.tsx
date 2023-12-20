import Link from 'next/link';
import React from 'react';

interface Question {
  question: string;
  answer: string;
  link?: string;
}

interface QuestionAnswerTilesProps {
  questions: Question[];
}

const QuestionAnswerTiles: React.FC<QuestionAnswerTilesProps> = ({ questions }) => {
  return (
    <div className='flex flex-col items-start rounded-s-lg'>
      {questions.map((question, index) => (
        <div
          className={`p-4 w-full flex flex-col ${index % 2 === 0 ? 'bg-white' : ''} ${index === questions.length - 1 ? 'rounded-b-lg' : ''
            }`}
          key={index + question.question}
        >
          <span className='font-bold'>{question.question}</span>
          {question.link ? (
            <Link href={"/wedding/" + question.link} className='ml-8 underline text-wedding-primary-shadow'>
              {question.answer}
            </Link>
          ) : (
            <span className='ml-8'>{question.answer}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionAnswerTiles;