import { JSX } from "react";
import TopHeader from "./components/TopHeader.tsx";
import Header from "./components/Header.tsx";
import Line from "../components/Line.tsx";
import Footer from "./components/Footer.tsx";
import Copyright from "./components/Copyright.tsx";

interface DefaultLayotProps {
    children: JSX.Element
}

function DefaultLayout(props: DefaultLayotProps) {
    return (
        <div>
            <TopHeader title="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!" titleButton="ShopNow"
                       onClick={() => {
                       }}/>
            <Header/>
            <Line/>
            <div className={'max-w-[1170px] mx-auto'}>
                {props.children}
            </div>
            <Footer/>
            <Copyright/>
        </div>
    );
}

export default DefaultLayout;