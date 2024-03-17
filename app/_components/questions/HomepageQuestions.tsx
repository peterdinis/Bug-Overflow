import { FC } from 'react';
import QuestionSearch from './QuestionSearch';
import QuestionsCards from './QuestionsCards';

const HomepageQuestions: FC = () => {
    return (
        <>
            <QuestionSearch />
            <QuestionsCards />
        </>
    );
};

export default HomepageQuestions;
