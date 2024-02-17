import {
	Box,
	Divider,
	Flex,
	HStack,
	IconButton,
	Image,
	Text,
	Grid,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/features/store/cart";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import NoSSR from "@/utils/NoSSR";
import { formatToNaira } from "@/utils/toNaira";

const MyOrder = ({ orderInfo }) => {
	const [deliveryPrice, setDeliveryPrice] = useState(null);
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<Box pt={8} fontSize="24px" fontWeight="500" mb={"4rem"}>
			<NoSSR>
				{/*Card Carousel*/}
				<Grid
					py={4}
					alignItems={"center"}
					p={{ base: "0", md: "0", lg: "0 2rem" }}
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, minmax(100px, 1fr))",
					}}
					mx="auto"
					gap={8}
				>
					{orderInfo?.items.map((product, index) => (
						<Flex
							border="1px solid #E2E8F0"
							borderRadius={"5px"}
							boxShadow="0px 1px 1px 0px rgba(0, 0, 0, 0.25)"
							key={index}
							gap={4}
							pb={3}
						>
							<Box position="relative">
								{/*Product image*/}
								<Box>
									<Image
										src={product?.product?.featured_image}
										alt={product?.name}
										mx="auto"
										objectFit="contain"
										w="100px"
										h="100px"
										borderRadius={"5px"}
									/>
								</Box>
							</Box>

							<Flex flexDir={"column"} gap={2} py={1}>
								<Text fontSize={"0.8rem"}>{product?.product?.name}</Text>
								<Text fontSize={"0.8rem"}>{formatToNaira(product?.price)}</Text>

								<Text fontSize={"0.8rem"}>
									Qty:
									{product?.quantity}
								</Text>
								<Text fontSize={"0.8rem"}>
									Total: {"   "}
									{formatToNaira(product?.total_amount)}
								</Text>
							</Flex>
						</Flex>
					))}
				</Grid>

				{/*Order details*/}
				<Flex direction={"column"} gap={4} px="24px" mt="64px">
					<Flex mb="21px" justify="space-between">
						<Text fontSize={"1.2rem"}>Date</Text>

						<Text fontSize={"1.2rem"}>
							{orderInfo?.order_date.slice(0, 10)}
						</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontSize={"1.2rem"}>Status</Text>
						<Text fontSize={"1.2rem"}>{orderInfo?.status}</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontSize={"1.2rem"}>Procurement Status</Text>
						<Text fontSize={"1.2rem"}>{orderInfo?.procurement_status}</Text>
					</Flex>
					<Flex justify="space-between">
						<Text fontSize={"1.2rem"}>Delivery Status</Text>
						<Text fontSize={"1.2rem"}>{orderInfo?.delivery_status}</Text>
					</Flex>

					<Divider my="16px" color="black" />
					<Flex justify="space-between">
						<Text fontSize={"1.2rem"}>Total</Text>
						<Text fontSize={"1.2rem"}>
							{formatToNaira(orderInfo?.total_amount)}
						</Text>
					</Flex>
				</Flex>
			</NoSSR>
		</Box>
	);
};
export default MyOrder;
