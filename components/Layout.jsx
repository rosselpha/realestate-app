import Head from "next/head";
import { Box } from "@chakra-ui/react"

import Footer from "./Footer";
import Navbar from "./Navabr";

export default function Layout ({ children }) {

    return(
        <>
            <Head>
                <title> realestapp</title>

            </Head>
            <Box maxWidth="1280px" m="auto" >
                <header>
                    <Navbar />
                </header>
                <main>
                    { children }

                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>

    )

}