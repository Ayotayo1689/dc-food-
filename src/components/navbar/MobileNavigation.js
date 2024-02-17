import {Box, Button, Flex, IconButton, Image} from "@chakra-ui/react";
import {GrClose} from "react-icons/gr";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import styles from "./MobileNav.module.css";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getProductByCategories} from "@/features/products/productSlice";
import {removeFromLocalStorage} from "@/features/user/userSlice";

const MobileNavigation = ({onClose}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isCatOpen, setIsCatOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const { user } = useSelector((store) => store.user);
    const handleCatToggle = () => {
        if (!isCatOpen && isPagesOpen) {
            setIsPagesOpen(false)
        }
        setIsCatOpen(prev => !prev)
    };

    const {category, isLoading: loading} = useSelector((store) => store.products);

    useEffect(() => {
        dispatch(getProductByCategories())

    }, [])

    const logOut = () => {
        removeFromLocalStorage()
        router.push("/")
        const reloadPage = () => {
            router.reload();
        };

        const timeout = setTimeout(reloadPage, 500);

        return () => clearTimeout(timeout);
    };


    return (
        <>
            <Flex
                zIndex={10000}
                p={"30px"}
                w={"100vw"} bgColor={"white"} minH={"100vh"} position={"fixed"} top={"0"} left={"0"}>
                <Flex w={"100vw"} flexDir={"column"}>
                    <Flex mb={"20px"} justifyContent="space-between" align="center">
                        <Box>
                            <Image src={"/assets/logo.webp"}
                                   alt={"DCFood Logo"}
                                   w={"40px"} h={"40px"} objectFit={"contain"}/>
                        </Box>
                        <IconButton onClick={onClose} aria-label={"Close mobile nav"} icon={<GrClose/>}/>
                    </Flex>
                    <Link className={styles.links} onClick={onClose} href={"/"}>Home</Link>
                    <Link className={styles.linksFlex} href={"#"}
                          onClick={handleCatToggle}>Products{!isCatOpen ? <IoIosArrowForward/> :
                        <IoIosArrowDown/>}</Link>
                    {isCatOpen &&
                        <Flex flexDir="column">
                            {
                                !loading && category && category.map((category, index) => {
                                    const shouldRedirect = category.id === 9;
                                    return (
                                        <Box className={styles.inlinks} key={index}>
                                            <Link onClick={onClose} href={shouldRedirect ? '/naija_soup_ingredients' : `/products/${category?.slug}`}>
                                                {category?.name}
                                            </Link>
                                        </Box>
                                    )
                                })
                            }
                        </Flex>
                    }

                    <Link className={styles.links} onClick={onClose} href={"/about"}>About Us</Link>
                    <Link className={styles.links} onClick={onClose} href={"/blogs"}>Blogs</Link>
                    <Link className={styles.links} onClick={onClose} href={"/schedule_errand"}>Schedule Errand</Link>

                    <Link className={isPagesOpen ? styles.linksLast : styles.links} onClick={onClose}
                          href={"/contact"}>Contact Us</Link>

                    <Box mt="3rem">

                        {
                            user ?

                                <Button w='100%' borderRadius='full' size='lg' bg='#252323' _hover={{bg: "#403030"}}
                                        color='white' onClick={logOut}>
                                    Logout
                                </Button>
                                :
                                <Button w='100%' borderRadius='full' size='lg' bg='#252323' _hover={{bg: "#403030"}}
                                        color='white' onClick={() => {
                                    onClose()
                                    router.push('/signin')
                                }}>
                                    Sign In
                                </Button>

                        }
                    </Box>

                </Flex>
            </Flex>
        </>
    )
}

export default MobileNavigation