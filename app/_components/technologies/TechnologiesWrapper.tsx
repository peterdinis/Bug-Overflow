'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import Sidebar from '../shared/sidebar/Sidebar';
import { useQuery } from '@apollo/client';
import { GET_ALL_TECHNOLOGIES } from '@/app/_graphql/queries/technologyQueries';
import TechnologiesSearch from './TechnologiesSearch';
import TechnologiesCard from './TechnologiesCard';
import { GetAllTechnologies } from '@/app/_graphql/types/TechnologyTypes';
import { Loader2 } from 'lucide-react';
import TechnologiesPagination from './TechnologiesPagination';

const TechnologiesWrapper: FC = () => {
    const { data, error, loading } = useQuery(GET_ALL_TECHNOLOGIES);

    if(loading) {
        return <Loader2 className='animate-spin' />
    }

    if(error) {
        throw new Error(error.message);
    }

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
                        {data &&
                            data.getAllTechnologies.map(
                                (item: GetAllTechnologies) => {
                                    return (
                                        <div key={item.id}>
                                            <TechnologiesCard
                                                name={item.name}
                                                image={item.image}
                                            />
                                        </div>
                                    );
                                },
                            )}
                    </section>

                    <section className='mt-4 relative bottom-0'>
                        <TechnologiesPagination />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesWrapper;
