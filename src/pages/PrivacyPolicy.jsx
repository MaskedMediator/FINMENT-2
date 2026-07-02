import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="section-container max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About FINMENT</h2>
          <p>
            FINMENT INVESTMENTS CC is a trusted and versatile service provider dedicated to delivering high-quality solutions in Air Conditioning and Refrigeration, Household Appliance Repair and Services, Plumbing, Electrical Services, and Building Renovations & Construction. With a strong commitment to customer satisfaction and a reputation for excellence, we are proud to offer our expertise to our clients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Air Conditioning & Refrigeration:</strong> Installation, maintenance, and repair of AC units and refrigeration systems</li>
            <li><strong>Household Appliance Repair:</strong> Expert repair and maintenance for washing machines, refrigerators, ovens, and more</li>
            <li><strong>Plumbing Services:</strong> Installation, repair, and maintenance of water systems, fixtures, and pipes</li>
            <li><strong>Electrical Services:</strong> Safe and efficient electrical services including wiring, lighting, and system upgrades</li>
            <li><strong>Building Renovations:</strong> Professional construction, tiling, painting, ceiling installation, and property improvements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Areas</h2>
          <p>We proudly serve the Erongo Region, including: Swakopmund, Walvis Bay, Henties Bay, Arandis, Usakos, Omaruru, Okombahe, and Uis.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Information</h2>
          <div className="bg-blue-50 p-6 rounded-lg space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Physical Address:</p>
                <p>Unit 1, Multi-purpose Centre Building, Swakopmund, Namibia</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Phone:</p>
                <p>Office: +264 81 810 5882</p>
                <p>Cell: +264 81 209 5555</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold">Email:</p>
                <p>finmentinvestments@gmail.com</p>
                <p>finmentoffice@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Company Details</h2>
          <p><strong>VAT Registration:</strong> 13237706 - 011</p>
          <p><strong>Company Type:</strong> FINMENT INVESTMENTS CC</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Our Commitment</h2>
          <p>
            At FINMENT INVESTMENTS CC, we are committed to delivering quality workmanship, dependable service, and customer-focused solutions. Our experienced team strives to complete every project efficiently, safely, and to the highest professional standards, ensuring complete client satisfaction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vision &amp; Mission</h2>

          <h3 className="text-xl font-semibold text-primary mb-2">Vision</h3>
          <p>
            Our vision is to become a leading force in the technical service industry by embracing cutting-edge technologies, promoting a culture of continuous improvement, and delivering unparalleled value to our clients. We aim to set new benchmarks for quality, reliability, and sustainability, driving meaningful impact in the communities we serve and beyond.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4 mb-2">Mission</h3>
          <p>
            Our mission is to empower our clients with innovative, high-quality, and sustainable technical solutions. We strive to exceed expectations through exceptional service, transparency, and a commitment to excellence, fostering growth and trust in every relationship we build.
          </p>
        </section>
      </div>
    </div>
  );
}
