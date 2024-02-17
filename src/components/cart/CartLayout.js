import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {increaseQuantity, decreaseQuantity, removeFromCart, clearCart} from "@/features/store/cart";
import {useRouter} from 'next/router';
import NoSSR from "@/utils/NoSSR";
import {MdCancel} from "react-icons/md";
import styles from './CartLayout.module.css';
import ShippingForm from "@/components/cart/ShippingForm";
import {formatToNaira} from "@/utils/toNaira";


const CartUI = () => {

    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart);

    // Remove product from cart
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
        toast.error(`${product.name} removed from cart!`);
    };

    // Increase quantity of a product in cart
    const handleIncreaseQuantity = (product) => {
        const updatedProduct = {...product, qty: product.qty + 1};
        dispatch(increaseQuantity(updatedProduct));
    };

    // Decrease quantity of a product in cart
    const handleDecreaseQuantity = (product) => {
        if (product.qty > 1) {
            const updatedProduct = {...product, qty: product.qty - 1};
            dispatch(decreaseQuantity(updatedProduct));
        }
    };

    // Calculate total price of a single product
    const calculateSingleProductTotal = (product) => {
        return product.qty * product.price;
    };


    if (cartItems.length === 0) {
        return (
            <NoSSR>
                <Flex flexDir={'column'} gap={'1rem'}>
                    <Image src={'/assets/cart/emptycart.png'} alt={'Empty Cart'} width={"200px"} height={'200px'}
                           margin={'0 auto'}/>
                    <Text textAlign={'center'} py={'1rem'} fontWeight={500}>Oops!!! Your cart is empty.</Text>
                </Flex>
            </NoSSR>
        );
    } else {
        return (
            <NoSSR>
                {cartItems.map((product, index) => (
                    <Flex
                        border="1px solid #FBBC2F "
                        borderRadius="15px"
                        p={4}
                        gap={10}
                        key={index}
                        fontFamily={'Inter'}
                        align={'center'}
                        position={'relative'}
                        className={styles.cartItem}
                        width={'90%'}
                        margin={'1rem auto'}
                    >
                        <Box w="150px" h="150px" className={styles.cartImage}>
                            <Image
                                objectFit="contain"
                                w="100%"
                                h="100%"
                                src={product?.featured_image || product?.combo_image}
                                alt={product?.name}

                            />
                        </Box>
                        <Box className={styles.cartDetails}>
                            <Flex flexDir={'row'} gap={8}>
                                <Text mb={6} fontSize="21px" fontWeight="medium">
                                    {product?.name}
                                </Text>
                                <Box
                                    position={'absolute'}
                                    top={'15px'}
                                    right={'6px'}
                                    cursor={'pointer'}
                                    _hover={{
                                        opacity: '0.5'
                                    }}
                                >
                                    <MdCancel size={30} onClick={() => handleRemoveFromCart(product)} color={'red'}
                                    />

                                </Box>
                            </Flex>
                            <Text mb={6} fontSize="18px" fontWeight="medium">
                                {formatToNaira(product?.price)}
                                {/*₦{product?.price}*/}
                            </Text>
                            <Flex mb={2} align="center">
                                <Button
                                    onClick={() => handleDecreaseQuantity(product)}
                                    borderRightRadius="0px"
                                    bg="#FBBC2F"
                                    color="white"
                                >
                                    -
                                </Button>
                                <Button
                                    borderRadius="0"
                                    borderColor="#FBBC2F"
                                    variant="outline"
                                >
                                    {product?.qty}
                                </Button>
                                <Button
                                    onClick={() => handleIncreaseQuantity(product)}
                                    borderLeftRadius="0px"
                                    bg="#FBBC2F"
                                    color="white"
                                >
                                    +
                                </Button>
                            </Flex>
                            <Text fontSize="16px" fontWeight="medium" pt={4}>
                                Cart Total: {formatToNaira(calculateSingleProductTotal(product).toFixed(2))}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </NoSSR>
        );
    }
}

const CartLayout = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart);
    const {isOpen, onOpen, onClose} = useDisclosure();

    /// Calculate total price of a single product
    const calculateSingleProductTotal = (product) => {
        return product.qty * product.price;
    };

    // Calculate total price of all products in cart
    // const calculateOverallTotal = () => {
    //     return cartItems.reduce(
    //         (total, product) => total + calculateSingleProductTotal(product),
    //         0
    //     );
    // };
    const price = cartItems.reduce(
        (total, product) => total + calculateSingleProductTotal(product),
        0
    )



    // Clear cart
    const handleClearCart = () => {
        onClose();
        dispatch(clearCart());
        localStorage.setItem('cartItems', JSON.stringify([]));
        toast.error(`Cart cleared!`);
    };

    return (
        <Container  py={{base:"1rem",md:"1rem",lg:"6rem"}} my="50px" maxW="7xl" overflowX={'hidden'}>
            <Flex justifyContent={'space-between'} gap={10} fontFamily={'Inter'}
                  flexDir={['column', 'column', 'column', 'row']}
            >
                <Flex w={{base: '100%', md: '100%', lg: '60%'}} flexDir={'column'}>

                    <Flex flexDir="column" gap={10}>
                        <Box
                            px={6}
                            pb={10}
                            pt={3}
                            borderRadius={'1rem'}
                            boxShadow={'0 0 10px 0 rgba(0,0,0,0.1)'}
                            border={'1px solid rgba(0,0,0,0.1)'}
                        >
                            <Heading as="h2" size="lg" mb={8} mt={2} textAlign={'center'} fontFamily={'Inter'}>
                                Your Shopping List
                            </Heading>

                            {/* PRODUCT CART */}
                            <CartUI/>

                        </Box>
                    </Flex>

                    {cartItems.length === 0 ? (
                        <NoSSR>
                            <Button
                                _hover={{background: 'red', transition: 'all 1s'}}
                                fontWeight="normal"
                                fontSize="18px"
                                p="27px"
                                bg="#FBBC2F"
                                borderRadius="full"
                                color="white"
                                width={'100%'}
                                my={'2rem'}
                                fontFamily={'Inter'}
                                onClick={() => router.push('/products')}
                            >
                                Proceed to Shop Now
                            </Button>
                        </NoSSR>
                    ) : (
                        <NoSSR>
                            <Flex mt="3rem" justify="space-between">
                                <Box>
                                    <Button
                                        _hover={{background: 'red', transition: 'all 1s'}}
                                        fontWeight="normal"
                                        fontSize="18px"
                                        p="27px"
                                        bg="#FBBC2F"
                                        borderRadius="full"
                                        color="white"
                                        onClick={() => router.push('/products')}
                                    >
                                        Continue Shopping
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        onClick={onOpen}
                                        _hover={{background: 'red', transition: 'all 1s'}}
                                        fontWeight="normal"
                                        fontSize="18px"
                                        p="27px"
                                        bg="#FBBC2F"
                                        borderRadius="full"
                                        color="white"
                                    >
                                        Clear Cart
                                    </Button>
                                </Box>
                            </Flex>
                        </NoSSR>
                    )}
                </Flex>

                <NoSSR>
                    <Flex flexDir={'column'} w={{base: '100%', md: '100%', lg: '40%'}} mt={'2rem'} fontFamily={'Inter'}
                          margin={{base: '3rem auto', md: '0'}}
                          textAlign={{base: 'center', md: 'left'}}
                    >
                        <Flex flexDir="column" gap={4}>
                            <Text fontSize="20px" fontWeight="500">
                                PRODUCT ORDER SUMMARY
                            </Text>
                            <Flex fontSize="18px" fontWeight="medium" gap={1}
                                  justifyContent={{base: 'center', md: 'flex-start'}}
                            >
                                <Text>Subtotal:</Text>
                                <Text fontWeight={600}>
                                    {formatToNaira(price)}
                                    {/*₦ {calculateOverallTotal().toFixed(2)}*/}
                                </Text>
                            </Flex>

                            <Text fontSize="18px" fontStyle="italic" mt={'2rem'}>
                                Shipping, taxes, and discounts will be calculated at checkout.
                            </Text>
                            <Box mt={'2rem'}>
                                <ShippingForm/>
                            </Box>

                        </Flex>
                    </Flex></NoSSR>
            </Flex>

            {/* Confirmation Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Clear Cart</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Text fontSize={'1.2rem'} fontFamily={'Inter'}>Are you sure you want to clear your cart?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button fontFamily={'Inter'} variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button fontFamily={'Inter'} colorScheme="red" onClick={handleClearCart} ml={3}>
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default CartLayout;

