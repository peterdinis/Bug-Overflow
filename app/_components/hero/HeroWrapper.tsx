import { FC } from 'react';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import HomepageQuestions from '../questions/HomepageQuestions';

const HeroWrapper: FC = () => {
    return (
        <div className='flex flex-no-wrap'>
            <Sidebar />
            <div className='container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6'>
                <div className='w-full h-full rounded '>
                    <Header text='Welcome to bug overflow' />
                    <section className='mt-4'>
                        <HomepageQuestions />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HeroWrapper;
