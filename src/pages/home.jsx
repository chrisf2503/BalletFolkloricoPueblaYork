import NavBar from './components/navBar';
import Footer from './components/footer';
function Home(){
    return (
        <div className='pages'>
            <div className='navBar'>
                <NavBar/>
            </div>
            <div className='content'>

            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>  
    );
}

export default Home;