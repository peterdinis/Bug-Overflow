import { FC } from 'react';

const QuestionSearch: FC = () => {
    return (
        <input
            className='font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs'
            type='text'
            placeholder='Search'
        />
    );
};

export default QuestionSearch;
