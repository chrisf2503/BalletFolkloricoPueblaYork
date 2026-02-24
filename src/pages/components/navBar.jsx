import '../../CSS/navBar.css'
function navBar(){
    return (
        <>
            <div className='navContainer'>
                <div className='title'><h3>Ballet Folklorico de Puebla York</h3></div>
                <div className="linkContainer">
                    <div className="links"><p>Gallary</p></div>
                    <div className="links"><p>About Us</p></div>
                    <div className="links" id='lastLink'><p>Contact</p></div>
                </div>
                
            </div>
        </>
    )
}
export default navBar;