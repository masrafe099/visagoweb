import React, { useState, useEffect } from 'react';

// Placeholder for icons, assuming react-icons or similar library is used.
// Using text placeholders like [Icon] for now.

const images = [
  'https://images.pexels.com/photos/1632061/pexels-photo-1632061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section className="h-screen text-white flex items-center justify-center p-5 relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">🇸🇮 SLOVENIA WORK & TOURIST VISA</h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-8 animate-fade-in-up">Zero Advance Payment Promise</p>
        <button className="bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold py-4 px-8 rounded-lg text-lg h-14 shadow-lg hover:scale-105 transition-transform duration-300">
          Start Your Slovenia Journey Today - No Advance Required
        </button>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold">4-5 Months Processing</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold">100% Job Guarantee</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold">2+ Years Work Permit</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="bg-slate-200 h-96 rounded-xl shadow-lg">
                        {/* Placeholder for an image gallery component */}
                        <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop" alt="Our Team" className="w-full h-full object-cover rounded-xl"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">About Our Services</h2>
                    <p className="text-slate-600 mb-6">
                        We are a leading visa consultancy firm with a mission to provide transparent, reliable, and efficient visa processing services. Our partnership with European employers ensures guaranteed job placements.
                    </p>
                    <div className="flex space-x-4 mb-6">
                        <span className="bg-[#f59e0b] text-white py-1 px-3 rounded-full text-sm font-bold">Registered</span>
                        <span className="bg-[#f59e0b] text-white py-1 px-3 rounded-full text-sm font-bold">Certified</span>
                        <span className="bg-[#f59e0b] text-white py-1 px-3 rounded-full text-sm font-bold">Partnered</span>
                    </div>
                    <div className="bg-[#e0f2fe] border-l-4 border-[#10b981] text-[#1e3a8a] p-4 rounded-r-lg">
                        <h4 className="font-bold">Our Unique Value</h4>
                        <p>Guaranteed Employment and a Zero Advance Payment model. Your success is our priority.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WorkVisaSection = () => (
    <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-5 text-center">
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12">Work Visa Categories & Opportunities</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="border-2 border-transparent hover:border-[#1B7A3E] p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                    <h4 className="font-semibold text-xl text-[#1e3a8a] mb-2">Construction</h4>
                    <p className="text-slate-600 text-sm">High demand for skilled and unskilled labor.</p>
                </div>
                <div className="border-2 border-transparent hover:border-[#1B7A3E] p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                    <h4 className="font-semibold text-xl text-[#1e3a8a] mb-2">Gardening</h4>
                    <p className="text-slate-600 text-sm">Seasonal and full-time landscaping opportunities.</p>
                </div>
                <div className="border-2 border-transparent hover:border-[#1B7A3E] p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                    <h4 className="font-semibold text-xl text-[#1e3a8a] mb-2">Warehouse</h4>
                    <p className="text-slate-600 text-sm">Roles in logistics and goods management.</p>
                </div>
                <div className="border-2 border-transparent hover:border-[#1B7A3E] p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:scale-105 duration-300">
                    <h4 className="font-semibold text-xl text-[#1e3a8a] mb-2">Food Packaging</h4>
                    <p className="text-slate-600 text-sm">Work in the food industry meeting quality standards.</p>
                </div>
                <div className="border-2 border-transparent hover:border-[#f59e0b] p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all transform hover:scale-105 duration-300 col-span-full sm:col-span-1 lg:col-span-1">
                    <h4 className="font-semibold text-xl text-[#1e3a8a] mb-2">Driving</h4>
                    <p className="text-slate-600 text-sm">Premium category for experienced drivers.</p>
                </div>
            </div>
        </div>
    </section>
);

const InvestmentSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Investment & Payment Structure</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-6">Two-Phase Payment Timeline</h3>
                    <div className="space-y-6">
                        <div className="p-6 bg-[#e0f2fe] rounded-xl border-l-4 border-sky-500">
                            <h4 className="font-bold text-xl text-sky-800">Phase 1: 2 Lakh Taka</h4>
                            <p className="text-sky-700">For embassy processing and all travel arrangements to India.</p>
                        </div>
                        <div className="p-6 bg-[#dcfce7] rounded-xl border-l-4 border-[#10b981]">
                            <h4 className="font-bold text-xl text-green-800">Phase 2: 13 Lakh Taka</h4>
                            <p className="text-green-700">After visa approval, for final arrangements and departure to Slovenia.</p>
                        </div>
                        <div className="p-6 bg-[#ffedd5] rounded-xl border-l-4 border-[#f59e0b]">
                            <h4 className="font-bold text-xl text-amber-800">Special Driving Category: 20 Lakh</h4>
                            <p className="text-amber-700">Premium investment for a guaranteed 2 Lakh Taka monthly salary.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl shadow-inner">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4 text-center">ROI Calculator</h3>
                    <p className="text-center text-slate-500 mb-6">Estimate your payback period and long-term earnings.</p>
                    <div className="bg-white p-6 rounded-lg text-center text-slate-400 h-40 flex items-center justify-center">[Interactive Calculator Widget]</div>
                </div>
            </div>
        </div>
    </section>
);

const ProcessingTimelineSection = () => (
    <section className="py-20 bg-gradient-to-b from-white to-[#e0f2fe]">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-16">Complete Processing Timeline (4-5 Months)</h2>
            <div className="relative">
                <div className="hidden md:block border-l-2 border-slate-300 absolute h-full top-0 left-1/2 -ml-px"></div>
                <div className="space-y-12 md:space-y-0">
                    {/* Timeline items */}
                    <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center">
                        <div className="md:text-right md:pr-12">
                            <div className="bg-[#10b981] text-white font-bold p-2 inline-block rounded-lg mb-2">Week 1-2</div>
                            <h4 className="text-xl font-semibold text-slate-700">Document Collection</h4>
                        </div>
                        <div className="md:pl-12 relative">
                            <div className="hidden md:block absolute w-4 h-4 bg-[#10b981] rounded-full -left-[9px] top-1/2 -translate-y-1/2"></div>
                            <p className="text-slate-600">We collect and verify your passport, photos, and police clearance certificate.</p>
                        </div>
                    </div>
                     <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center mt-12">
                        <div className="md:col-start-2 md:pl-12">
                             <div className="bg-[#f97316] text-white font-bold p-2 inline-block rounded-lg mb-2">Week 3-6</div>
                            <h4 className="text-xl font-semibold text-slate-700">Indian Visa Processing</h4>
                        </div>
                        <div className="md:row-start-1 md:col-start-1 md:text-right md:pr-12 relative">
                            <div className="hidden md:block absolute w-4 h-4 bg-[#f97316] rounded-full -right-[9px] top-1/2 -translate-y-1/2"></div>
                            <p className="text-slate-600">Arranging your visa for travel to the Slovenian embassy in India.</p>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center mt-12">
                        <div className="md:text-right md:pr-12">
                            <div className="bg-sky-500 text-white font-bold p-2 inline-block rounded-lg mb-2">Week 7-8</div>
                            <h4 className="text-xl font-semibold text-slate-700">Embassy Visit & Biometrics</h4>
                        </div>
                        <div className="md:pl-12 relative">
                            <div className="hidden md:block absolute w-4 h-4 bg-sky-500 rounded-full -left-[9px] top-1/2 -translate-y-1/2"></div>
                            <p className="text-slate-600">We provide full support for your trip to India for the embassy appointment.</p>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center mt-12">
                        <div className="md:col-start-2 md:pl-12">
                             <div className="bg-purple-500 text-white font-bold p-2 inline-block rounded-lg mb-2">Week 9-18</div>
                            <h4 className="text-xl font-semibold text-slate-700">Slovenia Visa Processing</h4>
                        </div>
                        <div className="md:row-start-1 md:col-start-1 md:text-right md:pr-12 relative">
                            <div className="hidden md:block absolute w-4 h-4 bg-purple-500 rounded-full -right-[9px] top-1/2 -translate-y-1/2"></div>
                            <p className="text-slate-600">The core processing period for your Slovenian work permit and visa.</p>
                        </div>
                    </div>
                     <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center mt-12">
                        <div className="md:text-right md:pr-12">
                            <div className="bg-[#f59e0b] text-white font-bold p-2 inline-block rounded-lg mb-2">Week 19-20</div>
                            <h4 className="text-xl font-semibold text-slate-700">Final Arrangements</h4>
                        </div>
                        <div className="md:pl-12 relative">
                            <div className="hidden md:block absolute w-4 h-4 bg-[#f59e0b] rounded-full -left-[9px] top-1/2 -translate-y-1/2"></div>
                            <p className="text-slate-600">Booking your flight and preparing for your departure to Slovenia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const EmbassyProcessSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Embassy Process & Indian Travel</h2>
            <div className="bg-slate-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why the Indian Embassy?</h3>
                <p className="text-slate-600 mb-8">Currently, there is no Slovenian embassy in Bangladesh. Therefore, all visa applications must be processed through the Slovenian embassy located in New Delhi, India. We manage the entire process for you, ensuring a hassle-free experience.</p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-bold text-lg text-[#1B7A3E]">Indian Visa</h4>
                        <p className="text-sm text-slate-500">We secure your Indian tourist visa for travel.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-bold text-lg text-[#1B7A3E]">Full Support</h4>
                        <p className="text-sm text-slate-500">Accommodation, transport, and guidance in India.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h4 className="font-bold text-lg text-[#1B7A3E]">Safe Return</h4>
                        <p className="text-sm text-slate-500">We ensure your safe and timely return to Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WorkPermitSection = () => (
    <section className="py-20 bg-gradient-to-b from-[#1e3a8a] to-[#101d42] text-white">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center mb-12">Work Permit & Legal Documentation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-[#f59e0b] mb-2">2-Year Work Permit</h4>
                    <p className="text-slate-300">Initial work permit with possibilities for extension and long-term residency.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-[#f59e0b] mb-2">Legal Rights & Protections</h4>
                    <p className="text-slate-300">Full protection under European employment law, ensuring fair wages and conditions.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-[#f59e0b] mb-2">Flexible Career Path</h4>
                    <p className="text-slate-300">Option to change your work type for a nominal fee (400 Euro) for career growth.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-[#f59e0b] mb-2">Long-Term Residency</h4>
                    <p className="text-slate-300">Clear pathways to extend your stay and work towards permanent residency.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-[#f59e0b] mb-2">Family Reunification</h4>
                    <p className="text-slate-300">Opportunities to bring your family to Slovenia after a certain period.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-[#f59e0b] mb-2">Path to Citizenship</h4>
                    <p className="text-slate-300">Long-term commitment can lead to the possibility of Slovenian citizenship.</p>
                </div>
            </div>
        </div>
    </section>
);

const SalaryBenefitsSection = () => (
    <section className="py-20 bg-[#fffbeb]">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Salary & Living Benefits</h2>
            <div className="text-center mb-12">
                <p className="text-slate-600 text-lg">Guaranteed Monthly Income</p>
                <h3 className="text-6xl font-bold text-[#f59e0b]">160,000 Taka</h3>
                <p className="text-slate-500">(Basic Salary)</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl text-sky-500 mb-4">🏠</div>
                    <h4 className="font-bold text-xl text-slate-800">Free Accommodation</h4>
                    <p className="text-slate-500">Company-provided housing with all necessary facilities.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl text-orange-500 mb-4">🍲</div>
                    <h4 className="font-bold text-xl text-slate-800">Meal Allowances</h4>
                    <p className="text-slate-500">Support for food and daily meals included in your package.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl text-red-500 mb-4">❤️</div>
                    <h4 className="font-bold text-xl text-slate-800">Healthcare Coverage</h4>
                    <p className="text-slate-500">Comprehensive medical support and health insurance.</p>
                </div>
            </div>
        </div>
    </section>
);

const DocumentsSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Required Documents Checklist</h2>
            <div className="space-y-6">
                <div className="flex items-center bg-slate-50 p-6 rounded-lg shadow-sm border-l-4 border-[#10b981]">
                    <div className="text-3xl text-emerald-500 mr-6">✔️</div>
                    <div>
                        <h4 className="font-semibold text-xl text-slate-800">Valid Passport</h4>
                        <p className="text-slate-500">Must have a minimum of 2 years validity remaining.</p>
                    </div>
                </div>
                <div className="flex items-center bg-slate-50 p-6 rounded-lg shadow-sm border-l-4 border-[#10b981]">
                    <div className="text-3xl text-emerald-500 mr-6">✔️</div>
                    <div>
                        <h4 className="font-semibold text-xl text-slate-800">2 Passport-Size Photographs</h4>
                        <p className="text-slate-500">Recent, high-quality photos with a white background.</p>
                    </div>
                </div>
                <div className="flex items-center bg-slate-50 p-6 rounded-lg shadow-sm border-l-4 border-[#10b981]">
                    <div className="text-3xl text-emerald-500 mr-6">✔️</div>
                    <div>
                        <h4 className="font-semibold text-xl text-slate-800">Police Clearance Certificate</h4>
                        <p className="text-slate-500">A recent certificate verifying your clean criminal record.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TouristVisaSection = () => (
    <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Tourist Visa Services</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <div className="bg-slate-300 h-80 rounded-xl shadow-lg bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1586784258239-83b999a8b8a4?q=80&w=2070&auto=format&fit=crop')"}}></div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">Explore Beautiful Slovenia</h3>
                    <p className="text-slate-600 mb-6">We also offer comprehensive tourist visa services for those wishing to explore Slovenia's stunning landscapes, from the Julian Alps to the Adriatic coast. Our process is just as transparent and reliable as our work visa services.</p>
                    <button className="border-2 border-[#1B7A3E] text-[#1B7A3E] font-bold py-3 px-6 rounded-lg hover:bg-[#1B7A3E] hover:text-white transition-colors duration-300">
                        Learn More About Tourist Visas
                    </button>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-20 bg-gradient-to-b from-[#101d42] to-[#0f172a] text-white">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center mb-12">Success Stories & Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-[#f59e0b]/50 text-center transform hover:scale-105 transition-transform duration-300">
                    <img src="https://i.pravatar.cc/100?u=a" alt="Client" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#f59e0b]"/>
                    <h4 className="font-bold text-xl">Rahim Ahmed</h4>
                    <p className="text-[#f59e0b] mb-2">Construction Worker</p>
                    <p className="text-slate-300 text-sm">"They delivered on their promise. No advance payment, and now I am earning well in Slovenia. My family is very happy."</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-[#f59e0b]/50 text-center transform hover:scale-105 transition-transform duration-300">
                    <img src="https://i.pravatar.cc/100?u=b" alt="Client" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#f59e0b]"/>
                    <h4 className="font-bold text-xl">Fatima Khatun</h4>
                    <p className="text-[#f59e0b] mb-2">Warehouse Manager</p>
                    <p className="text-slate-300 text-sm">"The process was smooth and transparent. The team was very supportive during the Indian embassy visit. Highly recommended."</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-[#f59e0b]/50 text-center transform hover:scale-105 transition-transform duration-300">
                    <img src="https://i.pravatar.cc/100?u=c" alt="Client" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#f59e0b]"/>
                    <h4 className="font-bold text-xl">Jamal Uddin</h4>
                    <p className="text-[#f59e0b] mb-2">Professional Driver</p>
                    <p className="text-slate-300 text-sm">"The premium package was worth it. The salary is great, and the working conditions are excellent. Thank you for this opportunity."</p>
                </div>
            </div>
        </div>
    </section>
);

const WhyChooseUsSection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Why Choose Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#1B7A3E]">
                    <h4 className="font-bold text-xl text-[#1B7A3E] mb-2">Zero Advance Payment</h4>
                    <p className="text-slate-600">You pay only after your visa is processed. No financial risk for you.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#1B7A3E]">
                    <h4 className="font-bold text-xl text-[#1B7A3E] mb-2">100% Job Guarantee</h4>
                    <p className="text-slate-600">We have contracts with Slovenian employers, ensuring you get a job.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#1B7A3E]">
                    <h4 className="font-bold text-xl text-[#1B7A3E] mb-2">Transparent Process</h4>
                    <p className="text-slate-600">We provide a clear timeline and keep you updated at every step.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#1B7A3E]">
                    <h4 className="font-bold text-xl text-[#1B7A3E] mb-2">Full Support System</h4>
                    <p className="text-slate-600">From documents to departure and settlement, we are with you.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#1B7A3E]">
                    <h4 className="font-bold text-xl text-[#1B7A3E] mb-2">Legal & Compliant</h4>
                    <p className="text-slate-600">We are a licensed agency adhering to all immigration laws.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#1B7A3E]">
                    <h4 className="font-bold text-xl text-[#1B7A3E] mb-2">24/7 Customer Service</h4>
                    <p className="text-slate-600">Our dedicated team is always available to answer your queries.</p>
                </div>
            </div>
        </div>
    </section>
);

const FaqSection = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-4xl px-5">
                <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="bg-white p-4 rounded-lg shadow-sm group" open>
                        <summary className="font-semibold text-lg text-slate-800 cursor-pointer list-none flex justify-between items-center">
                            Is the 'Zero Advance' promise real?
                            <span className="transform transition-transform duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="text-slate-600 mt-2 text-sm">Yes, absolutely. You do not pay any processing fee until your visa is approved. The only initial cost is for the Indian visa and travel, which is managed separately and transparently.</p>
                    </details>
                    <details className="bg-white p-4 rounded-lg shadow-sm group">
                        <summary className="font-semibold text-lg text-slate-800 cursor-pointer list-none flex justify-between items-center">
                            What if my visa application is rejected?
                            <span className="transform transition-transform duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="text-slate-600 mt-2 text-sm">While we have a very high success rate, in the rare case of a rejection, you are not liable for our main service fee. We also have policies to handle the initial travel costs, which will be discussed during consultation.</p>
                    </details>
                    <details className="bg-white p-4 rounded-lg shadow-sm group">
                        <summary className="font-semibold text-lg text-slate-800 cursor-pointer list-none flex justify-between items-center">
                            Can I bring my family with me?
                            <span className="transform transition-transform duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="text-slate-600 mt-2 text-sm">Family reunification is possible after you have worked in Slovenia for a specified period and meet the legal requirements. We can guide you through this process when the time comes.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

const ApplicationProcessSection = () => (
    <section className="py-20 bg-gradient-to-r from-[#1B7A3E] to-[#f59e0b]">
        <div className="container mx-auto max-w-6xl px-5 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">A Simple 4-Step Application</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">1</div>
                    <h4 className="font-semibold text-xl mb-2">Submit Docs</h4>
                    <p className="text-sm text-slate-200">Provide your passport, photos, and police clearance.</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">2</div>
                    <h4 className="font-semibold text-xl mb-2">Indian Visa</h4>
                    <p className="text-sm text-slate-200">We arrange your travel to the embassy in New Delhi.</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">3</div>
                    <h4 className="font-semibold text-xl mb-2">Embassy Visit</h4>
                    <p className="text-sm text-slate-200">Attend your biometrics appointment with our full support.</p>
                </div>
                <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl font-bold mb-2">4</div>
                    <h4 className="font-semibold text-xl mb-2">Fly to Slovenia</h4>
                    <p className="text-sm text-slate-200">Receive your visa and prepare for your new job.</p>
                </div>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section className="py-20 bg-[#1e3a8a] text-white">
        <div className="container mx-auto max-w-6xl px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Contact Us for a Free Consultation</h2>
                    <p className="text-slate-300 mb-8">Get a free initial consultation (valued at 5,000 Taka) to assess your profile and discuss your opportunities in Slovenia. Our experts are ready to help you.</p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#10b981] hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center">
                            <span className="mr-2">💬</span> WhatsApp Chat
                        </button>
                        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center">
                           <span className="mr-2">📞</span> Call Us
                        </button>
                    </div>
                </div>
                <div className="bg-white text-slate-800 p-8 rounded-xl shadow-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-center">Book Your Free Session</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B7A3E] focus:outline-none" />
                        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B7A3E] focus:outline-none" />
                        <input type="tel" placeholder="Your Phone Number" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B7A3E] focus:outline-none" />
                        <button type="submit" className="w-full bg-[#f59e0b] text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

const LegalSection = () => (
    <section className="py-20 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Legal & Compliance Information</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl mb-2">📜</div>
                    <h4 className="font-bold text-lg text-slate-800">Licensed Agency</h4>
                    <p className="text-sm text-slate-500">We are a government-registered and licensed visa consultancy.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl mb-2">🤝</div>
                    <h4 className="font-bold text-lg text-slate-800">EU Partnerships</h4>
                    <p className="text-sm text-slate-500">Legitimate, documented partnerships with Slovenian employers.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl mb-2">🛡️</div>
                    <h4 className="font-bold text-lg text-slate-800">Data Protection</h4>
                    <p className="text-sm text-slate-500">Your personal information is handled with the utmost security and privacy.</p>
                </div>
            </div>
        </div>
    </section>
);

const AdditionalServicesSection = () => (
    <section className="py-20 bg-[#e0f2fe]">
        <div className="container mx-auto max-w-6xl px-5">
            <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-12">Additional Services & Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-sky-800 mb-2">Pre-Departure Training</h4>
                    <p className="text-slate-600">Basic Slovenian language and cultural orientation to help you adapt.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-sky-800 mb-2">Airport Assistance</h4>
                    <p className="text-slate-600">Support during departure and arrival to ensure a smooth journey.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="font-bold text-xl text-sky-800 mb-2">Settlement Support</h4>
                    <p className="text-slate-600">Help with initial arrangements during your first weeks in Slovenia.</p>
                </div>
            </div>
        </div>
    </section>
);


const SloveniaPage = () => {
  return (
    <div className="bg-white font-sans">
      <HeroSection />
      <AboutSection />
      <WorkVisaSection />
      <InvestmentSection />
      <ProcessingTimelineSection />
      <EmbassyProcessSection />
      <WorkPermitSection />
      <SalaryBenefitsSection />
      <DocumentsSection />
      <TouristVisaSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <FaqSection />
      <ApplicationProcessSection />
      <ContactSection />
      <LegalSection />
      <AdditionalServicesSection />
    </div>
  );
};

export default SloveniaPage;