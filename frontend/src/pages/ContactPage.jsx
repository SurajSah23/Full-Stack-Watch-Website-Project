import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We&apos;re here to help with any questions about our watches or services. Reach out to our team and we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600 mb-2">Mon-Fri, 9am-6pm EST</p>
          <a href="tel:+15551234567" className="text-yellow-600 hover:text-yellow-700 font-medium">
            +1 (555) 123-4567
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600 mb-2">We&apos;ll respond within 24 hours</p>
          <a href="mailto:info@luxwatch.com" className="text-yellow-600 hover:text-yellow-700 font-medium">
            info@luxwatch.com
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600 mb-2">Our flagship store</p>
          <address className="not-italic text-yellow-600">
            123 Watch Street<br />
            Timepiece City, TC 12345
          </address>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="lg:flex">
          <div className="lg:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 font-medium py-3 px-4 rounded-md hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-gray-900 text-white p-8">
            <h2 className="text-2xl font-bold mb-6">Store Hours</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Monday - Friday</h3>
                  <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Saturday</h3>
                  <p className="text-gray-300">10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Sunday</h3>
                  <p className="text-gray-300">Closed</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-300">
                  Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">What is your return policy?</h3>
                <p className="text-gray-300">
                  We offer a 30-day return policy for unworn watches in their original packaging.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Do you offer watch servicing?</h3>
                <p className="text-gray-300">
                  Yes, our certified watchmakers provide comprehensive service and repair for all watches purchased from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden h-96">
        {/* This would be a map in a real application */}
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600 text-lg">Interactive Map Would Be Here</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;