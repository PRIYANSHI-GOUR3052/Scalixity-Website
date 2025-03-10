"use client";

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-20 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our AI Chatbot Development services provide cutting-edge solutions to enhance user experiences, streamline operations, and boost customer satisfaction.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
            <h3 className="text-xl font-bold text-black mb-4">Custom AI Chatbots</h3>
            <p className="text-gray-800">
              We build tailored chatbots that align with your business needs and objectives, ensuring seamless customer interactions.
            </p>
          </div>
          <div className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
            <h3 className="text-xl font-bold text-black mb-4">Conversational AI</h3>
            <p className="text-gray-800">
              Our AI-powered bots provide human-like conversations, improving engagement and enhancing user satisfaction.
            </p>
          </div>
          <div className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
            <h3 className="text-xl font-bold text-black mb-4">Omnichannel Support</h3>
            <p className="text-gray-800">
              Deploy chatbots across multiple platforms, including websites, mobile apps, and social media channels for unified communication.
            </p>
          </div>
          <div className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
            <h3 className="text-xl font-bold text-black mb-4">AI-Powered Automation</h3>
            <p className="text-gray-800">
              Automate customer support, sales, and lead generation with intelligent chatbot solutions that reduce operational costs.
            </p>
          </div>
          <div className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
            <h3 className="text-xl font-bold text-black mb-4">Multilingual Capabilities</h3>
            <p className="text-gray-800">
              Our chatbots support multiple languages, enabling businesses to cater to a diverse customer base worldwide.
            </p>
          </div>
          <div className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
            <h3 className="text-xl font-bold text-black mb-4">Seamless Integrations</h3>
            <p className="text-gray-800">
              Integrate AI chatbots with your existing CRM, ERP, and other business tools to enhance operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
