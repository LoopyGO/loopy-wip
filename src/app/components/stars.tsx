'use client'
import { motion } from 'framer-motion'

export function Stars() {
  return (
    <div className="stars">
      <motion.div
        className="gradient-stars"
        animate={{ scale: [1, 3] }}
        transition={{
          repeat: Infinity,
          originX: 1,
          originY: 0,
          duration: 10,
          repeatType: 'mirror',
        }}
      />
    </div>
  )
}
