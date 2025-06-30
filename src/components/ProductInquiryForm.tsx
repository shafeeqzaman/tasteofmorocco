// src/components/ProductInquiryForm.tsx
import React from 'react';

interface ProductInquiryFormProps {
  productName?: string;
}

export default function ProductInquiryForm({ productName }: ProductInquiryFormProps) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-xl p-6 border-t-4 border-amber-400 w-full mt-2">
      <form action="https://formspree.io/f/meokkgeb" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="block w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none"
          required
          style={{ fontWeight: 500 }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="block w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none"
          required
          style={{ fontWeight: 500 }}
        />
        <textarea
          name="message"
          placeholder={`Order inquiry for: ${productName || 'Product'}`}
          rows={3}
          className="block w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 outline-none resize-none"
          required
          style={{ fontWeight: 500 }}
        />
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-3 rounded-full hover:bg-amber-500 hover:text-orange-900 shadow transition"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
