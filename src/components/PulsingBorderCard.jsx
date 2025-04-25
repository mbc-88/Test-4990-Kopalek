import { motion } from 'framer-motion';

export default function PulsingBorderCard() {
  const text = "There is cautious optimism that the language can be preserved and revitalized especially if efforts focus on youth engagement and daily life usage.";

  return (
    <motion.div
      className="p-[6px] rounded-xl bg-gradient-to-r from-maroon via-pink-200 to-salmon"
      style={{
        backgroundSize: '300% 300%',
        animation: 'borderMotion 5s linear infinite',
      }}
    >
      <div className="bg-offwhite rounded-xl p-0 text-center text-3xl sm:text-6xl text-maroon">
        {text}
      </div>
      
      {/* Inline keyframes */}
      <style>{`
        @keyframes borderMotion {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}
