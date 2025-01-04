import {
  DarkThemeToggle,
  Navbar,
  Footer,
  Flowbite,
  Toast,
} from "flowbite-react";
import carouselImages from "./carouselImages.json";
import { HiCheck } from "react-icons/hi";
import { useState } from "react";
import { ContactForm } from "./component/ContactForm";
import CustomCarousel from "./component/CustomCarousel";
import FloatingPhoneButton from "./component/FloatingPhoneButton";
import FadeInText from "./component/Description";
import Divider from "./component/Divider";

function App() {
  const [showToast, setShowToast] = useState(false);
  console.log('carouselImages', carouselImages)
  return (
    <Flowbite>
      <main className="min-h-screen gap-2 p-4 px-4 dark:bg-gray-800 sm:p-6 sm:px-10">
        <div className="flex items-center justify-between">
          <Navbar fluid style={{ padding: 0, height: '60px', display: 'flex', alignItems: 'center' }}>
            <Navbar.Brand href="#">
              <img src="public/images/logo.png" className="mr-2 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl sm:text-3xl font-bold dark:text-white">iCareBus</span>
            </Navbar.Brand>
            {/* <Navbar.Toggle /> */}
          </Navbar>
          <DarkThemeToggle className="h-[38px]" />
        </div>
        <div style={{
          height: '85vh',
          // minHeight: '160px', maxHeight: '480px'
        }}>

          <CustomCarousel></CustomCarousel>

        </div>
        <FloatingPhoneButton />
        {/* <Button
          onClick={() => window.open('tel:0908866607')}
          style={{
            position: 'fixed',
            zIndex: '900',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#126075',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            'hover': {
              backgroundColor: '#0c3c49',
            }
          }}
        >
          <FaPhone style={{ fontSize: '26px' }} />
        </Button> */}
        <FadeInText></FadeInText>
        <Divider />
        <div className="dark:text-slate-300">
          預約專線: 0908866607，或點擊右下角按鈕撥打
        </div>
        <br />
        <div className="dark:text-slate-300">
          有任何疑問，請聯絡我們！我們會盡速聯絡您
        </div>
        <ContactForm setShowToast={setShowToast} />
        <div className="mt-6 w-full text-center" style={{ height: '26px' }}>
          <Footer.Copyright href="#" by="iCareBus™" year={2025} />
        </div>
      </main>

      {showToast && (
        <Toast style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Set yourself free.</div>
          <Toast.Toggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
    </Flowbite>
  );
}

export default App;
