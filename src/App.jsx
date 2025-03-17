import './App.css'
import ProductList from './components/ProductList'
import {Header} from './components/Header'
import Slider from './components/Slider'
import Questions from './components/Questions'
import Docs from './components/Docs'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
      <Header />
      <Slider />
      <ProductList />
      <Docs />
      <Questions />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
