// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WatchesPage from './pages/WatchesPage';
import WatchDetailPage from './pages/WatchDetailPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/watches" element={<WatchesPage />} />
              <Route path="/watches/:id" element={<WatchDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;