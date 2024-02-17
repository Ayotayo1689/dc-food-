import {Box, Flex, Input, Text} from "@chakra-ui/react";

const CustomerInfo = () => {
    return (
        <Box bg={"#fff"}>
            <Flex my={4} flexDir="column" gap={2}>
                <Text fontSize="21px" fontWeight="medium">Contact</Text>
                <Flex gap={2}>
                    <Input placeholder='Email address'/>
                    <Input placeholder='Phone Number'/>
                </Flex>

            </Flex>


            <Flex my={4} flexDir="column" gap={4}>
                <Text fontSize="21px" fontWeight="medium">Shipping Details</Text>
                <Flex gap={4}>
                    <Input placeholder='First name'/>
                    <Input placeholder='Last name'/>
                </Flex>
                <Flex gap={4}
                      justify="space-between"
                      flexDir={{base: "column", md: "row"}}
                >
                    <Input placeholder='City'/>
                    <Input placeholder='State'/>
                    <Input placeholder='Potal code'/>

                </Flex>


            </Flex>

        </Box>
    )
}

export default CustomerInfo