import { MenuItem } from "../containts";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarMenuProps {
    menuItems: MenuItem[];
}

const SidebarMenuItem = (props: { item: MenuItem, onclick?: () => void }) => {

    return (
        <div className={'flex items-center cursor-pointer'} onClick={props.onclick}>
            {props.item.category &&
              <Link to={{pathname: '/products', search: `?category=${props.item.category}&page=1`}}
                    className={'text-base font-normal text-black flex-1'}>{props.item.name}</Link>}
            {!props.item.category && <p className={'text-base font-normal text-black flex-1'}>{props.item.name}</p>}
            {props.item.subMenu && <ChevronRight size={24} color={'black'}/>}
        </div>
    );
}

const SidebarMenu = (props: SidebarMenuProps) => {
    const [itemActive, setItemActive] = useState<number[]>([]);
    const handleItemClick = (index: number) => {
        if(itemActive.includes(index)) {
            setItemActive(itemActive.filter((item) => item !== index));
        } else {
            setItemActive([...itemActive, index]);
        }
    }

    return (
        <div className={'flex flex-col gap-4 w-[218px]'}>
            {props.menuItems.map((item, index) => {
                if(item.subMenu) {
                    return (
                        <div key={index} className={'flex flex-col gap-2'}>
                            <SidebarMenuItem item={item} onclick={() => handleItemClick(index)}/>
                            {itemActive.includes(index) && <div className={'flex flex-col gap-2 ml-4'}>
                                {item.subMenu.map((subItem, subIndex) => (
                                    <SidebarMenuItem item={subItem} key={subIndex}/>
                                ))}
                            </div>}
                        </div>
                    );
                } else {
                    return <SidebarMenuItem item={item} key={index}/>
                }
            })}
        </div>
    );
};

export default SidebarMenu;