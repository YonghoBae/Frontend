import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const BaseLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export default BaseLayout;