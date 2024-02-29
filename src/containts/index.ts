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
    category?: string;
}

const menuItems: MenuItem[] = [
    {
        name: 'Woman’s Fashion',
        subMenu: [
            {
                name: 'Women\'s dresses',
                category: 'womens-dresses'
            },
            {
                name: 'Women\'s shoes',
                category: 'womens-shoes'
            },
            {
                name: 'Women\'s watches',
                category: 'womens-watches'
            },
            {
                name: 'Women\'s bags',
                category: 'womens-bags'
            },
            {
                name: 'Women\'s jewellery',
                category: 'womens-jewellery'
            }
        ]
    },
    {
        name: 'Men’s Fashion',
        subMenu: [
            {
                name: 'Men\'s shirts',
                category: 'mens-shirts'
            },
            {
                name: 'Men\'s shoes',
                category: 'mens-shoes'
            },
            {
                name: 'Men\'s watches',
                category: 'mens-watches'
            }
        ]
    },
    {
        name: 'Smartphones',
        category: 'smartphones'

    },
    {
        name: 'Laptops',
        category: 'laptops'
    },
    {
        name: 'fragrances',
        category: 'fragrances'
    },
    {
        name: 'Skincare',
        category: 'skincare'
    },
    {
        name: 'Groceries',
        category: 'groceries'
    },
    {
        name: 'home-decoration',
        category: 'home-decoration'
    },
    {
        name: 'Other',
        subMenu: [
            {
                name: 'Furniture',
                category: 'furniture'
            },
            {
                name: 'Tops',
                category: 'tops'
            },
            {
                name: 'Sunglasses',
                category: 'sunglasses'
            },
            {
                name: 'Automotive',
                category: 'automotive'
            },
            {
                name: 'Motorcycle',
                category: 'motorcycle'
            },
            {
                name: 'Lighting',
                category: 'lighting'
            }
        ]
    }
];

const categories: CategoryItemProps[] = [
    {title: 'Phones', image: PhonesImage, category: 'smartphones'},
    {title: 'Computers', image: ComputersImage, category: 'laptops'},
    {title: 'SmartWatch', image: SmartWatchImage, category: 'watches'},
    {title: 'Camera', image: CameraImage, category: 'camera'},
    {title: 'HeadPhones', image: HeadPhonesImage, category: 'headphones'},
    {title: 'Gaming', image: GamingImage, category: 'gaming'}

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
                to: '/account/my-payment'
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