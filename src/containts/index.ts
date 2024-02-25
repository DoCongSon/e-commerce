import { CategoryItemProps } from "../components/CategoryItem.tsx";
import PhonesImage from '../assets/Category-CellPhone.svg';
import ComputersImage from '../assets/Category-Computer.svg';
import SmartWatchImage from '../assets/Category-SmartWatch.svg';
import CameraImage from '../assets/Category-Camera.svg';
import HeadPhonesImage from '../assets/Category-Headphone.svg';
import GamingImage from '../assets/Category-Gamepad.svg';
import IconUser from '../assets/user.svg';
import IconReview from '../assets/Icon-Reviews.svg';
import IconLogout from '../assets/Icon-logout.svg';
import IconCancel from '../assets/icon-cancel.svg';
import IconBag from '../assets/icon-bag.svg';
import willSmith from '../assets/will-smith.png';
import emmaWatson from '../assets/emma-watson.png';
import tomCruise from '../assets/tom-cruise.png';


interface MenuItem {
    name: string;
    subMenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        name: 'Woman’s Fashion',
        subMenu: [
            {
                name: 'clothes'
            },
            {
                name: 'Footwear'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Jewellery'
            }
        ]
    },
    {
        name: 'Men’s Fashion',
        subMenu: [
            {
                name: 'clothes'
            },
            {
                name: 'Footwear'
            },
            {
                name: 'Accessories'
            },
            {
                name: 'Jewellery'
            }
        ]
    },
    {
        name: 'Electronics'

    },
    {
        name: 'Home & Lifestyle'
    },
    {
        name: 'Medicine'
    },
    {
        name: 'Sports & Outdoor'
    },
    {
        name: 'Baby’s & Toys'
    },
    {
        name: 'Groceries & Pets'
    },
    {
        name: 'Health & Beauty'
    }
];

const categories: CategoryItemProps[] = [
    {title: 'Phones', image: PhonesImage},
    {title: 'Computers', image: ComputersImage},
    {title: 'SmartWatch', image: SmartWatchImage},
    {title: 'Camera', image: CameraImage},
    {title: 'HeadPhones', image: HeadPhonesImage},
    {title: 'Gaming', image: GamingImage}

];

const navBarItems = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'Contact',
        to: '/contact'
    },
    {
        name: 'About',
        to: '/about'
    },
    {
        name: 'Sign Up',
        to: '/signup'
    }

];

const userMenuItems = [
    {
        icon: IconUser,
        name: 'Manage My Account',
        to: '/account/my-profile'
    },
    {
        icon: IconBag,
        name: 'My Order',
        to: '/account/my-order'
    },
    {
        icon: IconCancel,
        name: 'My Cancellations',
        to: '/account/my-cancellations'
    },
    {
        icon: IconReview,
        name: 'My Reviews',
        to: '/account/my-reviews'
    },
    {
        icon: IconLogout,
        name: 'Logout',
        to: '/logout'
    }
];

const accountMenuItems = [
    {
        name: 'Manage My Account',
        children: [
            {
                name: 'My Profile',
                to: '/account/my-profile'
            },
            {
                name: 'Address book',
                to: '/account/address-book'
            },
            {
                name: 'My Payment Options',
                to: '/my-payment'
            }
        ]
    },
    {
        name: 'My Order',
        children: [
            {
                name: 'My Reviews',
                to: '/account/my-reviews'
            },
            {
                name: 'My Cancellations',
                to: '/account/my-cancellations'
            }
        ]
    },
    {
        name: 'My Wishlist',
        to: '/wishlist'
    }
];

const members = [
    {
        name: 'Tom Cruise',
        image: tomCruise,
        position: 'Founder & Chairman',
        socials: {
            facebook: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Emma Watson',
        image: emmaWatson,
        position: 'Managing Director',
        socials: {
            facebook: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Will Smith',
        image: willSmith,
        position: 'Product Designer',
        socials: {
            facebook: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Tom Cruise',
        image: tomCruise,
        position: 'Founder & Chairman',
        socials: {
            facebook: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Emma Watson',
        image: emmaWatson,
        position: 'Managing Director',
        socials: {
            facebook: '#',
            instagram: '#',
            linkedin: '#'
        }
    },
    {
        name: 'Will Smith',
        image: willSmith,
        position: 'Product Designer',
        socials: {
            facebook: '#',
            instagram: '#',
            linkedin: '#'
        }
    }
]

export { members, accountMenuItems, userMenuItems, menuItems, categories, navBarItems };
export type { MenuItem };