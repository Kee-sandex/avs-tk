import React, { useState, useEffect } from 'react';
import '../../styles/pages/Portfolio.css'
import gheeImage from '../../assets/images/avs-food/ghee.webp';
import milkImage from '../../assets/images/avs-food/milk.jpg';
import oilImg from '../../assets/images/avs-food/oil.jpg';
import ataImg from '../../assets/images/avs-food/aata.jpg';

// Importing avs members images
import dineshImg from '../../assets/images/avs-members/Dinesh-sir.jpg';
import tikaImg from '../../assets/images/avs-members/tika_image.png';
import teamImg from '../../assets/images/avs-members/tika-leader.jpg';
import youImg from '../../assets/images/avs-members/youth-img.jpg';
import youImg2 from '../../assets/images/avs-members/youth-img2.jpg';

// Importing avs-restaurant images
import img1 from '../../assets/images/avs-restaurant/img1.jpg'
import img2 from '../../assets/images/avs-restaurant/img2.jpg'
import img3 from '../../assets/images/avs-restaurant/img3.jpg'
import img4 from '../../assets/images/avs-restaurant/img4.jpg'

const Portfolio = ({ translations }) => {
  const [activeModal, setActiveModal] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define image collections for each section
  const farmsImages = [
    {
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      title: "Dairy Excellence",
      desc: "Premium dairy products"
    },
    {
      src: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Sustainable Agriculture",
      desc: "Organic farming practices"
    },
    {
      src: "https://images.unsplash.com/photo-1534338580013-382cf48bd435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Animal Welfare",
      desc: "Ethical treatment standards"
    },
    {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Farm Fresh Produce",
      desc: "Harvested daily"
    }
  ];

  const restaurantsImages = [
    {
      src: img2,
      desc: "Elegant atmosphere"
    },
    {
      src: img4,
      title: "Signature Locations",
      desc: "Prime destinations"
    },
    {
      src: img1,
      title: "Gourmet Cuisine",
      desc: "Master chef creations"
    },
    {
      src: img3,
      title: "Exceptional Service",
      desc: "Memorable experiences"
    }
  ];

  const foodProductsImages = [
    {
      src: gheeImage,
      title: "Dairy Selection",
      desc: "Ghee"
    },
    {
      src: milkImage,
      title: "Dairy Selection",
      desc: "Milk"
    },
    {
      src: oilImg,
      desc: "Oil"
    },
    {
      src: ataImg,
      title: "Gourmet Packaged",
      desc: "Aata"
    }
  ];

  const teamImages = [
    {
      src: tikaImg,
      title: "TK THHAPA",
      desc: "Visionary guidance"
    },
    {
      src: teamImg,
      title: "Team Meeting",
      desc: "With Tk Sir"
    },
    {
      src: dineshImg,
      desc: "Supportive Person"
    },
    {
      src: youImg,
      desc: "Young innovators"
    },
    {
      src: youImg2,
      desc: "Young innovators"
    }
  ];

  const propertiesImages = [
    {
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      title: "Seaside Villas",
      desc: "Oceanfront luxury"
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Mountain Retreats",
      desc: "Alpine serenity"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Urban Residences",
      desc: "City center luxury"
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Farm Estates",
      desc: "Country living"
    }
  ];

  // Open image modal
  const openImageModal = (src) => {
    setModalContent(<img src={src} alt="Enlarged view" />);
    setActiveModal('image');
  };

  // Open video modal
  const openVideoModal = (src) => {
    // For PDFs, we'll open in a new tab
    if (src.endsWith('.pdf')) {
      window.open(src, '_blank');
      return;
    }

    setModalContent(
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        title="Video presentation"
      ></iframe>
    );
    setActiveModal('video');
  };

  // Open gallery
  const openGallery = (section, index = 0) => {
    let images = [];
    switch(section) {
      case 'farms':
        images = farmsImages;
        break;
      case 'restaurants':
        images = restaurantsImages;
        break;
      case 'food':
        images = foodProductsImages;
        break;
      case 'team':
        images = teamImages;
        break;
      case 'properties':
        images = propertiesImages;
        break;
      default:
        return;
    }
    
    setGalleryImages(images);
    setCurrentImageIndex(index);
    setActiveGallery(section);
  };

  // Close gallery
  const closeGallery = () => {
    setActiveGallery(null);
    setGalleryImages([]);
    setCurrentImageIndex(0);
  };

  // Navigate to next image in gallery
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image in gallery
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Close modal
  const closeModal = () => {
    setActiveModal(null);
    setModalContent(null);
  };

  // Counter animation effect
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <>
      <section id="portfolio" style={{ paddingTop: '100px', paddingBottom: '50px', minHeight: '100vh' }}>
        <div className="container">
          {/* Hero Section */}
          <div className="portfolio-hero">
            <h1>Our Diverse <span>Portfolio</span></h1>
            <p>Explore the wide range of businesses and ventures under the AVS Group, built on a foundation of quality and innovation.</p>
            <div className="hero-btns">
              <a href="#portfolio-grid" className="btn">Explore Portfolio</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>

          <div id="portfolio-grid">
            {/* AVS Farms Section */}
            <section className="portfolio-section">
              <div className="section-header">
                <h2>AVS Farms</h2>
                <button className="view-more-btn" onClick={() => openGallery('farms')}>View</button>
              </div>
              <p className="text-center">Discover the source of our fresh, high-quality products from our various dairy and agricultural farms.</p>

              <div className="portfolio-grid">
                {farmsImages.slice(0, 4).map((item, index) => (
                  <div key={index} className="image-container" onClick={() => openImageModal(item.src)}>
                    <img src={item.src} alt={item.title} />
                    <div className="portfolio-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AVS Restaurants Section */}
            <section className="portfolio-section">
              <div className="section-header">
                <h2>AVS Restaurants</h2>
                <button className="view-more-btn" onClick={() => openGallery('restaurants')}>View</button>
              </div>
              <p className="text-center">Experience our farm-to-table philosophy at our restaurants, offering authentic and delicious cuisines.</p>

              <div className="portfolio-grid">
                {restaurantsImages.slice(0, 4).map((item, index) => (
                  <div key={index} className="image-container" onClick={() => openImageModal(item.src)}>
                    <img src={item.src} alt={item.title} />
                    <div className="portfolio-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AVS Food Products Section */}
            <section className="portfolio-section">
              <div className="section-header">
                <h2>AVS Food Products</h2>
                <button className="view-more-btn" onClick={() => openGallery('food')}>View</button>
              </div>
              <p className="text-center">Discover our premium range of food products made from the freshest ingredients straight from our farms.</p>

              <div className="portfolio-grid">
                {foodProductsImages.slice(0, 4).map((item, index) => (
                  <div key={index} className="image-container" onClick={() => openImageModal(item.src)}>
                    <img src={item.src} alt={item.title} />
                    <div className="portfolio-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Section */}
            <section className="portfolio-section">
              <div className="section-header">
                <h2>Our Team</h2>
                <button className="view-more-btn" onClick={() => openGallery('team')}>View</button>
              </div>
              <p className="text-center">Meet the dedicated professionals driving innovation and excellence across the AVS Group.</p>

              <div className="portfolio-grid">
                {teamImages.slice(0, 4).map((item, index) => (
                  <div key={index} className="image-container" onClick={() => openImageModal(item.src)}>
                    <img src={item.src} alt={item.title} />
                    <div className="portfolio-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Properties & Villas Section */}
            <section className="portfolio-section">
              <div className="section-header">
                <h2>Properties & Villas</h2>
                <button className="view-more-btn" onClick={() => openGallery('properties')}>View</button>
              </div>
              <p className="text-center">Discover our exclusive portfolio of luxury properties and vacation villas in prime locations.</p>

              <div className="portfolio-grid">
                {propertiesImages.slice(0, 4).map((item, index) => (
                  <div key={index} className="image-container" onClick={() => openImageModal(item.src)}>
                    <img src={item.src} alt={item.title} />
                    <div className="portfolio-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Download Resources Section */}
            <section className="portfolio-section">
              <h2>Resources</h2>
              <p className="text-center">Access our company materials and learn more about investment opportunities.</p>

              <div className="portfolio-grid">
                {[
                  {
                    type: "video",
                    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
                    title: "Company Video",
                    src: "https://drive.google.com/file/d/1VPN8yj59bm3tQTzQD4mDgi_YKPjkqjvx/view?usp=drivesdk" 
                  },
                  {
                    type: "pdf",
                    thumbnail: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    title: "Company Profile",
                    src: "https://drive.google.com/file/d/1VLy6qKEkzqp-GCID8vkEZy0iRM-rv7ck/view?usp=drivesdk"
                  },
                  {
                    type: "pdf",
                    thumbnail: "https://images.unsplash.com/photo-1591696205602-2f950c417dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                    title: "Investment Opportunities",
                    src: "https://drive.google.com/file/d/1VN_nbPx-hbQhIK1oIytQsEQhug3SIlpl/view?usp=drivesdk"
                  }
                ].map((item, index) => (
                  <div key={index} className="video-card">
                    <div className="video-thumbnail" onClick={() => openVideoModal(item.src)}>
                      <img src={item.thumbnail} alt={item.title} />
                      <div className="play-btn">
                        {item.type === "video" ? "▶" : "📄"}
                      </div>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Statistics Section */}
          <section className="portfolio-section">
            <h2>Our Impact in Numbers</h2>
            <p className="text-center">The AVS Group has grown exponentially since our founding in 2020, making a significant impact across multiple industries.</p>

            <div className="stats-grid">
              <div className="stat-box">
                <div className="counter" data-target="7">0</div>
                <div className="stat-label">Farms</div>
              </div>

              <div className="stat-box">
                <div className="counter" data-target="3250">0</div>
                <div className="stat-label">Animals</div>
              </div>

              <div className="stat-box">
                <div className="counter" data-target="5">0</div>
                <div className="stat-label">Restaurants</div>
              </div>

              <div className="stat-box">
                <div className="counter" data-target="150">0</div>
                <div className="stat-label">Employees</div>
              </div>
            </div>
          </section>

          {/* Investment Section */}
          <section className="portfolio-section" id="invest">
            <h2>Join the AVS Family</h2>
            <p className="text-center">Discover investment opportunities and become part of our growing business community.</p>

            <div className="hero-btns">
              <a href="/contact" className="btn">Invest with Us</a>
              <a href="/model" className="btn btn-outline">View Business Model</a>
            </div>
          </section>
        </div>
      </section>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>&times;</span>
            {modalContent}
          </div>
        </div>
      )}

      {/* Gallery Overlay */}
      {activeGallery && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <span className="gallery-close" onClick={closeGallery}>&times;</span>
            <div className="gallery-main-image">
              <img src={galleryImages[currentImageIndex].src} alt={galleryImages[currentImageIndex].title} />
              <div className="image-info">
                <h3>{galleryImages[currentImageIndex].title}</h3>
                <p>{galleryImages[currentImageIndex].desc}</p>
              </div>
            </div>
            <div className="gallery-controls">
              <button className="gallery-nav-btn prev" onClick={prevImage}>&#10094;</button>
              <div className="gallery-thumbnails">
                {galleryImages.map((img, index) => (
                  <img 
                    key={index} 
                    src={img.src} 
                    alt={img.title} 
                    className={index === currentImageIndex ? 'active' : ''}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              <button className="gallery-nav-btn next" onClick={nextImage}>&#10095;</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;