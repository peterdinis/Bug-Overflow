import { FC } from 'react';
import QuestionCard from './QuestionCard';


const QuestionsCards: FC = () => {
    return (
        <section className='mt-2 ml-4 p-2'>
            <QuestionCard id={1} title={'ABC'} created={'Sun Mar 17 2024 16:33:02 GMT+0100 (stredoeurópsky štandardný čas)'} />
            <QuestionCard id={2} title={'CVQA'} created={'Sun Mar 17 2024 16:33:02 GMT+0100 (stredoeurópsky štandardný čas)'} />
        </section>
    );
};

export default QuestionsCards;
