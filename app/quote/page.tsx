"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Package, MapPin, FileText, Send } from "lucide-react";

const steps = [
  { id: 1, title: "Shipment Type", icon: <Package className="w-5 h-5" /> },
  { id: 2, title: "Route Details", icon: <MapPin className="w-5 h-5" /> },
  { id: 3, title: "Cargo Details", icon: <FileText className="w-5 h-5" /> },
  { id: 4, title: "Contact Info", icon: <Send className="w-5 h-5" /> },
];

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    shipmentType: "",
    serviceType: "",
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
    dimensions: "",
    value: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Quote request submitted successfully! We'll contact you within 24 hours.");
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-navy-700 to-primary-800 text-white py-12">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Request a Quote
            </h1>
            <p className="text-lg text-slate-100">
              Get a customized quote for your logistics needs in just a few steps
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="site-container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step.id < currentStep
                        ? "bg-green-500 text-white"
                        : step.id === currentStep
                        ? "bg-primary-600 text-white ring-4 ring-primary-200"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {step.id < currentStep ? <Check className="w-6 h-6" /> : step.icon}
                  </div>
                  <div
                    className={`mt-2 text-xs md:text-sm font-semibold text-center ${
                      step.id === currentStep
                        ? "text-primary-600"
                        : step.id < currentStep
                        ? "text-green-600"
                        : "text-slate-500"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                      step.id < currentStep ? "bg-green-500" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="card p-6 md:p-8 mb-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Shipment Type */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                      Select Shipment Type
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {["Air Freight", "Sea Freight", "Road Transport", "Rail Freight"].map(
                        (type) => (
                          <label
                            key={type}
                            className={`card p-6 cursor-pointer hover:border-primary-600 transition-all ${
                              formData.shipmentType === type
                                ? "border-2 border-primary-600 bg-primary-50"
                                : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name="shipmentType"
                              value={type}
                              checked={formData.shipmentType === type}
                              onChange={(e) => updateFormData("shipmentType", e.target.value)}
                              className="sr-only"
                            />
                            <div className="font-semibold text-slate-900">{type}</div>
                          </label>
                        )
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Service Type
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => updateFormData("serviceType", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      >
                        <option value="">Select service type</option>
                        <option value="express">Express</option>
                        <option value="standard">Standard</option>
                        <option value="economy">Economy</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Route Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                      Route Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Origin <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.origin}
                          onChange={(e) => updateFormData("origin", e.target.value)}
                          placeholder="City, Country"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Destination <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) => updateFormData("destination", e.target.value)}
                          placeholder="City, Country"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Cargo Details */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                      Cargo Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Cargo Type
                        </label>
                        <select
                          value={formData.cargoType}
                          onChange={(e) => updateFormData("cargoType", e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        >
                          <option value="">Select cargo type</option>
                          <option value="general">General Cargo</option>
                          <option value="perishable">Perishable Goods</option>
                          <option value="hazardous">Hazardous Materials</option>
                          <option value="oversized">Oversized/Heavy</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-2">
                            Weight (kg)
                          </label>
                          <input
                            type="number"
                            value={formData.weight}
                            onChange={(e) => updateFormData("weight", e.target.value)}
                            placeholder="e.g., 1000"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-2">
                            Dimensions (LxWxH cm)
                          </label>
                          <input
                            type="text"
                            value={formData.dimensions}
                            onChange={(e) => updateFormData("dimensions", e.target.value)}
                            placeholder="e.g., 100x50x50"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Cargo Value (USD)
                        </label>
                        <input
                          type="number"
                          value={formData.value}
                          onChange={(e) => updateFormData("value", e.target.value)}
                          placeholder="e.g., 10000"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Description
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => updateFormData("description", e.target.value)}
                          placeholder="Describe your cargo..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Info */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            placeholder="john@example.com"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            placeholder="+60 12-345 6789"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateFormData("company", e.target.value)}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="px-6 py-3 rounded-lg font-semibold text-slate-700 bg-white border-2 border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Submit Quote Request
                  <Send className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
