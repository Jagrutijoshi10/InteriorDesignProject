import NavBar from "../common/navBar";
import HomePage from '../components/homePage';
import AboutUs from '../components/aboutUs';
import CarouselDisplay from "../common/carousel";
import Cards from "../common/cards";
import InfoWithImage from "../common/infoWithImage";
import CountUpLoader from '../common/countUp';
import chooseUs from "../common/chooseUs";
import DesignGallery from "../components/designGallery";

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
        path: '/cards',
        component: Cards,
        exact: true
    },
    {
        path: '/info-with-image',
        component: InfoWithImage,
        exact: true
    },
    {
        path: '/count-up',
        component: CountUpLoader,
        exact: true

    },
    {
        path: '/choose-us',
        component: chooseUs,
        exact: true
    }, 
    {
        path: '/design-gallery',
        component: DesignGallery,
        exact: true
    }
]


export default ROUTES