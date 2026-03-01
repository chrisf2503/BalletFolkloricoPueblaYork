import NavBar from './components/navBar';
import Footer from './components/footer';
import '../CSS/home.css'
function Home(){
    return (
        <div className='homePage'>

            <NavBar/>

            <main className='homeContent'>
                <div className='hero'>
                    Ballet Folklorico de Puebla York
                </div>

                <section className='gallerySection'>
                    <div className='gallery'>
                        <p className='galleryTitle'>Gallery</p>
                        <p className='brief'>Look at our photo gallery</p>
                        <p className='galleryLink'>View full gallery</p>
                    </div>
                    <div className='slideShow'>
                        Slide Show section using animation function
                    </div>
                </section>
                <section className='aboutmeSection'>
                    <div className='aboutMe'>
                        <p className='aboutMeTitle'>About Me</p>
                        <p className="brief">
                            Enriching mexican culture with elegance and classic music/steps. 
                            <br /><br />
                            Read our story to learn more about our mission and oppertunity we want to provide.
                        </p>
                    </div>
                </section>
            </main>

            <Footer/>

        </div>  
    );
}
export default Home;