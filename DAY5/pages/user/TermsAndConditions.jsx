// TermsAndConditions.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../../assets/css/TermsAndConditions.css';
import Footer from './Footer';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="footer-details">
            <Footer />
          </div>
        </div>
      </div>
      <div className="terms-content">
        <h1>Terms and Conditions</h1>
        <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Beach Resort's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
        <h2>The use of this website is subject to the following terms of use:</h2>
        <ol>
          <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
          <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.</li>
          <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
          <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
          <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
        </ol>
        {/* Add a Link to the homepage */}
        <Link to="/landing">
          <button>Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;