import { FC } from 'react';
import Header from '../shared/Header';
import QuestionSearch from './QuestionSearch';

const QuestionsLists: FC = () => {
    return (
        <div className='overflow-x-hidden ml-5 py-4 px-8 flex-grow text-center flex-1'>
            <Header text='Welcome to bug overflow' />
            <div className='mt-4'>
                <QuestionSearch />
            </div>
        </div>
    );
};

export default QuestionsLists;
