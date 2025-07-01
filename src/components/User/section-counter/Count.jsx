import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Counter komponenti düzgün şəkildə bağlandı
export const Counter = ({ start = 0, end = 100, duration = 2 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      setCount(Math.floor(start + progress * (end - start)));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [start, end, duration]);

  // Counter componentini return etmək lazımdır
  return (
    <motion.div 
      className="text-4xl font-bold text-white"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString()}
    </motion.div>
  );
};

// HotelStatsSection komponenti
const HotelStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      end: 50000,
      label: "Happy Guests",
      duration: 3
    },
    {
      end: 3000,
      label: "Rooms",
      duration: 2.5
    },
    {
      end: 1000,
      label: "Staffs",
      duration: 2
    },
    {
      end: 100,
      label: "Destination",
      duration: 1.5
    }
  ];

  return (
    <section 
      id="stats-section"
      className="stats-section"
      style={{
        background: 'linear-gradient(135deg, #b8860b 0%, #8b7355 50%, #a0844a 100%)',
        padding: '100px 20px',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 30px 30px',
          opacity: 0.3
        }}
      />
      
      <div className="container" style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '60px',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: 'bold', 
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontFamily: 'serif'
              }}>
                {isVisible ? (
                  <Counter start={0} end={stat.end} duration={stat.duration} />
                ) : (
                  <span>0</span>
                )}
              </div>
              
              <motion.div 
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
              
              {/* Decorative line under each stat */}
              <motion.div
                style={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: '#ffffff',
                  borderRadius: '1px',
                  opacity: 0.7
                }}
                initial={{ width: 0 }}
                animate={{ width: '40px' }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="particles" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HotelStatsSection;