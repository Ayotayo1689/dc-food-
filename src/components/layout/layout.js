import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import {Box} from "@chakra-ui/react";

const Layout = ({children}) => {
    return (
        <Box>
            <Navbar/>
            {children}
            <Footer/>
        </Box>
    )
}

export default Layout