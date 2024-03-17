import { Button } from '@/components/ui/button';
import { FC } from 'react';

const QuestionCard: FC = () => {
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
                        <p className='text-xl font-bold'>Post title</p>
                        <Button>Question detail</Button>
                    </div>
                </div>
            </div>
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
                        <p className='text-xl font-bold'>Post title</p>
                        <Button>Question detail</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuestionCard;
