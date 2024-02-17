import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import {RxDotFilled} from "react-icons/rx";

const CommentSection = ({fname, date, comment}) => {
    return (<>

            <Box width={"100%"} borderRadius={"10px"} mt={"1rem"}>
                <Flex>

                    <Flex gap={1} pt={2} alignItems={'center'}>
                        <Text fontSize={'0.9rem'} pt={1} className={'Inter'}>
                            {fname}
                        </Text>
                    </Flex>
                    <Flex gap={2} px={"1rem"} pt={2} alignItems={'center'}>
                        <Box pt={1}>
                            <RxDotFilled size={15} color={'black'}/>
                        </Box>
                        <Text fontSize={'0.9rem'} pt={1} color={'rgba(0, 0, 0, 0.40)'}>
                            {date}
                        </Text>
                    </Flex>
                </Flex>
                {/*<hr style={{borderTop: "1px solid orange", margin: "1rem"}}/>*/}
                <Text  mt={2} fontSize="0.9rem"  textAlign={'left'}>"{comment}"</Text>
            </Box></>

    )
}

export default CommentSection