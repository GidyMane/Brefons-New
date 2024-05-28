import type { Metadata } from "next";
import SideBar from "@/components/Layout/SideBar";
import Navbar from "@/components/Layout/Navbar";

import ReduxUiProvider from "@/Redux/ReduxUiProvider";
import BreadCrumb from "@/components/Layout/BreadCrumb";
import Footer from "../footer";
import NavBar from "@/components/Layout/Navbar";
import Side from "@/components/Layout/Side";
import Nav from "@/components/Layout/Nav";


export const metadata: Metadata = {
    title: "BREFONS",
    description: "Program to Build Resilience for Food and Nutrition Security in the Horn of Africa (BREFONS)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-[100vh] flex w-full relative  rounded-md">
            <ReduxUiProvider>
                <SideBar />
                <div>
                <Side />
                </div>

                <main className="flex-1 lg:ml-[300px] w-full">
                    <NavBar />
                        {/* <Nav /> */}

                   <div className="w-full pt-10 relative  ">

                        <div className="mt-6 mb-4 mx-2">
                            <BreadCrumb />
                        </div>
                        {/* <div className="pb-16  md:container px-2 md:mx-0"> */}
                            {children}
                            {/* <div className="fixed bottom-0 inset-x-0 w-full">
                                <Footer />
                            </div> */}
                        {/* </div> */}

                        <Footer/>


                    </div> 
                </main>









            </ReduxUiProvider>
        </div>
    );
}
