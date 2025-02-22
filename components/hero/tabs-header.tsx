"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tab } from "@/types/hero-types";

interface TabsHeaderProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabsHeader: React.FC<TabsHeaderProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={`group relative flex items-center gap-3 rounded-2xl px-3 py-2   text-sm font-medium transition-all duration-500 text-primary`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{
                  scale: activeTab === tab.value ? 1.1 : 1,
                  opacity: activeTab === tab.value ? 1 : 0.7,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                {tab.icon}
              </motion.div>

              <span className="relative z-10 text-xs tracking-wide ">
                {tab.label}
              </span>

              {activeTab === tab.value && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl bg-muted"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <div className="absolute inset-0 rounded-2xl bg-white bg-opacity-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsHeader;
