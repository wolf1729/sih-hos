import '../CSSFiles/middlepart.css'

function MiddlePart(){
    return(
        <>
        <section className="image-slider">
            <div className="slide-container">
                <div className="slides">
                    <img className="myIMG active" src="../public/1.png" alt=""/>
                    <img className="myIMG" src="../public/2.png" alt=""/>
                    <img className="myIMG" src="../public/3.png" alt=""/>
                    <img className="myIMG" src="../public/4.png" alt=""/>
                    <img className="myIMG" src="../public/5.jpg" alt=""/>
                </div>
            </div>
            <div className="buttons">
                <span className="next">&#10095;</span>
                <span className="prev">&#10094;</span>
            </div>
            
            <div className="dotsContainer">
                <div className="dot" attr="0"  onClick="switchImage(this)"></div>
                <div className="dot" attr='1' onClick="switchImage(this)"></div>
                <div className="dot" attr='2' onClick="switchImage(this)"></div>
                <div className="dot" attr='3' onClick="switchImage(this)"></div>
                <div className="dot" attr='4' onClick="switchImage(this)"></div>
            </div>
        </section>
        </>
    );
}

export default MiddlePart;