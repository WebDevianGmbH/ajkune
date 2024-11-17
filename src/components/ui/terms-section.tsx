"use client";

import { motion } from "framer-motion";

export function TermsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Ihr AGB-Inhalt hier */}
        </motion.div>
      </div>
    </section>
  );
} 