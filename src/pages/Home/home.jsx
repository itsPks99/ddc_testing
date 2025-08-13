// import Menu from './components/Menu/Menu'
import BuildNewCommerce from './buildNewCommerce/buildNewCommerce'
import HighlightCards from './HighlightCards/highlightCards'
// import ImageSection from './ImagesSection/imageSection'
import KnowledgeSection from './KnowledgeSection/knowledgeSection'
// import OurExpertise from './OurExpertiesSection/ourExpertise'
import ContactForm from './ContactForm/contactform'
import IntroVideo from './IntroVideo/introvideo'
import ShopifySection from '../../components/ShopifyPartner/ShopifyPartnerSection'
import OurClients from './OurClients/ourClients'



function Home() {
  return (
    <>
    {/* <Menu /> */}
    <div style={{background: '#fff'}}>
    <IntroVideo 
      // videoSrc="./assets/DdcWebsiteVideo.mp4" 
      
      overlayOpacity={0.5}
      autoPlay={true}
      muted={true}
      loop={true}/>

    <BuildNewCommerce />
    {/* <PartnerSection /> */}
    {/* <OurExpertise /> */}
    {/* <ImageSection /> */}
    <OurClients />
    <ShopifySection />
    <HighlightCards />
    <KnowledgeSection/>
    <ContactForm />
    </div>
    </>
  )
}

export default Home
