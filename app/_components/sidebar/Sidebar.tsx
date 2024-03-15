"use client"

import { FC, useState } from "react";
import { Box, Button } from '@chakra-ui/react';
import {motion} from "framer-motion";

const variants = {
    open: { width: '250px' },
    closed: { width: '0' }
  };
const Sidebar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    return (
        <Box
        as={motion.div}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        bg="gray.200"
        h="100vh"
      >
        Sidebar Content
        <Button onClick={toggleSidebar}>Toggle</Button>
      </Box>
    )
}

export default Sidebar;