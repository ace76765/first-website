"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Server, Shield, ArrowUpRight, Cpu } from "lucide-react";

export default function MobileDashboard() {
  const [activeTab, setActiveTab] = useState<"network" | "servers" | "security">("network");
  const [uptime, setUptime] = useState(99.98);
  const [liveData, setLiveData] = useState<number[]>([30, 45, 35, 60, 40, 70, 55]);
  const [logs, setLogs] = useState<string[]>([
    "Cloud storage sync complete",
    "Firewall rules updated successfully",
    "Backup node Alaska-04 active"
  ]);

  // Live simulation updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update uptime slightly
      setUptime(prev => {
        const change = (Math.random() - 0.5) * 0.01;
        return Math.min(100, Math.max(99.9, +(prev + change).toFixed(2)));
      });

      // Shift line chart data
      setLiveData(prev => {
        const next = [...prev.slice(1)];
        next.push(Math.floor(Math.random() * 50) + 25);
        return next;
      });

      // Push new log occasionally
      const newLogsList = [
        "Network latency optimal (12ms)",
        "Database query optimization completed",
        "API Gateway traffic balanced",
        "Encrypted backup verified",
        "VoIP session quality verified"
      ];
      setLogs(prev => {
        const randomLog = newLogsList[Math.floor(Math.random() * newLogsList.length)];
        return [randomLog, prev[0], prev[1]];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // SVG Chart path calculation
  const getSvgPath = () => {
    const width = 280;
    const height = 80;
    const step = width / (liveData.length - 1);
    return liveData
      .map((val, idx) => {
        const x = idx * step;
        const y = height - (val / 100) * height;
        return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-sm mx-auto mt-10 p-5 rounded-[2rem] bg-white/40 border border-white/50 shadow-[0_20px_50px_rgba(31,38,135,0.08)] backdrop-blur-xl relative overflow-hidden pointer-events-auto"
    >
      {/* Decorative background glows */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-400/20 blur-xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-indigo-400/20 blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-200/30">
            <Cpu className="w-4 h-4 text-blue-600 animate-pulse" />
          </div>
          <div>
            <span className="block font-black text-xs text-blue-950 uppercase tracking-widest leading-none">Console</span>
            <span className="text-[10px] text-blue-600/80 font-bold">ADS-Node v1.0.4</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Dynamic Tab Selector */}
      <div className="flex bg-slate-900/5 p-1 rounded-2xl mb-4 relative z-10 border border-slate-900/5">
        {(["network", "servers", "security"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all relative ${
              activeTab === tab ? "text-blue-900" : "text-blue-950/40 hover:text-blue-900"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 bg-white shadow-sm border border-blue-100/50 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Main Stats Display */}
      <div className="min-h-[140px] flex flex-col justify-between relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "network" && (
            <motion.div
              key="network"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-950/50">Transit Latency</span>
                <span className="text-xs font-black text-blue-600 flex items-center gap-0.5">
                  12.4 ms <Activity className="w-3.5 h-3.5 text-blue-500" />
                </span>
              </div>
              {/* Animated Live Chart */}
              <div className="w-full bg-slate-900/5 rounded-2xl p-2.5 border border-slate-900/5 overflow-hidden">
                <svg className="w-full h-20 overflow-visible" viewBox="0 0 280 80">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="280" y2="20" stroke="rgba(30,58,138,0.04)" strokeWidth="1" />
                  <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(30,58,138,0.04)" strokeWidth="1" />
                  <line x1="0" y1="60" x2="280" y2="60" stroke="rgba(30,58,138,0.04)" strokeWidth="1" />
                  
                  {/* Glowing Path */}
                  <motion.path
                    d={getSvgPath()}
                    fill="none"
                    stroke="url(#chartGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ d: getSvgPath() }}
                    transition={{ type: "tween", duration: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          )}

          {activeTab === "servers" && (
            <motion.div
              key="servers"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full space-y-3"
            >
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/5 border border-slate-900/5">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-blue-950/80">Primary Node Uptime</span>
                </div>
                <span className="text-xs font-black text-blue-950">{uptime}%</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/5 border border-slate-900/5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-bold text-blue-950/80">Memory Utilization</span>
                </div>
                <span className="text-xs font-black text-blue-950">42.8%</span>
              </div>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div
              key="security"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full space-y-3"
            >
              <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-950/80">TLS encryption status</span>
                </div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wide">Secure</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-blue-950/80">Intrusion Prevention</span>
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-wide">Active</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Console log ticker */}
      <div className="mt-4 border-t border-slate-900/5 pt-4">
        <span className="block text-[9px] font-black uppercase text-blue-950/30 tracking-widest mb-2">Live Activity logs</span>
        <div className="space-y-1.5 min-h-[54px]">
          {logs.map((log, idx) => (
            <motion.div 
              key={log + idx}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1.5 text-[10px] text-blue-950/70 font-semibold"
            >
              <span className="w-1 h-1 rounded-full bg-blue-500/40 shrink-0" />
              <span className="truncate">{log}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
