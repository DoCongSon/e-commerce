import { createBrowserRouter, Link } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";
import Error from "../pages/Error.tsx";
import Logout from "../pages/Logout.tsx";
import Wishlist from "../pages/Wishlist.tsx";
import About from "../pages/About.tsx";
import Account from "../pages/Account.tsx";
import Contact from "../pages/Contact.tsx";
import Detail from "../pages/Detail.tsx";
import Checkout from "../pages/Checkout.tsx";
import Cart from "../pages/Cart.tsx";
import Profile from "../pages/Profile.tsx";
import AddressBook from "../pages/AddressBook.tsx";
import Products from "../pages/Products.tsx";
import Payment from "../pages/Payment.tsx";
import Review from "../pages/Review.tsx";
import Cancellations from "../pages/Cancellations.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout>
            <Home/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/'}>Home</Link>
        },
        errorElement: <DefaultLayout>
            <Error/>
        </DefaultLayout>,
        index: true
    },
    {
        path: "login",
        element: <DefaultLayout>
            <Login/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/login'}>Log in</Link>
        }
    },
    {
        path: "signup",
        element: <DefaultLayout>
            <Signup/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/signup'}>Sign up</Link>
        }
    },
    {
        path: "wishlist",
        element: <DefaultLayout>
            <Wishlist/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/wishlist'}>Wishlist</Link>
        }
    },
    {
        path: "about",
        element: <DefaultLayout>
            <About/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/about'}>About</Link>
        }
    },
    {
        path: "account",
        element: <DefaultLayout>
            <Account/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/account'}>Account</Link>
        },
        children: [
            {
                path: "my-profile",
                element: <Profile/>,
                handle: {
                    crumb: () => <Link to={'/account/my-profile'}>My profile</Link>
                }
            },
            {
                path: "address-book",
                element: <AddressBook/>,
                handle: {
                    crumb: () => <Link to={'/account/address-book'}>My address book</Link>
                }
            },
            {
                path: "my-payment",
                element: <Payment/>,
                handle: {
                    crumb: () => <Link to={'/account/my-payment'}>My payment</Link>
                }
            },
            {
                path: "my-reviews",
                element: <Review/>,
                handle: {
                    crumb: () => <Link to={'/account/my-reviews'}>My reviews</Link>
                }
            },
            {
                path: "my-cancellations",
                element: <Cancellations/>,
                handle: {
                    crumb: () => <Link to={'/account/my-cancellations'}>My cancellations</Link>
                }
            }
        ]
    },
    {
        path: "contact",
        element: <DefaultLayout>
            <Contact/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/contact'}>Contact</Link>
        }
    },
    {
        path: "detail/:id",
        element: <DefaultLayout>
            <Detail/>
        </DefaultLayout>,
        handle: {
            crumb: (name: string) => <Link to={'/detail/:id'}>{name}</Link>
        }
    },
    {
        path: "products",
        element: <DefaultLayout>
            <Products/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/products'}>Checkout</Link>
        }
    },
    {
        path: "checkout",
        element: <DefaultLayout>
            <Checkout/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/checkout'}>Checkout</Link>
        }
    },
    {
        path: "cart",
        element: <DefaultLayout>
            <Cart/>
        </DefaultLayout>,
        handle: {
            crumb: () => <Link to={'/cart'}>Cart</Link>
        }
    },
    {
        path: "logout",
        element: <Logout/>
    }
]);

export default router