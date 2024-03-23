'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import Sidebar from '../shared/sidebar/Sidebar';
import { useQuery } from '@apollo/client';
import { GET_ALL_TECHNOLOGIES } from '@/app/_graphql/queries/technologyQueries';
import TechnologiesSearch from './TechnologiesSearch';
import TechnologiesCards from './TechnologiesCards';
import { GetAllTechnologies } from '@/app/_graphql/types/TechnologyTypes';

const TechnologiesWrapper: FC = () => {
    const { data, error, loading } = useQuery(GET_ALL_TECHNOLOGIES);

    return (
        <div className='flex flex-no-wrap'>
            <Sidebar />
            <div className='container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6'>
                <div className='w-full h-full rounded '>
                    <Header text='Technologies' />
                    <div className='mt-5'>
                        <TechnologiesSearch />
                    </div>
                    <section className='mt-4'>
                        <span className='mt-4 ml-4 text-xl font-bold'>
                            Something later
                        </span>
                        <br />
                        {data &&
                            data.getAllTechnologies.map(
                                (item: GetAllTechnologies) => {
                                    return (
                                        <div key={item.id}>
                                            <TechnologiesCards
                                                name={item.name}
                                                image={item.image}
                                            />
                                        </div>
                                    );
                                },
                            )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesWrapper;
