import { JSX } from "react";
import TopHeader from "./components/TopHeader.tsx";
import Header from "./components/Header.tsx";
import Line from "../components/Line.tsx";

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
            <div>{props.children}</div>
            <p>footer</p>
        </div>
    );
}

export default DefaultLayout;