import { Header } from "./Header";
import Footer from "./Footer";

function Spasibo() {
    return (

            <div
            style={{
                minHeight: '100svh',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
            className="spasibo">
                <Header/>
                <div style={{
                    paddingTop:'100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h1>
                        Спасибо! Мы свяжемся с вами!
                    </h1>
                </div>
                <Footer/>
            </div>
 
    )
}

export default Spasibo