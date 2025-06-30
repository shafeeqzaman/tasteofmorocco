'use client';

import Sidebar from '@/components/Sidebar';
import ProductInquiryForm from '@/components/ProductInquiryForm';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 ml-0">
        <div className="max-w-3xl mx-auto py-12 px-4 pt-24 sm:pt-12 flex flex-col gap-8">
          <h1 className="text-4xl font-extrabold text-orange-900 mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-center text-gray-700 mb-6">
            Have a custom order? Questions about our products? Reach out and we’ll get back to you shortly.
          </p>
            <ProductInquiryForm />
        </div>
      </main>
    </div>
  );
}
