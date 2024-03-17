import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';
import {format} from "date-fns";

interface IQuestionCardProps {
    id: number;
    title: string;
    created: string | Date;
}

const QuestionCard: FC<IQuestionCardProps> = ({id, title, created}: IQuestionCardProps) => {
    return (
        <>
            <div className='max-w-2xl mx-auto mt-2'>
                <div className='flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start'>
                    <div className='relative w-32 h-32 flex-shrink-0'>
                        <img
                            className='absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50'
                            loading='lazy'
                            src='https://via.placeholder.com/150'
                        />
                    </div>

                    <div className='flex flex-col gap-2 py-2'>
                        <p className='text-xl font-bold'>
                            {title}
                        </p>
                        <span className='font-bold text-xl'>
                            {format(created!, 'yyyy-MM-dd')}
                        </span>
                        <Button>
                            <Link href={`/question/${id}`}>Question Detail</Link>
                        </Button>
                    </div>
                </div>
            </div>       
        </>
    );
};

export default QuestionCard;
