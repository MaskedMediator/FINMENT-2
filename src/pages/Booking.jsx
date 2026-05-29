import React, { useState } from 'react';
import { ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
    budget: '',
    urgency: 'normal',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'Plumbing Services',
    'Geyser Installation',
    'Air Conditioner Repairs',
    'Fridge Repairs',
    'Microwave & Stove',
    'Washing Machine Repairs',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.description.trim()) newErrors.description = 'Please describe the issue';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          description: '',
          address: '',
          preferredDate: '',
          preferredTime: '',
          budget: '',
          urgency: 'normal',
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-32 flex items-center pt-20 relative overflow-hidden px-4 sm:px-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/lXieo.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"></div>
        </div>

        <div className="section-container w-full relative z-10">
          <div className="text-white space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold">Book a Service</h1>
            <p className="text-gray-200 text-lg">Fill in your details and we'll contact you shortly</p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-container px-4 sm:px-0 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center animate-slideInUp">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-700 mb-2">Booking Request Submitted!</h2>
              <p className="text-green-600 mb-4">
                Thank you, {formData.name}! We'll contact you shortly at {formData.phone} to confirm your service request.
              </p>
              <p className="text-sm text-green-500">Redirecting back to form...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              {/* Personal Information */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                        errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-primary'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                        errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-primary'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+264 81 234 5678"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                        errors.phone ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-primary'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main Street, Windhoek"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                        errors.address ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-primary'
                      }`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.address}</p>}
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                  Service Details
                </h3>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                      errors.service ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-primary'
                    }`}
                  >
                    <option value="">-- Select a service --</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.service}</p>}
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Describe the Issue *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please provide details about the problem..."
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition resize-none ${
                      errors.description ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-primary'
                    }`}
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.description}</p>}
                </div>
              </div>

              {/* Scheduling */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                  Preferred Schedule
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                        errors.preferredDate ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-primary'
                      }`}
                    />
                    {errors.preferredDate && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.preferredDate}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency Level</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                    >
                      <option value="normal">Normal - Within 3-5 days</option>
                      <option value="soon">Soon - Within 24-48 hours</option>
                      <option value="urgent">Urgent - Same day service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., N$500 - N$1000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  Submit Booking Request <ChevronRight size={20} />
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                We'll contact you shortly to confirm your booking details. Your information is safe and secure.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
