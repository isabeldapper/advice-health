import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ActionModalProvider } from './context/action-modal';
import { ToastProvider } from './context/toast-context';

import Header from './components/header';
import Footer from './components/footer';
import MonthCalendar from './components/calendar';
import NoticeTable from './components/notice-table';
import QuickAccess from './components/quick-access';
import ToastNotification from './components/toast-notification';


function App() {
  return (
    <ActionModalProvider>
      <ToastProvider> 
        <div className='d-flex flex-column min-vh-100'>
          <Header />
          <div className='container-fluid flex-grow-1 mx-2'>
            <div className='row'>

              <div className='col-8'>
                <QuickAccess />
                <NoticeTable />
              </div>

              <div className='col-4'>
                <MonthCalendar />
              </div>
            </div>
          </div>

          <ToastNotification /> 
          <Footer />
        </div>
      </ToastProvider>
    </ActionModalProvider>
  );
}

export default App;
