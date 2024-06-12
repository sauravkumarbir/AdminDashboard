import {Space} from 'antd'

import './App.css';
import AppHeader from './AdminDashboard/AppHeader';
import SideMenu from './AdminDashboard/SideMenu';
import PageContent from './AdminDashboard/PageContent';
import AppFooter from './AdminDashboard/AppFooter';
// import Basic from './ReduxAssignment/Basic';
// import Contact from './ReduxAssignment/Contact';
// import Education from './ReduxAssignment/Education';
// import Experience from './ReduxAssignment/Experience';
// import Viewall from './ReduxAssignment/Viewall';



function App() {
  return (
    <>


     <div className='App'>
      <AppHeader/>
      <div className='sideMenuandPageContent'>
      <SideMenu/>
      <PageContent/>
      </div>
      <AppFooter/>
     </div>


      {/* <HashRouter>
        <div className='container mt-4 '>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <h1 className='text-danger text-center '>My Assignment</h1>
            </div>
            <div className='text-center mt-3'>
              <Link className='btn btn-info me-3' to="/basic">Basic</Link>
              <Link className='btn btn-primary me-3' to="/contact">Contact</Link>
              <Link className='btn btn-success me-3' to="/education">Education</Link>
              <Link className='btn btn-danger me-3' to="/experience">Experience</Link>
              <Link className='btn btn-warning me-3' to="/viewall">View All</Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route exact path="/basic" element={<Basic />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/viewall" element={<Viewall />} />
        </Routes>
      </HashRouter> */}




    </>
  );
}

export default App;
