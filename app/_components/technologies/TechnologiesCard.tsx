import { GetAllTechnologies } from '@/app/_graphql/types/TechnologyTypes';
import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TechnologiesCard: FC<GetAllTechnologies> = ({
    name,
    image,
}: GetAllTechnologies) => {
    return (
        <section>
            <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
                <span>
                    <img
                        src={image}
                        alt={name}
                        className='h-30 w-30 object-cover rounded-t-xl'
                    />
                    <div className='px-4 py-3 w-72'>
                        <span className='text-gray-400 font-bold mr-3 uppercase text-xs'>
                            {name}
                        </span>
                        <Link className='mt-4 p-1' href={`/questions/search/${name}`}>
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

export default TechnologiesCard;
