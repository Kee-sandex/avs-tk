import React from 'react';

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
  faUserFriends,
  faArrowRight,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/pages/AvsModel.css';

const AvsModel = ({ translations }) => {
  return (
    <section id="model" className="avs-model-section">
      {/* Hero */}
      <div className="hero">
        <div className="container avs-container hero-inner">
          <div className="hero-text">
            <span className="hero-eyebrow">Business Model &amp; Prospectus</span>
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
          <div className="hero-visual">
            <div className="hero-visual-frame">
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Avs Group business Model"
                className="hero-visual-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <section className="section" id="company">
        <div className="container avs-container">
          <div className="section-head">
            <span className="section-eyebrow">
              <FontAwesomeIcon icon={faBuilding} /> Company Profile
            </span>
            <h2 className="section-title">
              {translations['companyProfileTitle'] || 'Company Profile'}
            </h2>
            <p className="section-subtitle">
              {translations['companyProfileSubtitle'] || 'Learn about AVS Group\'s history, locations, and business verticals'}
            </p>
          </div>

          <div className="dossier-grid">
            <div className="dossier-panel">
              <h3 className="panel-title">
                <FontAwesomeIcon icon={faInfoCircle} />
                {translations['detailsTitle'] || 'Details'}
              </h3>
              <dl className="ledger">
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['companyNameLabel'] || 'Company Name:'}</dt>
                  <dd className="ledger-value">{translations['companyNameValue'] || 'AVS (Arthis Versus Dairy Projects Limited)'}</dd>
                </div>
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['cmdLabel'] || 'CMD:'}</dt>
                  <dd className="ledger-value">{translations['cmdValue'] || 'Shri Rajendra Singh'}</dd>
                </div>
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['startDateLabel'] || 'Start Date:'}</dt>
                  <dd className="ledger-value">{translations['startDateValue'] || 'October 21, 2020'}</dd>
                </div>
              </dl>
            </div>

            <div className="dossier-panel">
              <h3 className="panel-title">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {translations['locationsTitle'] || 'Locations'}
              </h3>
              <dl className="ledger">
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['headOfficeLabel'] || 'Head Office & Plant:'}</dt>
                  <dd className="ledger-value">{translations['headOfficeValue'] || 'Fatehpur Beri, Delhi'}</dd>
                </div>
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['farmsLabel'] || 'Farms:'}</dt>
                  <dd className="ledger-value">{translations['farmsValue'] || 'Fatehpur Beri (2), Narela (1), Sohna (2), Palwal (1), Faridabad (1)'}</dd>
                </div>
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['restaurantsLabel'] || 'Restaurants:'}</dt>
                  <dd className="ledger-value">{translations['restaurantsValue'] || 'Fatehpur Beri, Gurgaon (Gwal Pahari & Dunda Hera), Faridabad, Kotla Mubarakpur'}</dd>
                </div>
              </dl>
            </div>

            <div className="dossier-panel">
              <h3 className="panel-title">
                <FontAwesomeIcon icon={faIndustry} />
                {translations['businessVerticalsTitle'] || 'business Verticals'}
              </h3>
              <dl className="ledger">
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['dairyLabel'] || 'Dairy:'}</dt>
                  <dd className="ledger-value">{translations['dairyValue'] || '3000+ buffaloes, 250+ cows, 30,000+ liters of milk sold daily.'}</dd>
                </div>
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['flourMillsLabel'] || 'Flour Mills:'}</dt>
                  <dd className="ledger-value">{translations['flourMillsValue'] || 'Located in Alwar, Rajasthan, producing flour, oil, semolina, and more.'}</dd>
                </div>
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['foodStoresLabel'] || 'Food Stores & Restaurants:'}</dt>
                  <dd className="ledger-value">{translations['foodStoresValue'] || 'Multiple locations across Delhi and Gurgaon.'}</dd>
                </div>
                <div className="ledger-row">
                  <dt className="ledger-label">{translations['propertiesLabel'] || 'Properties:'}</dt>
                  <dd className="ledger-value">{translations['propertiesValue'] || 'Residential properties, villas, and resorts in various locations.'}</dd>
                </div>
              </dl>
            </div>
          </div>

        
        </div>
      </section>

      {/* Investment & Returns */}
      <section className="section investment-section" id="joining">
        <div className="container avs-container">
          <div className="section-head">
            <span className="section-eyebrow">
              <FontAwesomeIcon icon={faChartLine} /> Investment &amp; Returns Model
            </span>
            <h2 className="section-title">
              {translations['investmentTitle'] || 'Cattle Purchase & Leaseback Model'}
            </h2>
            <p className="section-subtitle">
              {translations['investmentSubtitle'] || 'Discover how you can invest in AVS Dairy milking cattle and the returns you can expect'}
            </p>
          </div>

          <blockquote className="investment-highlight">
            <p className="investment-highlight-text">
              {translations['joiningParagraph1'] || 'Investors purchase milking cattle for ₹1,00,000 (payable via UPI). Upon payment, ownership transfers to the investor, who simultaneously leases the cattle back to AVS for 48 months.'}
            </p>
          </blockquote>

          <div className="agreement-card">
            <div className="agreement-stamp">48-Month Agreement</div>
            <h3 className="panel-title light">
              <FontAwesomeIcon icon={faFileContract} />
              {translations['agreementTitle'] || 'The 48-Month Agreement'}
            </h3>
            <p className="agreement-text">
              {translations['agreementParagraph'] || 'For the ₹1,00,000 cattle purchase, the company offers a 48-month leaseback agreement. The investor receives a cash rental of ₹2,700 plus ₹300 in a product wallet every month, totaling ₹1,44,000 over four years. After 48 months, the investor can either take back the cattle or receive a full refund of the ₹1,00,000 principal.'}
            </p>

            <div className="ledger-flow">
              <div className="flow-item">
                <div className="flow-value">₹1,00,000</div>
                <div className="flow-label">{translations['investmentLabel'] || 'Investment'}</div>
              </div>
              <FontAwesomeIcon icon={faLongArrowAltRight} className="flow-arrow" />
              <div className="flow-item">
                <div className="flow-value">48 * (₹2700 + ₹300)</div>
                <div className="flow-label">{translations['monthsLabel'] || 'Months'}</div>
              </div>
              <FontAwesomeIcon icon={faLongArrowAltRight} className="flow-arrow" />
              <div className="flow-item">
                <div className="flow-value">₹1,44,000</div>
                <div className="flow-label">{translations['returnsLabel'] || 'Returns'}</div>
              </div>
            </div>

            <div className="total-value-box">

              <div className="total-description">

              </div>
            </div>
          </div>

          <div className="dossier-panel method-panel">
            <h3 className="panel-title">
              <FontAwesomeIcon icon={faChartLine} />
              {translations['returnMethodTitle'] || 'How the Returns are Structured'}
            </h3>
            <p className="return-method-text">
              {translations['returnMethodParagraph1'] || 'The company insures the cattle at its own cost and manages all dairy operations. During the 48-month lease, the member has two return options:'}
            </p>

            <div className="option-columns">
              <div className="option-box">
                <FontAwesomeIcon icon={faWineBottle} className="option-icon" />
                <h4 className="option-title">{translations['option1'] || 'Receive 1 liter of milk daily'}</h4>
                <p className="option-description">
                  {translations['option1Desc'] || 'Fresh milk delivered as your daily lease return'}
                </p>
              </div>
              <div className="option-box">
                <FontAwesomeIcon icon={faRupeeSign} className="option-icon" />
                <h4 className="option-title">{translations['option2'] || 'Receive ₹2,700 + ₹300 Wallet'}</h4>
                <p className="option-description">
                  {translations['option2Desc'] || '₹90/day cash lease (₹2,700/mo) plus ₹300/mo product wallet'}
                </p>
              </div>
            </div>

            <p className="return-method-text">
              {translations['returnMethodParagraph2'] || 'It is expressly agreed that all other income, profits, benefits, milk proceeds, and any new calf or offspring born from the cattle exclusively belong to the company. Note: Premature exit before 24 months incurs a 10% principal deduction.'}
            </p>
          </div>
        </div>
      </section>

      {/* Withdrawal Policy */}
      <section className="section" id="withdrawal">
        <div className="container avs-container">
          <div className="section-head">
            <span className="section-eyebrow">
              <FontAwesomeIcon icon={faMoneyBillTransfer} /> Withdrawal Policy
            </span>
            <h2 className="section-title">
              {translations['withdrawalPolicyTitle'] || 'Withdrawal Policy'}
            </h2>
            <p className="section-subtitle">
              {translations['withdrawalSubtitle'] || 'Understand the terms for withdrawing your investment'}
            </p>
          </div>

          <div className="policy-columns">
            <div className="policy-panel warning">
              <FontAwesomeIcon icon={faExclamationTriangle} className="policy-icon" />
              <h4 className="policy-title">{translations['earlyWithdrawal'] || 'Early Withdrawal'}</h4>
              <p className="policy-description">
                {translations['earlyWithdrawalDesc'] || '10% deduction if withdrawn before 6 months'}
              </p>
            </div>
            <div className="policy-panel success">
              <FontAwesomeIcon icon={faCheckCircle} className="policy-icon" />
              <h4 className="policy-title">{translations['fullWithdrawal'] || 'Full Withdrawal'}</h4>
              <p className="policy-description">
                {translations['fullWithdrawalDesc'] || 'No deductions after completing 24 months'}
              </p>
            </div>
          </div>

          <ul className="policy-notes">
            <li className="policy-note">
              <FontAwesomeIcon icon={faArrowRight} className="note-arrow" />
              {translations['withdrawalPolicy1'] || 'If a member wishes to withdraw their investment before 24 months, a 10% deduction will be made from the total amount.'}
            </li>
            <li className="policy-note">
              <FontAwesomeIcon icon={faArrowRight} className="note-arrow" />
              {translations['withdrawalPolicy2'] || 'After completing 24 months, the full investment can be withdrawn without any deductions.'}
            </li>
          </ul>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section requirements-section" id="requirements">
        <div className="container avs-container">
          <div className="section-head">
            <span className="section-eyebrow">
              <FontAwesomeIcon icon={faFileAlt} /> Required Documents
            </span>
            <h2 className="section-title">
              {translations['requirementsTitle'] || 'Required Documents'}
            </h2>
            <p className="section-subtitle">
              {translations['requirementsSubtitle'] || 'Documents needed to become an AVS Dairy member'}
            </p>
          </div>

          <div className="doc-checklist">
            <div className="doc-row">
              <FontAwesomeIcon icon={faIdCard} className="doc-icon" />
              <div className="doc-copy">
                <h4 className="doc-title">{translations['doc1'] || 'Aadhaar Card'}</h4>
                <p className="doc-description">{translations['doc1Desc'] || 'Government ID proof'}</p>
              </div>
            </div>
            <div className="doc-row">
              <FontAwesomeIcon icon={faIdCard} className="doc-icon" />
              <div className="doc-copy">
                <h4 className="doc-title">{translations['doc2'] || 'PAN Card'}</h4>
                <p className="doc-description">{translations['doc2Desc'] || 'Tax identification card'}</p>
              </div>
            </div>
            <div className="doc-row">
              <FontAwesomeIcon icon={faUniversity} className="doc-icon" />
              <div className="doc-copy">
                <h4 className="doc-title">{translations['doc3'] || 'Bank Details'}</h4>
                <p className="doc-description">{translations['doc3Desc'] || 'Bank Name, Account Number, IFSC Code'}</p>
              </div>
            </div>
            <div className="doc-row">
              <FontAwesomeIcon icon={faMobileAlt} className="doc-icon" />
              <div className="doc-copy">
                <h4 className="doc-title">{translations['doc4'] || 'Bank-linked Mobile Number'}</h4>
                <p className="doc-description">{translations['doc4Desc'] || 'For verification purposes'}</p>
              </div>
            </div>
            <div className="doc-row">
              <FontAwesomeIcon icon={faUserFriends} className="doc-icon" />
              <div className="doc-copy">
                <h4 className="doc-title">{translations['doc5'] || 'Nominee Details'}</h4>
                <p className="doc-description">{translations['doc5Desc'] || 'Name, Age of nominee'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AvsModel;