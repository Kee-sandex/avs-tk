import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faChartLine, 
  faFileContract, 
  faMoneyBillTransfer, 
  faFileAlt,
  faInfoCircle,
  faMapMarkerAlt,
  faIndustry,
  faFileDownload,
  faHandHoldingUsd,
  faPhone,
  faWineBottle,
  faRupeeSign,
  faExclamationTriangle,
  faCheckCircle,
  faIdCard,
  faUniversity,
  faMobileAlt,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/pages/AvsModel.css';
const AvsModel = ({ translations }) => {
  return (
    <section id="model" className="avs-model-section">
      {/* Hero Section */}
      <div className="hero">
        <div className="container avs-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {translations['heroTitle'] || 'Avs Group business Model'}
              </h1>
              <p className="hero-description">
                {translations['heroDescription'] || 'An in-depth look at the AVS Group\'s operational and investment model, offering insights into their dairy, food, and property ventures.'}
              </p>
              <div className="hero-btns">
                <a href="#joining" className="hero-btn-primary">
                  <FontAwesomeIcon icon={faHandHoldingUsd} />
                  {translations['investmentBtn'] || 'Investment Plan'}
                </a>
                <a href="/contact" className="hero-btn-secondary">
                  <FontAwesomeIcon icon={faPhone} />
                  {translations['contactBtn'] || 'Contact Us'}
                </a>
              </div>
            </div>
            <div className="hero-portrait-container">
              <img 
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Avs Group business Model" 
                className="hero-portrait-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile Section */}
      <section className="section" id="company">
        <div className="container avs-container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faBuilding} />
            {translations['companyProfileTitle'] || 'Company Profile'}
          </h2>
          <p className="section-subtitle">
            {translations['companyProfileSubtitle'] || 'Learn about AVS Group\'s history, locations, and business verticals'}
          </p>
          <div className="feature-grid">
            <div className="feature-box">
              <h3 className="feature-title">
                <FontAwesomeIcon icon={faInfoCircle} />
                {translations['detailsTitle'] || 'Details'}
              </h3>
              <ul className="details-list">
                <li className="details-item">
                  <strong>{translations['companyNameLabel'] || 'Company Name:'}</strong>{' '}
                  {translations['companyNameValue'] || 'AVS (Arthis Versus Dairy Projects Limited)'}
                </li>
                <li className="details-item">
                  <strong>{translations['cmdLabel'] || 'CMD:'}</strong>{' '}
                  {translations['cmdValue'] || 'Shri Rajendra Singh'}
                </li>
                <li className="details-item">
                  <strong>{translations['startDateLabel'] || 'Start Date:'}</strong>{' '}
                  {translations['startDateValue'] || 'October 21, 2020'}
                </li>
              </ul>
            </div>
            <div className="feature-box">
              <h3 className="feature-title">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {translations['locationsTitle'] || 'Locations'}
              </h3>
              <ul className="details-list">
                <li className="details-item">
                  <strong>{translations['headOfficeLabel'] || 'Head Office & Plant:'}</strong>{' '}
                  {translations['headOfficeValue'] || 'Fatehpur Beri, Delhi'}
                </li>
                <li className="details-item">
                  <strong>{translations['farmsLabel'] || 'Farms:'}</strong>{' '}
                  {translations['farmsValue'] || 'Fatehpur Beri (2), Narela (1), Sohna (2), Palwal (1), Faridabad (1)'}
                </li>
                <li className="details-item">
                  <strong>{translations['restaurantsLabel'] || 'Restaurants:'}</strong>{' '}
                  {translations['restaurantsValue'] || 'Fatehpur Beri, Gurgaon (Gwal Pahari & Dunda Hera), Faridabad, Kotla Mubarakpur'}
                </li>
              </ul>
            </div>
            <div className="feature-box">
              <h3 className="feature-title">
                <FontAwesomeIcon icon={faIndustry} />
                {translations['businessVerticalsTitle'] || 'business Verticals'}
              </h3>
              <ul className="details-list">
                <li className="details-item">
                  <strong>{translations['dairyLabel'] || 'Dairy:'}</strong>{' '}
                  {translations['dairyValue'] || '3000+ buffaloes, 250+ cows, 30,000+ liters of milk sold daily.'}
                </li>
                <li className="details-item">
                  <strong>{translations['flourMillsLabel'] || 'Flour Mills:'}</strong>{' '}
                  {translations['flourMillsValue'] || 'Located in Alwar, Rajasthan, producing flour, oil, semolina, and more.'}
                </li>
                <li className="details-item">
                  <strong>{translations['foodStoresLabel'] || 'Food Stores & Restaurants:'}</strong>{' '}
                  {translations['foodStoresValue'] || 'Multiple locations across Delhi and Gurgaon.'}
                </li>
                <li className="details-item">
                  <strong>{translations['propertiesLabel'] || 'Properties:'}</strong>{' '}
                  {translations['propertiesValue'] || 'Residential properties, villas, and resorts in various locations.'}
                </li>
              </ul>
            </div>
            <div className="feature-box download-box">
              <div>
                <h3 className="feature-title">
                  <FontAwesomeIcon icon={faFileDownload} />
                  {translations['downloadTitle'] || 'Download Brochure'}
                </h3>
                <p className="download-description">
                  {translations['downloadDescription'] || 'You can download the full company profile for more details.'}
                </p>
              </div>
              <a href="#" download className="download-btn">
                <FontAwesomeIcon icon={faFileDownload} />
                {translations['downloadButton'] || 'Download PDF'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section investment-section" id="joining">
        <div className="container avs-container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faChartLine} />
            {translations['investmentTitle'] || 'Investment & Returns Model'}
          </h2>
          <p className="section-subtitle">
            {translations['investmentSubtitle'] || 'Discover how you can invest in AVS Dairy and the returns you can expect'}
          </p>
          <div className="investment-highlight">
            <p className="investment-highlight-text">
              {translations['joiningParagraph1'] || 'To join AVS Dairy, a one-time membership fee of ₹1,200 is required, which can be used to purchase products or dine at their restaurants. After joining, members receive a unique ID and password.'}
            </p>
          </div>
          <div className="feature-box">
            <h3 className="feature-title">
              <FontAwesomeIcon icon={faFileContract} />
              {translations['agreementTitle'] || 'The 48-Month Agreement'}
            </h3>
            <p className="agreement-text">
              {translations['agreementParagraph'] || 'For an investment of ₹1,00,000, the company offers a 48-month agreement, providing a 3% monthly return. This means an investor receives ₹3,000 every month for four years, totaling ₹1,44,000 in returns. At the end of the agreement, the original investment of ₹1,00,000 is also returned.'}
            </p>
            <div className="stat-grid">
              <div className="stat-box">
                <div className="stat-value">₹1,00,000</div>
                <div className="stat-label">
                  {translations['investmentLabel'] || 'Investment'}
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-value">48 * 3000</div>
                <div className="stat-label">
                  {translations['monthsLabel'] || 'Months'}
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-value">₹1,44,000</div>
                <div className="stat-label">
                  {translations['returnsLabel'] || 'Returns'}
                </div>
              </div>
            </div>
            <div className="total-value-box">
              <div className="total-value">
                {translations['totalValue'] || 'Total Value: ₹2,44,000'}
              </div>
              <div className="total-description">
                {translations['totalDescription'] || '(₹1,00,000 investment + ₹1,44,000 returns)'}
              </div>
            </div>
          </div>
          <div className="feature-box">
            <h3 className="feature-title">
              <FontAwesomeIcon icon={faChartLine} />
              {translations['returnMethodTitle'] || 'How the 3% Return is Generated'}
            </h3>
            <p className="return-method-text">
              {translations['returnMethodParagraph1'] || 'The company uses the ₹1,00,000 investment to purchase a buffalo and a calf. The buffalo produces approximately 10 liters of milk daily. The member has two options:'}
            </p>
            <div className="feature-grid option-grid">
              <div className="feature-box option-box">
                <div className="option-header">
                  <FontAwesomeIcon icon={faWineBottle} className="option-icon" />
                  <h4 className="option-title">{translations['option1'] || 'Receive 1.5 liters of milk daily'}</h4>
                </div>
                <p className="option-description">
                  {translations['option1Desc'] || 'Fresh milk delivered to your doorstep daily'}
                </p>
              </div>
              <div className="feature-box option-box">
                <div className="option-header">
                  <FontAwesomeIcon icon={faRupeeSign} className="option-icon" />
                  <h4 className="option-title">{translations['option2'] || 'Receive ₹3,000 per month'}</h4>
                </div>
                <p className="option-description">
                  {translations['option2Desc'] || 'Equivalent to the value of the milk (1.5 liters x 30 days)'}
                </p>
              </div>
            </div>
            <p className="return-method-text">
              {translations['returnMethodParagraph2'] || 'The remaining 8.5 liters of milk is sold or used in the company\'s restaurants, which is how the company generates its profit.'}
            </p>
          </div>
        </div>
      </section>

      {/* Withdrawal Policy Section */}
      <section className="section" id="withdrawal">
        <div className="container avs-container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            {translations['withdrawalPolicyTitle'] || 'Withdrawal Policy'}
          </h2>
          <p className="section-subtitle">
            {translations['withdrawalSubtitle'] || 'Understand the terms for withdrawing your investment'}
          </p>
          <div className="feature-grid withdrawal-grid">
            <div className="feature-box withdrawal-box warning-box">
              <div className="withdrawal-header">
                <FontAwesomeIcon icon={faExclamationTriangle} className="withdrawal-icon warning-icon" />
                <h4 className="withdrawal-title">{translations['earlyWithdrawal'] || 'Early Withdrawal'}</h4>
              </div>
              <p className="withdrawal-description">
                {translations['earlyWithdrawalDesc'] || '10% deduction if withdrawn before 24 months'}
              </p>
            </div>
            <div className="feature-box withdrawal-box success-box">
              <div className="withdrawal-header">
                <FontAwesomeIcon icon={faCheckCircle} className="withdrawal-icon success-icon" />
                <h4 className="withdrawal-title">{translations['fullWithdrawal'] || 'Full Withdrawal'}</h4>
              </div>
              <p className="withdrawal-description">
                {translations['fullWithdrawalDesc'] || 'No deductions after completing 24 months'}
              </p>
            </div>
          </div>
          <div className="feature-box withdrawal-policy-details">
            <ul className="details-list">
              <li className="details-item policy-item">
                {translations['withdrawalPolicy1'] || 'If a member wishes to withdraw their investment before 24 months, a 10% deduction will be made from the total amount.'}
              </li>
              <li className="details-item policy-item">
                {translations['withdrawalPolicy2'] || 'After completing 24 months, the full investment can be withdrawn without any deductions.'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="section requirements-section" id="requirements">
        <div className="container avs-container">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faFileAlt} />
            {translations['requirementsTitle'] || 'Required Documents'}
          </h2>
          <p className="section-subtitle">
            {translations['requirementsSubtitle'] || 'Documents needed to become an AVS Dairy member'}
          </p>
          <div className="feature-grid doc-grid">
            <div className="feature-box doc-box">
              <div className="doc-item">
                <FontAwesomeIcon icon={faIdCard} className="doc-icon" />
                <div>
                  <h4 className="doc-title">{translations['doc1'] || 'Aadhaar Card'}</h4>
                  <p className="doc-description">{translations['doc1Desc'] || 'Government ID proof'}</p>
                </div>
              </div>
            </div>
            <div className="feature-box doc-box">
              <div className="doc-item">
                <FontAwesomeIcon icon={faIdCard} className="doc-icon" />
                <div>
                  <h4 className="doc-title">{translations['doc2'] || 'PAN Card'}</h4>
                  <p className="doc-description">{translations['doc2Desc'] || 'Tax identification card'}</p>
                </div>
              </div>
            </div>
            <div className="feature-box doc-box">
              <div className="doc-item">
                <FontAwesomeIcon icon={faUniversity} className="doc-icon" />
                <div>
                  <h4 className="doc-title">{translations['doc3'] || 'Bank Details'}</h4>
                  <p className="doc-description">{translations['doc3Desc'] || 'Bank Name, Account Number, IFSC Code'}</p>
                </div>
              </div>
            </div>
            <div className="feature-box doc-box">
              <div className="doc-item">
                <FontAwesomeIcon icon={faMobileAlt} className="doc-icon" />
                <div>
                  <h4 className="doc-title">{translations['doc4'] || 'Bank-linked Mobile Number'}</h4>
                  <p className="doc-description">{translations['doc4Desc'] || 'For verification purposes'}</p>
                </div>
              </div>
            </div>
            <div className="feature-box doc-box">
              <div className="doc-item">
                <FontAwesomeIcon icon={faUserFriends} className="doc-icon" />
                <div>
                  <h4 className="doc-title">{translations['doc5'] || 'Nominee Details'}</h4>
                  <p className="doc-description">{translations['doc5Desc'] || 'Name, Age of nominee'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AvsModel;
