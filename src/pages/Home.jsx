import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  X,
} from 'lucide-react';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceDetails = {
    'Plumbing Services': {
      description: 'Leaks, blockages, installations',
      details: 'Burst pipes, leaking taps, blocked drains, geyser lines — we handle it. We'll find the problem fast and fix it right.',
      price: 'From N$250',
      time: '1-3 hours',
      icon: '🔧'
    },
    'Geyser Installation': {
      description: 'New geysers & repairs',
      details: 'Old geyser died? We install new ones and fix broken heating elements. Most geysers get sorted same day.',
      price: 'From N$350',
      time: '1-3 hours',
      icon: '💧'
    },
    'Air Conditioner Repairs': {
      description: 'AC install & fixes',
      details: 'AC not cooling? We service, repair, and install units. Works in Windhoek\'s heat — guaranteed.',
      price: 'From N$300',
      time: '1-2 hours',
      icon: '❄️'
    },
    'Fridge Repairs': {
      description: 'Fridge not cold? We fix it',
      details: 'Broken compressor, frozen-up evaporator, faulty thermostat — most fridge problems we can diagnose and repair same day.',
      price: 'From N$200',
      time: '1-2 hours',
      icon: '🧊'
    },
    'Microwave & Stove': {
      description: 'Microwaves & stoves',
      details: 'Microwave stopped heating? Stove not working? We repair and install both. Quick turnaround.',
      price: 'From N$150',
      time: '1-2 hours',
      icon: '🍳'
    },
    'Washing Machine Repairs': {
      description: 'Washing machine repairs',
      details: 'Not draining? Motor shot? Drum stuck? We fix all the common problems. Get your machine working again.',
      price: 'From N$250',
      time: '1-3 hours',
      icon: '🧺'
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden px-4 sm:px-0">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/lXieo.jpg)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="section-container w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-white space-y-4 sm:space-y-6 animate-slideInLeft">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                When Your Fridge Dies, We Fix It
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Fridge stopped? Geyser broken? Washing machine acting up? We've been fixing these things in Windhoek for 6 years. Same-day service, no excuses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+264812095555" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-deep">
                  <span>📞 Call Now</span>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-400">
                <div className="text-left sm:text-center flex-1">
                  <p className="text-2xl sm:text-3xl font-bold">2,000+</p>
                  <p className="text-xs sm:text-sm text-gray-200">Repairs since 2018</p>
                </div>
                <div className="text-left sm:text-center flex-1">
                  <p className="text-2xl sm:text-3xl font-bold">Same day</p>
                  <p className="text-xs sm:text-sm text-gray-200">Usually available</p>
                </div>
                <div className="text-left sm:text-center flex-1">
                  <p className="text-2xl sm:text-3xl font-bold">2-year</p>
                  <p className="text-xs sm:text-sm text-gray-200">Warranty on repairs</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="section-container px-4 sm:px-0 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">What We Fix</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            All the stuff that breaks at the worst possible times
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              title: 'Plumbing Services',
              description: 'Professional plumbing repairs and maintenance',
              icon: '🔧',
            },
            {
              title: 'Geyser Installation',
              description: 'Expert geyser installation and repairs',
              icon: '💧',
            },
            {
              title: 'Air Conditioner Repairs',
              description: 'AC maintenance and repair services',
              icon: '❄️',
            },
            {
              title: 'Fridge Repairs',
              description: 'Fast and reliable refrigerator repairs',
              icon: '🧊',
            },
            {
              title: 'Microwave & Stove',
              description: 'Microwave and stove repairs and installation',
              icon: '🍳',
            },
            {
              title: 'Washing Machine Repairs',
              description: 'Washing machine maintenance and repair',
              icon: '🧺',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedService(service.title)}
              className="p-6 sm:p-8 bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-deep group transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition duration-500 transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition duration-300 mb-4">
                {service.description}
              </p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="bg-blue-50 section-container px-4 sm:px-0 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Business Hours</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                <span className="font-semibold text-gray-700">Monday - Friday</span>
                <span className="text-gray-600">8:00 AM - 5:30 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                <span className="font-semibold text-gray-700">Saturday</span>
                <span className="text-gray-600">8:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                <span className="font-semibold text-gray-700">Sunday</span>
                <span className="text-gray-600 font-semibold">Closed</span>
              </div>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
                <p className="text-blue-800 font-semibold">📞 24/7 Support Available</p>
                <a href="tel:+264812095555" className="text-primary font-bold text-lg hover:text-blue-700">+264 812 0955</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="section-container px-4 sm:px-0 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Work in Action
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">See the quality of our repairs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {[
            { title: 'Fridge Repair', desc: 'Broken compressor fixed', image: '/images/fridge-repair-tech.jpg' },
            { title: 'AC Installation', desc: 'Complete AC unit replacement', image: '/images/ac-installation.jpg' },
            { title: 'Washing Machine', desc: 'Motor and drum repair', image: '/images/washing-machine.jpg' },
            { title: 'Geyser Fix', desc: 'Heating element replaced', image: '/images/geyser.jpg' },
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="bg-gray-300 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg mb-4">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-bold text-xl sm:text-2xl">{item.title}</p>
                      <p className="text-gray-200 text-sm mt-2">[Before/After Gallery]</p>
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 sm:py-20 relative overflow-hidden px-4 sm:px-0">
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <div className="absolute top-10 right-20 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        </div>
        <div className="section-container text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Your Fridge Isn't Getting Any Closer to Fixed</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Call us. We're usually available same day. If we can come today, we will.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+264812095555"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-secondary rounded-lg font-bold hover:bg-green-50 transition duration-300 shadow-deep hover:shadow-2xl hover:scale-105 active:scale-95 active:shadow-md text-sm sm:text-base transform"
            >
              <span>📞 Call +264 812 0955</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeInUp">
            <div className="sticky top-0 flex items-center justify-between p-6 border-b bg-white rounded-t-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedService}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition transform duration-300 hover:scale-110"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="text-6xl">{serviceDetails[selectedService]?.icon}</div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Service</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {serviceDetails[selectedService]?.details}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Starting Price</p>
                  <p className="text-2xl font-bold text-primary">{serviceDetails[selectedService]?.price}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Average Time</p>
                  <p className="text-2xl font-bold text-secondary">{serviceDetails[selectedService]?.time}</p>
                </div>
              </div>



              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 btn-primary text-center active:scale-95"
                >
                  Book This Service
                </Link>
                <a
                  href="tel:+264812095555"
                  className="flex-1 btn-secondary text-center active:scale-95"
                >
                  📞 Call for Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
