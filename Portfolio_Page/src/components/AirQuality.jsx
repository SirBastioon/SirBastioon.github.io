import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AirQuality() {
  const [airQuality, setAirQuality] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = '2a6db2f61e0e750e577313cc1e13af2529042d6c'; // Ersetze 'DEIN_API_SCHLÜSSEL' durch deinen tatsächlichen API-Schlüssel
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    fetch(`https://api.waqi.info/feed/bern/?token=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          setAirQuality(data.data);
        } else {
          setError('Fehler beim Abrufen der Luftqualitätsdaten');
        }
      })
      .catch(error => setError('Fehler beim Abrufen der Luftqualitätsdaten'));
  }, [apiKey]);

  return (
    <section 
      id="air-quality" 
      className="min-h-screen bg-gray-50 py-20 px-6 lg:px-16 flex flex-col justify-center items-center"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8">Aktuelle Luftqualität in Bern</h2>
      {error && <p className="text-red-500">{error}</p>}
      {airQuality ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">Standort</p>
            <p className="text-gray-700">{airQuality.city.name}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">AQI</p>
            <p className="text-gray-700">{airQuality.aqi}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">PM2.5</p>
            <p className="text-gray-700">{airQuality.iaqi.pm25?.v}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">PM10</p>
            <p className="text-gray-700">{airQuality.iaqi.pm10?.v}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">O3</p>
            <p className="text-gray-700">{airQuality.iaqi.o3?.v}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">NO2</p>
            <p className="text-gray-700">{airQuality.iaqi.no2?.v}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">SO2</p>
            <p className="text-gray-700">{airQuality.iaqi.so2?.v}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-xl font-semibold">CO</p>
            <p className="text-gray-700">{airQuality.iaqi.co?.v}</p>
          </div>
        </motion.div>
      ) : (
        !error && <p>Lade Luftqualitätsdaten...</p>
      )}
    </section>
  );
}

export default AirQuality;
