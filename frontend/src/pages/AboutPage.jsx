import { Clock, Award, Users, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury watch workshop"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Story
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:w-4/5">
              Discover the passion and craftsmanship behind LuxWatch, where tradition meets innovation in the world of fine timepieces.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Watchmaker working"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At LuxWatch, our mission is to bring the art of fine watchmaking to enthusiasts around the world. We believe that a timepiece is more than just an accessory—it&apos;s a statement of personal style, a testament to craftsmanship, and a companion for life&apos;s most important moments.
              </p>
              <p className="text-lg text-gray-700">
                We curate our collection with meticulous attention to detail, selecting only the finest watches from renowned manufacturers and emerging artisans alike. Our team of horological experts is dedicated to providing exceptional service and knowledge, ensuring that each customer finds the perfect timepiece to match their lifestyle and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at LuxWatch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We are committed to excellence in every aspect of our business, from product selection to customer service.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
              <p className="text-gray-600">We celebrate the artistry and precision that goes into creating exceptional timepieces.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We foster a community of watch enthusiasts who share our passion for horology.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">We are committed to responsible business practices that respect our planet and its resources.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate experts behind LuxWatch
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">James Wilson</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-gray-700">
                  With over 20 years of experience in luxury watches, James founded LuxWatch with a vision to make fine timepieces accessible to enthusiasts worldwide.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Sophia Chen</h3>
                <p className="text-gray-600 mb-4">Head of Curation</p>
                <p className="text-gray-700">
                  Sophia&apos;s keen eye for quality and design ensures that our collection features only the finest timepieces from around the world.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Rodriguez</h3>
                <p className="text-gray-600 mb-4">Master Watchmaker</p>
                <p className="text-gray-700">
                  With certification from the Swiss Watchmaking Institute, Michael leads our service department, ensuring each timepiece performs flawlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-yellow-500 border-4 border-white"></div>
                <div className="ml-0 md:ml-12 md:w-1/2 p-6 bg-white rounded-lg shadow-md md:transform md:translate-x-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2010: The Beginning</h3>
                  <p className="text-gray-700">
                    LuxWatch was founded with a small collection of curated timepieces and a passion for horological excellence.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-yellow-500 border-4 border-white"></div>
                <div className="mr-0 md:mr-12 md:w-1/2 p-6 bg-white rounded-lg shadow-md md:ml-auto md:transform md:-translate-x-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2015: Global Expansion</h3>
                  <p className="text-gray-700">
                    We expanded our reach to serve watch enthusiasts around the world, establishing partnerships with renowned watchmakers.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-yellow-500 border-4 border-white"></div>
                <div className="ml-0 md:ml-12 md:w-1/2 p-6 bg-white rounded-lg shadow-md md:transform md:translate-x-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2020: Digital Transformation</h3>
                  <p className="text-gray-700">
                    We launched our enhanced online platform, bringing the luxury watch shopping experience to the digital age with virtual consultations and 3D viewing.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-yellow-500 border-4 border-white"></div>
                <div className="mr-0 md:mr-12 md:w-1/2 p-6 bg-white rounded-lg shadow-md md:ml-auto md:transform md:-translate-x-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2025: Today</h3>
                  <p className="text-gray-700">
                    Today, LuxWatch stands as a premier destination for watch enthusiasts, offering an unparalleled selection and expert guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;