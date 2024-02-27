import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


//ENG
import MainPage from './EN/MainPage';
import EngContact from './EN/Contact';
import EducationAndWorkshops from './EN/EducationAndWorkshops';
import VisitorInformation from './EN/VisitorInformation';
import WhatsLive from './EN/WhatsLive';
import EngFaq from './EN/Faq';
import EngReviews from './EN/Reviews';

//NL
import HoofdPagina from './NL/HoofdPagina';
import NlContact from './NL/Contact';
import OpleidingenEnWorkshops from './NL/SchoolEnWorkshops.tsx';
import BezoekersInformatie from './NL/BezoekersInformatie';
import WatIsLive from './NL/WatIsLive';
import Faq from './NL/Faq';
import Reviews from './NL/Reviews';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/*ENG*/}
                <Route index element={<MainPage />} />
                <Route path="Contact" element={<EngContact />} />
                <Route path="EducationAndWorkshops" element={<EducationAndWorkshops />} />
                <Route path="VisitorInformation" element={<VisitorInformation />} />
                <Route path="WhatsLive" element={<WhatsLive />} />
                <Route path="Faq" element={<EngFaq />} />
                <Route path="Reviews" element={<EngReviews />} />

                {/*NL*/}
                <Route path="NL" element={<HoofdPagina />} />
                <Route path="NL/Contact" element={<NlContact />} />
                <Route path="NL/OpleidingenEnWorkshops" element={<OpleidingenEnWorkshops />} />
                <Route path="NL/BezoekersInformatie" element={<BezoekersInformatie />} />
                <Route path="NL/WatIsLive" element={<WatIsLive />} />
                <Route path="NL/Faq" element={<Faq />} />
                <Route path="NL/Reviews" element={<Reviews />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Router />);

