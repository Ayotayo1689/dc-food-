import {Box, Button, Divider, Flex, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import StarRatings from "react-star-ratings/build/star-ratings";

const reviews = [
    {
        id: 1,
        title: "Vestibulum rhoncus est pellentesque elit.",
        description: "\n" +
            "Rhilue seue ut lectus arcu bibendum at. Nunc sed id semper risus. Curabitur gravida arcu ac tortor. Laoreet sit amet cursus sit. Nunc aliquet bibendum enim facilisis gravi",
        author: "Jasmine",
        date: "Jun 21, 2023"
    },
    {
        id: 2,
        title: "Vestibulum rhoncus est pellentesque elit.",
        description: "\n" +
            "Rhilue seue ut lectus arcu bibendum at. Nunc sed id semper risus. Curabitur gravida arcu ac tortor. Laoreet sit amet cursus sit. Nunc aliquet bibendum enim facilisis gravi",
        author: "Ray",
        date: "Jun 21, 2023"
    }
]
const ProductTabs = () => {
    return (
        <>
            <Tabs variant='solid' colorScheme='orange.300'>
                <TabList display='grid' gridTemplateColumns={'1fr 1fr'}>
                    <Tab color='white' fontSize={{base: '14px', md: '18px'}} borderRadius="10px 0px 0px 0px"
                         bg='orange.300'
                         _selected={{bg: 'red'}}>Product
                        Description</Tab>
                    <Tab color='white' fontSize={{base: '14px', md: '18px'}} bg='orange.300' _selected={{bg: 'red'}}>Additional
                        Details</Tab>
                    {/*<Tab color='white' fontSize={{base: '14px', md: '18px'}} borderRadius=" 0px 10px 0px  0px"*/}
                    {/*     bg='orange.300'*/}
                    {/*     _selected={{bg: 'red'}}>Reviews</Tab>*/}
                </TabList>
                <TabPanels px={2} py={4} borderRadius={{base: "0px 0px 10px 10px", md: "0px 10px 10px 10px"}}
                           border="1px solid yellow">
                    <TabPanel>
                        <p>Rids tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis.
                            Pellentesque diam
                            dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                            drostique
                            des commodo pharetras loremos.Donec pretium egestas sapien et mollis.
                            Rids tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis.
                            Pellentesque diam
                            dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                            drostique
                            des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Rids tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis.
                            Pellentesque diam
                            dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis
                            drostique
                            des commodo pharetras loremos.Donec pretium egestas sapien et mollis.</p>
                    </TabPanel>
                    {/*<TabPanel>*/}
                    {/*    <Text fontSize="26px" fontWeight="medium">Customer Reviews</Text>*/}
                    {/*    <Divider my={4} colorScheme="orange"/>*/}
                    {/*    <Flex mb={{base: '2', md: '8'}} gap={8} flexDir={{base: 'column', md: 'row'}}>*/}
                    {/*        <HStack>*/}
                    {/*            <StarRatings rating={5} starRatedColor="black" numberOfStars={5} starDimension="14px"*/}
                    {/*                         starSpacing="2px"/>*/}
                    {/*            <Text>Based on {reviews.length} reviews</Text>*/}
                    {/*        </HStack>*/}
                    {/*        <Box>*/}
                    {/*            <Button _hover={{background: "red", transition: "all 1s"}} fontWeight="normal"*/}
                    {/*                    fontSize="18px"*/}
                    {/*                    p="27px" bg="#FBBC2F" borderRadius="full" color="white">Write a review</Button>*/}
                    {/*        </Box>*/}
                    {/*    </Flex>*/}
                    {/*    <Divider my={4} colorScheme="orange"/>*/}
                    {/*    {reviews.map(({description, id, author, date, title}) => {*/}
                    {/*        return (*/}
                    {/*            <Box key={id}>*/}
                    {/*                <Text fontSize="20px" fontWeight="medium">{title}</Text>*/}
                    {/*                <Text mb={4} fontWeight="medium" fontStyle="italic">{author} <Text*/}
                    {/*                    fontWeight="normal"*/}
                    {/*                    as="span"> on </Text> {date}*/}
                    {/*                </Text>*/}
                    {/*                <Text mb={8}>{description}</Text></Box>*/}

                    {/*        )*/}
                    {/*    })}*/}
                    {/*</TabPanel>*/}
                </TabPanels>
            </Tabs>
        </>
    )
}

export default ProductTabs