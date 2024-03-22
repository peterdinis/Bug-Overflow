'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import Sidebar from '../shared/sidebar/Sidebar';
import { useQuery } from '@apollo/client';
import { GET_ALL_TECHNOLOGIES } from '@/app/_graphql/queries/technologyQueries';
import TechnologiesSearch from './TechnologiesSearch';

const TechnologiesWrapper: FC = () => {
    const { data, error, loading } = useQuery(GET_ALL_TECHNOLOGIES);

    console.log(data);
    console.log(loading);
    console.log(error);

    return (
        <div className='flex flex-no-wrap'>
            <Sidebar />
            <div className='container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6'>
                <div className='w-full h-full rounded '>
                    <Header text='Technologies' />
                    <div className='mt-5'>
                        <TechnologiesSearch />
                    </div>
                    <section className='mt-4'>rrrr</section>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesWrapper;
