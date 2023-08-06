import PropTypes from 'prop-types';

const QuestionAnswerTiles = (props) => {
  const { questions } = props;

  return (
    <div className='flex flex-col items-start rounded-s-lg'>
      {
        questions.map((question, index) => {
          return (
            <div className={`p-4 w-full flex flex-col ${index % 2 === 0 ? 'bg-white' : ''} ${index === questions.length - 1 ? 'rounded-b-lg' : ''}`} key={index + question.question}>
              <span className='font-bold'>{question.question}</span>
              <span className='ml-8'>{question.answer}</span>
            </div>
          )
        })
      }
    </div>
  )
}

QuestionAnswerTiles.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
}

export default QuestionAnswerTiles;