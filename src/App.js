import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import InvoiceForm from './components/InvoiceForm';
import NavigationBar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/invoice" element={<InvoiceForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
