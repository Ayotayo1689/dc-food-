import {Container, Flex, Image} from "@chakra-ui/react";
import styles from './brands.module.css'

const companiesImg = [
    {
        id: 1,
        url: "/assets/brands/cdk.jpeg"
    },
    {
        id: 2,
        url: "/assets/brands/Konga.jpg"
    },
    {
        id: 3,
        url: "/assets/brands/lsg.png"
    },
    {
        id: 4,
        url: "/assets/brands/M778.jpg.webp"
    },
    {
        id: 5,
        url: "/assets/brands/primera mfb.webp"
    },
]

const Brands = () => {
    return (
        <Container my="120px" maxW="container.xl">
            <Flex alignItems="center" justify={{base: 'center', md: 'space-between'}}
                  width={{lg: '100%', md: '100%', base: '100%'}} className={styles.imageContainer}>
                {companiesImg.map(({id, url}) => {
                    return <Image key={id} width={{base: '70px', md: "150px", xl: "120px"}} src={url}
                                  alt={`company ${id}`} className={styles.brandsImage}/>
                })}
            </Flex>
        </Container>

    )
}

export default Brands


// const Brands = () => {
//     return (
//         <Container mt="100px" mb={'80px'} maxW="container.xl">
//             <Flex
//                 justify={{lg: 'space-between', md: 'space-between', base: 'center'}}
//             >
//                 <Flex width={{base: "30%", md: "100%", lg: "50%"}} justify={{lg: 'space-between', md: 'space-between', base: 'center'}}
//                       alignItems={{lg: 'center', md: 'center', base: 'center'}} flexWrap={'wrap'} gap={10}
//                 >
//                     {companiesImg.map(({id, url}) => {
//                         return <Image key={id} width={{base: '90px', md: "150px", xl: "120px"}} src={url}
//                                       alt={`company ${id}`}/>
//                     })}
//                 </Flex>
//             </Flex>
//         </Container>
//
//     )
// }
//
// export default Brands