'use client';

import { FC, useState } from 'react';
import Header from '../shared/Header';
import Sidebar from '../shared/sidebar/Sidebar';
import { useQuery } from '@apollo/client';
import {
    GET_PAGINATED_TECHNOLOGIES,
} from '@/app/_graphql/queries/technologyQueries';
import TechnologiesSearch from './TechnologiesSearch';
import TechnologiesCard from './TechnologiesCard';
import { GetAllTechnologies } from '@/app/_graphql/types/TechnologyTypes';
import { Loader2, Ghost } from 'lucide-react';
import TechnologiesPagination from './TechnologiesPagination';

const TechnologiesWrapper: FC = () => {
    const [page, setPage] = useState(1);
    // const [pageSize, setPageSize] = useState(2); // Removed unused pageSize state
    const { data, error, loading } = useQuery(GET_PAGINATED_TECHNOLOGIES, {
        variables: { page, pageSize: 2 }, // Directly specifying pageSize as 2
    });
    const [searchQuery, setSearchQuery] = useState<string>('');

    if (loading) {
        return <Loader2 className='animate-spin' />;
    }

    if (error) {
        throw new Error(error.message);
    }

    const filteredTechnologies =
        data &&
        data.paginatedTechnologies.filter((technology: GetAllTechnologies) => {
            return technology.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        });

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const totalPages = Math.ceil(data.paginatedTechnologies.length / 2); // Directly specifying pageSize as 2

    return (
        <div className='flex flex-no-wrap'>
            <Sidebar />
            <div className='container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6'>
                <div className='w-full h-full rounded'>
                    <Header text='Technologies' />
                    <div className='mt-5'>
                        <TechnologiesSearch onSearch={handleSearch} />
                    </div>
                    {filteredTechnologies && filteredTechnologies.length > 0 ? (
                        <section className='mt-4'>
                            <div className='w-fit mx-auto grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5'>
                                {filteredTechnologies.map(
                                    (item: GetAllTechnologies) => (
                                        <TechnologiesCard
                                            key={item.id}
                                            name={item.name}
                                            image={item.image}
                                        />
                                    ),
                                )}
                            </div>
                        </section>
                    ) : (
                        <div className=' flex justify-center align-top text-gray-600 mt-8'>
                            <Ghost className='animate-bounce w-8 h-8' />{' '}
                            <span className='font-bold'>
                                No Technology found
                            </span>
                        </div>
                    )}
                    <section className='mt-4 relative bottom-0'>
                        <TechnologiesPagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesWrapper;