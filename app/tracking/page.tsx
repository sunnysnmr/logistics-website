"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, Truck, Ship, Plane, CheckCircle, Clock, MapPin } from "lucide-react";

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [shipmentData, setShipmentData] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsTracking(true);
    
    // Simulate API call
    setTimeout(() => {
      setShipmentData({
        trackingNumber: trackingNumber,
        status: "In Transit",
        origin: "Kuala Lumpur, Malaysia",
        destination: "Singapore",
        estimatedDelivery: "Dec 5, 2025",
        currentLocation: "Port Klang",
        shipmentType: "Sea Freight",
        progress: 65,
        timeline: [
          { status: "Order Placed", date: "Nov 28, 2025", completed: true },
          { status: "Picked Up", date: "Nov 29, 2025", completed: true },
          { status: "In Transit", date: "Nov 30, 2025", completed: true, current: true },
          { status: "Customs Clearance", date: "Dec 4, 2025", completed: false },
          { status: "Out for Delivery", date: "Dec 5, 2025", completed: false },
          { status: "Delivered", date: "Dec 5, 2025", completed: false },
        ],
      });
      setIsTracking(false);
    }, 1500);
  };

  const getTransportIcon = (type: string) => {
    switch (type) {
      case "Sea Freight":
        return <Ship className="w-6 h-6" />;
      case "Air Freight":
        return <Plane className="w-6 h-6" />;
      default:
        return <Truck className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-navy-700 to-primary-800 text-white py-20">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Track Your Shipment
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8">
              Enter your tracking number below to get real-time updates on your shipment
            </p>

            {/* Search Form */}
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., OGL123456789)"
                  className="w-full px-6 py-4 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
              <button
                type="submit"
                disabled={isTracking}
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                {isTracking ? "Tracking..." : "Track"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {shipmentData && (
        <section className="site-container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Shipment Summary Card */}
            <div className="card p-6 md:p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Tracking Number: {shipmentData.trackingNumber}
                  </h2>
                  <div className="flex items-center gap-2 text-primary-600">
                    {getTransportIcon(shipmentData.shipmentType)}
                    <span className="font-semibold">{shipmentData.shipmentType}</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">
                  {shipmentData.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-sm text-slate-600 mb-1">Origin</div>
                  <div className="font-semibold text-slate-900">{shipmentData.origin}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Destination</div>
                  <div className="font-semibold text-slate-900">{shipmentData.destination}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Estimated Delivery</div>
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary-600" />
                    {shipmentData.estimatedDelivery}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">Shipment Progress</span>
                  <span className="text-sm font-semibold text-primary-600">{shipmentData.progress}%</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${shipmentData.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
                  />
                </div>
              </div>

              {/* Current Location */}
              <div className="flex items-center gap-2 p-4 bg-primary-50 rounded-lg">
                <MapPin className="w-5 h-5 text-primary-600" />
                <div>
                  <span className="text-sm text-slate-600">Current Location: </span>
                  <span className="font-semibold text-slate-900">{shipmentData.currentLocation}</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="card p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Shipment Timeline</h3>
              <div className="space-y-6">
                {shipmentData.timeline.map((event: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          event.completed
                            ? "bg-green-500 text-white"
                            : "bg-slate-200 text-slate-400"
                        } ${event.current ? "ring-4 ring-primary-200" : ""}`}
                      >
                        {event.completed ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Clock className="w-5 h-5" />
                        )}
                      </div>
                      {index < shipmentData.timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            event.completed ? "bg-green-500" : "bg-slate-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`font-semibold ${
                            event.current
                              ? "text-primary-600"
                              : event.completed
                              ? "text-slate-900"
                              : "text-slate-500"
                          }`}
                        >
                          {event.status}
                        </h4>
                        <span className="text-sm text-slate-600">{event.date}</span>
                      </div>
                      {event.current && (
                        <p className="text-sm text-slate-600 mt-1">
                          Your shipment is currently at this stage
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card p-6 md:p-8 mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Shipment Route</h3>
              <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive map integration</p>
                  <p className="text-sm">(Google Maps / Mapbox)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Help Section */}
      {!shipmentData && (
        <section className="site-container py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Need Help with Tracking?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <Package className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Find Your Number</h3>
                <p className="text-sm text-slate-600">
                  Check your confirmation email for the tracking number
                </p>
              </div>
              <div className="card p-6 text-center">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Processing Time</h3>
                <p className="text-sm text-slate-600">
                  Tracking updates may take 24-48 hours after shipping
                </p>
              </div>
              <div className="card p-6 text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">Contact Support</h3>
                <p className="text-sm text-slate-600">
                  Reach out to our team for tracking assistance
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
