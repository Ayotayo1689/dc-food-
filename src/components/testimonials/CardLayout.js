import {Box, Flex, Image, Text} from "@chakra-ui/react";
import StarRatings from "react-star-ratings/build/star-ratings";
import {FaQuoteRight} from "react-icons/fa";
import NoSSR from "@/utils/NoSSR";


const CardLayout = ({content, author, url, company, starColor}) => {

    return (

        <Box position="relative" display="flex" flexDir="column" gap={4} py="30px" px={4}>
            <Text fontSize={{sm: "16px", lg: "20px"}} fontStyle="italic">{content} </Text>
            <Box>
                <Text fontSize="16px" fontWeight="semibold">{author} </Text>
            <Text fontSize="16px" fontWeight="medium">{company} </Text>
            </Box>
            <Flex  justify="space-between">
                <NoSSR>
                    <StarRatings rating={5} starRatedColor={starColor} numberOfStars={5} starDimension="17px"
                                    starSpacing="2px"/>
                </NoSSR>
                <FaQuoteRight size="36px" stroke="2px" color="black" fill="black"/>
            </Flex>
            <Box position="absolute" top={{base: "-35px", sm: "-25px", lg: "-40px"}}
                 left={{base: "42%", sm: "50%", lg: "-40px"}}
                 borderRadius="100%"
                 overflow="hidden"
                 w={{base: "60px", sm: "50px", lg: "80px"}} h={{base: "60px", sm: "50px", lg: "80px"}}>
                <Image src={url} alt="author-picture" width="100%" height="100%"/>
            </Box>
        </Box>
    )
}

export default CardLayout