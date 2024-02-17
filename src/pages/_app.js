import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import "../index.css"
import Layout from '@/components/layout/layout';
// import store from "@/redux/store";
import store from "@/features/store"

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => (
        <Layout>
            {page}
        </Layout>
    ));

    return (
        <ChakraProvider>
            <Provider store={store}>
                {getLayout(
                    <>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </>
                )}
            </Provider>
        </ChakraProvider>
    );
}
