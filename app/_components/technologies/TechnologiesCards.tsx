import { GetAllTechnologies } from '@/app/_graphql/types/TechnologyTypes';
import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TechnologiesCards: FC<GetAllTechnologies> = ({
    name,
    image,
}: GetAllTechnologies) => {
    return (
        <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
            <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
                <span>
                    <img
                        src={image}
                        alt={name}
                        className='h-50 w-50 object-cover rounded-t-xl'
                    />
                    <div className='px-4 py-3 w-72'>
                        <span className='text-gray-400 mr-3 uppercase text-xs'>
                            {name}
                        </span>
                        <Link href='/'>
                            <Button variant={'ghost'} size={'lg'}>
                                Find all {name} questions
                            </Button>
                        </Link>
                    </div>
                </span>
            </div>
        </section>
    );
};

export default TechnologiesCards;
