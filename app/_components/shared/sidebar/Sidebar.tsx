'use client';

import { FC, useState } from 'react';
import classNames from 'classnames';
import { XCircle, Menu, LogOut, Upload, Files } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

const Sidebar: FC = () => {
    const [collapsed, setSidebarCollapsed] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const logoutUser = () => {
        toast({
            title: 'Logout was successfull',
            className: 'bg-green-400',
            duration: 2000,
        });
        router.push('/login');
    };

    return (
        <div
            className={classNames({
                'grid min-h-screen': true,
                'grid-cols-sidebar': !collapsed,
                'grid-cols-sidebar-collapsed': collapsed,
                'transition-[grid-template-columns] duration-300 ease-in-out':
                    true,
            })}
        >
            <div className='bg-gray-100 text-black'>
                <button onClick={() => setSidebarCollapsed((prev) => !prev)}>
                    {collapsed === true ? (
                        <Menu className='w-7 h-7' />
                    ) : (
                        <XCircle className='w-7 h-7' />
                    )}
                </button>
                {collapsed === false ? (
                    <>
                        <div>
                            <div className='mt-8'>
                                <div className='mt-8'>
                                    <Button
                                        variant={'ghost'}
                                        value='sm'
                                        onClick={logoutUser}
                                    >
                                        <LogOut onClick={logoutUser} />
                                        Logout
                                    </Button>
                                </div>{' '}
                            </div>

                            <div className='mt-8'>
                                <Button variant={'ghost'} value='sm'>
                                    <Upload />
                                    <Link href='/technologies'>Technologies</Link>
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <div className='mt-8'>
                            <div className='mt-8'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                onClick={logoutUser}
                                                variant={'ghost'}
                                                size={'sm'}
                                            >
                                                <LogOut />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Logout</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className='mt-8'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                variant={'ghost'}
                                                size={'sm'}
                                            >
                                                <Link href='/upload'>
                                                    <Upload />
                                                </Link>
                                                <TooltipContent>
                                                   Technologies
                                                </TooltipContent>
                                            </Button>
                                        </TooltipTrigger>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
