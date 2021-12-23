import NavBar from "../common/navBar";
import HomePage from '../components/homePage';
import AboutUs from '../components/aboutUs';
import CarouselDisplay from "../common/carousel";
import Cards from "../common/cards";
import InfoWithImage from "../common/infoWithImage";
import CountUpLoader from '../common/countUp';
import chooseUs from "../common/chooseUs";

const ROUTES = [
    {
        path: '/about-us',
        component: AboutUs,
        exact: true
    },
    {
        path: ["/", '/home-page'],
        component: HomePage,
        exact: true
    },
    {
        path: '/nav-bar',
        component: NavBar,
        exact: true
    },
    {
        path: '/carousel',
        component: CarouselDisplay,
        exact: true
    },
    {
        path: './cards',
        component: Cards,
        exact: true
    },
    {
        path: './infoWithImage',
        component: InfoWithImage,
        exact: true
    },
    {
        path: './countUp',
        component: CountUpLoader,
        exact: true

    },
    {
        path: './chooseUs',
        component: chooseUs,
        exact: true
    }
]


export default ROUTES