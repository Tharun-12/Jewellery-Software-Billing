import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  dashboardSidebar, dashboardStats, salesChartData,
  stockChartData, topSellingItems, recentTransactions,
} from '@/data/content';

export default function DashboardPreview() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <section id="dashboard" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Showcase"
          title="A Complete Dashboard at Your Fingertips"
          subtitle="Navigate every module of your jewellery business from a single, intuitive interface — with real-time data and actionable insights."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row min-h-[560px]">
            {/* Sidebar */}
            <aside className="lg:w-56 bg-navy-gradient text-white p-3 lg:py-4 lg:px-3 flex-shrink-0">
              <div className="flex items-center gap-2 px-2 py-2 mb-3 lg:mb-4">
                <div className="w-7 h-7 rounded-lg bg-gold-gradient flex items-center justify-center">
                  <span className="text-navy font-heading font-extrabold text-xs">iQ</span>
                </div>
                <span className="font-heading font-bold text-sm hidden lg:block">iiQBets ERP</span>
              </div>
              {/* Desktop sidebar */}
              <nav className="hidden lg:flex flex-col gap-0.5">
                {dashboardSidebar.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                      activeItem === item.label
                        ? 'bg-white/10 text-gold'
                        : 'text-navy-100 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </button>
                ))}
              </nav>
              {/* Mobile scrollable sidebar */}
              <nav className="lg:hidden flex gap-1 overflow-x-auto scrollbar-hide pb-1">
                {dashboardSidebar.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                      activeItem === item.label
                        ? 'bg-white/10 text-gold'
                        : 'text-navy-100 hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-3.5 h-3.5 shrink-0" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 p-4 lg:p-6 bg-light">
              {/* Page header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-heading font-bold text-navy">{activeItem}</h3>
                  <p className="text-sm text-gray-500">Welcome back, here's your business overview</p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-navy-gradient flex items-center justify-center text-white text-xs font-bold">
                    JD
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {dashboardStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="bg-white rounded-xl p-3 lg:p-4 shadow-sm border border-gray-50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-4 h-4 text-navy-400" />
                      <span className={`text-[10px] font-bold ${stat.positive ? 'text-green-600' : 'text-red-500'}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-lg lg:text-xl font-heading font-extrabold text-navy">{stat.value}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                {/* Sales area chart */}
                <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow-sm border border-gray-50">
                  <h4 className="text-sm font-heading font-bold text-navy mb-3">Sales Overview</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={salesChartData}>
                      <defs>
                        <linearGradient id="dashSalesGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0B1F4B" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#0B1F4B" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                      <Tooltip
                        contentStyle={{ borderRadius: 12, border: '1px solid #E5E7EB', fontSize: 12 }}
                        formatter={(v) => [`₹${Number(v).toLocaleString()}`, 'Sales']}
                      />
                      <Area type="monotone" dataKey="sales" stroke="#0B1F4B" strokeWidth={2} fill="url(#dashSalesGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Stock donut */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-50">
                  <h4 className="text-sm font-heading font-bold text-navy mb-3">Stock Summary</h4>
                  <ResponsiveContainer width="100%" height={160}>
                    <PieChart>
                      <Pie
                        data={stockChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={65}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {stockChartData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #E5E7EB', fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-1 mt-2">
                    {stockChartData.map((s) => (
                      <span key={s.name} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
                        {s.name} ({s.value}%)
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Top selling items bar */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-50">
                  <h4 className="text-sm font-heading font-bold text-navy mb-3">Top Selling Items</h4>
                  <ResponsiveContainer width="100%" height={160}>
                    <BarChart data={topSellingItems} layout="vertical">
                      <XAxis type="number" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} />
                      <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#6B7280' }} axisLine={false} tickLine={false} width={80} />
                      <Tooltip
                        contentStyle={{ borderRadius: 12, border: '1px solid #E5E7EB', fontSize: 12 }}
                        formatter={(v) => [`${v} sold`, 'Units']}
                      />
                      <Bar dataKey="sold" fill="#F4B400" radius={[0, 6, 6, 0]} barSize={16} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Recent transactions */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-50">
                  <h4 className="text-sm font-heading font-bold text-navy mb-3">Recent Transactions</h4>
                  <div className="space-y-2">
                    {recentTransactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-light flex items-center justify-center text-[10px] font-bold text-navy">
                            {tx.customer.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-navy">{tx.customer}</p>
                            <p className="text-[10px] text-gray-400">{tx.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-navy">{tx.amount}</p>
                          <span className={`text-[10px] font-semibold ${tx.status === 'Paid' ? 'text-green-600' : 'text-orange-500'}`}>
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
