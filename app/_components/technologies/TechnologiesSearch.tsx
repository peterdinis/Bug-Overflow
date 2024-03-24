import { FC, ChangeEvent } from 'react';

interface TechnologiesSearchProps {
    onSearch: (query: string) => void;
}

const TechnologiesSearch: FC<TechnologiesSearchProps> = ({ onSearch }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
        <input
            className='font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs'
            type='text'
            placeholder='Search'
            onChange={handleInputChange}
        />
    );
};

export default TechnologiesSearch;