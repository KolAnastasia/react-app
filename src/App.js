import Header  from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import FirstBg from './assets/bg1.jpg'
import Thirdbg from './assets/bg2.jpg'

const App = () => {
  
  return (
    <>
      <Header 
        title = 'This is Title'
        descr = "This is new descriptions"
      />
      <Layout 
        title = "First Layout"
        descr = "Descriptions First Layout"
        urlBg = {FirstBg}

      />
      <Layout 
       title = "Second Layout"
       descr = "Descriptions Second Layout"
       colorBg = "red"
       />
      <Layout 
       title = "Third Layout"
       descr = "Descriptions Third Layout"
       urlBg = {Thirdbg}
       
       />
      <Footer /> 
    </>
  )
}

export default App;