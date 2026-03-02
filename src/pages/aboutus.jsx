import NavBar from './components/navBar';
import Footer from './components/footer';
import '../CSS/aboutus.css'
function AboutUs(){
    return (
        <>
            <NavBar/>
            <main className="aboutusContent">
                <div className='aboutme box'>
                    <div className='titlebox'>
                        <h1>About me</h1>
                    </div>
                    <div className='aboutMeContent contentBox'>
                        <p>
                            Im a Mexican American born and rised in the bronx. Holding
                            a Bachalors Degree in Computer Science and dancing since a young child. 

                        </p>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="mission box ">
                    <div className='titlebox'>
                        <h1>Mission</h1>
                    </div>
                    <div className='misson_statement contentBox'>
                        <p>
                            I want to show the beauty of art of mexican culture through dance with,
                            a mix of classic music/steps<br/>
                            Bring oppertunity to not only talented and eger to learn dancer, but also
                            bring oppertunity to students, Computer Science/UX designer etc, to help them
                            gain experience and help/improve this current build website. 
                        </p>
                        <img src="" alt="" />
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default AboutUs;
