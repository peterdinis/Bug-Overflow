import { FC } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

const TechnologiesPagination: FC = () => {
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href='#' />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#'>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href='#' />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
};

export default TechnologiesPagination;
