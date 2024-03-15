'use client';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import Sidebar from '../sidebar/Sidebar';

const HeroWrapper: FC = () => {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
           <Sidebar />
        </Box>
    );
};

export default HeroWrapper;
