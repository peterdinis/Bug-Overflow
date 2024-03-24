"use client"

import { FC, useState } from 'react';
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
    const [searchQuery, setSearchQuery] = useState<string>('');
    
    if (loading) {
        return <Loader2 className='animate-spin' />;
    }

    if (error) {
        throw new Error(error.message);
    }

    const filteredTechnologies = data && data.getAllTechnologies.filter((technology: GetAllTechnologies) => {
        return technology.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <div className='flex flex-no-wrap'>
            <Sidebar />
            <div className='container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6'>
                <div className='w-full h-full rounded'>
                    <Header text='Technologies' />
                    <div className='mt-5'>
                        <TechnologiesSearch onSearch={handleSearch}  />
                    </div>
                    <section className='mt-4'>
                        <div className='w-fit mx-auto grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5'>
                            {filteredTechnologies &&
                                filteredTechnologies.map(
                                    (item: GetAllTechnologies) => (
                                        <TechnologiesCard
                                            key={item.id}
                                            name={item.name}
                                            image={item.image}
                                        />
                                    )
                                )}
                        </div>
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