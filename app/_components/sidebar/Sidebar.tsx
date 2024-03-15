"use client"

import { Box,  useColorModeValue } from "@chakra-ui/react";
import { FC, useState } from "react";

const Sidebar: FC = () => {
    const [scroll] = useState(false);
    return (
        <Box  bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        h={16}
        boxShadow={scroll ? 'base' : 'none'}
        zIndex='sticky'
        position='fixed'
        as='header'
        alignItems={'center'}
        justifyContent={'space-between'}
        w='100%'>
            <p>RORORORORO</p>
        </Box>
    )
}

export default Sidebar;