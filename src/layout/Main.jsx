
import { Outlet } from 'react-router-dom';
import Header from '../Pages/share/Header/Header';
import Footer from '../Pages/share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;