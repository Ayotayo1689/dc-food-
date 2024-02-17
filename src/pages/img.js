
import {Box, Center} from '@chakra-ui/react';
import Image from "next/image";
import bgt from "../../public/assets/hero/bgT.svg"
const ImgBg = () => {


    return (
        <Box>
            <Image src={bgt} alt={""}/>
        </Box>
    );
};

export default ImgBg;
