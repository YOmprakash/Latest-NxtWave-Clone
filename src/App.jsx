
import AlumniSection from './components/Alumni'
import AnnouncementBanner from './components/Announcement'
import AwardSection from './components/Award'
import Footer from './components/Footer'
import FundraisingSection from './components/FundRaise'
import HiringCompaniesSection from './components/Hire'
import LandingPage from './components/LandingPage'
import MentorComunity from './components/MentorCommunity'
import NationalRecognizeSection from './components/National-Rec-Sec'
import Navbar from './components/Navbar'
import Recognization from './components/Recognization'



const App = () => {
  return (
    <div>
      <Navbar />
      <AnnouncementBanner/>
      <LandingPage/>
      <AlumniSection/>
      <Recognization/>
      <HiringCompaniesSection/>
      <AwardSection/>
      <NationalRecognizeSection/>
      <MentorComunity/>
      <FundraisingSection/>
      <Footer/>
      
    </div>
  )
}

export default App