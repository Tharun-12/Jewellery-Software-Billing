// import { motion } from 'framer-motion';
// import {
//   AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell,
//   XAxis, YAxis, Tooltip,
// } from 'recharts';
// import { ArrowRight, Sparkles, TrendingUp, Diamond, ShoppingBag } from 'lucide-react';
// import Button from '@/components/ui/Button';
// import {
//   heroStats, salesChartData, stockChartData,
//   topSellingItems, recentTransactions, phoneAppCategories,
// } from '@/data/content';

// export default function Hero() {
//   const scrollToFeatures = () => {
//     document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
//   };
//   const scrollToContact = () => {
//     document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-light diamond-pattern">
//       {/* Background accents */}
//       <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left content */}
//         <div>
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="inline-flex items-center gap-2 bg-navy text-gold px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wide"
//           >
//             <Sparkles className="w-4 h-4" />
//             Manage Your Business. Streamline Operations. Grow With Confidence.
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-navy leading-tight text-balance"
//           >
//             Jewellery Business{' '}
//             <span className="bg-gold-gradient bg-clip-text text-transparent">Management Software</span>
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-4 text-xl md:text-2xl font-heading font-bold text-navy-600"
//           >
//             One Integrated Solution. Complete Business Control.
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-4 text-base md:text-lg text-gray-600 max-w-xl"
//           >
//             Jewellery ERP + Order Management System + Retailers Application for Smarter Operations and Happy Customers.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-8 flex flex-wrap gap-4"
//           >
//             <Button size="lg" onClick={scrollToContact}>
//               Request a Demo <ArrowRight className="w-5 h-5" />
//             </Button>
//             <Button variant="outline" size="lg" onClick={scrollToFeatures}>
//               View Features
//             </Button>
//           </motion.div>
//         </div>

//         {/* Right — laptop + phone mockups */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="relative flex justify-center items-center min-h-[500px]"
//         >
//           {/* Laptop mockup */}
//           <div className="relative w-full max-w-xl">
//             <div className="bg-navy-gradient rounded-t-2xl p-1.5 shadow-2xl">
//               <div className="bg-white rounded-xl overflow-hidden">
//                 {/* Browser bar */}
//                 <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
//                   <div className="ml-3 flex-1 h-5 bg-white rounded text-[9px] text-gray-400 flex items-center px-2 border border-gray-100">
//                     app.iiqbets.com/dashboard
//                   </div>
//                 </div>

//                 {/* Dashboard content */}
//                 <div className="p-3 bg-light max-h-[420px] overflow-hidden">
//                   {/* Stat cards */}
//                   <div className="grid grid-cols-4 gap-2 mb-2">
//                     {heroStats.map((stat) => (
//                       <div key={stat.label} className="bg-white rounded-lg p-2 shadow-sm">
//                         <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
//                         <p className="text-[10px] text-gray-500 mt-1 leading-tight">{stat.label}</p>
//                         <p className="text-xs font-bold text-navy">{stat.value}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Charts row */}
//                   <div className="grid grid-cols-3 gap-2 mb-2">
//                     {/* Sales overview */}
//                     <div className="col-span-2 bg-white rounded-lg p-2.5 shadow-sm">
//                       <p className="text-[10px] font-bold text-navy mb-1">Sales Overview</p>
//                       <ResponsiveContainer width="100%" height={100}>
//                         <AreaChart data={salesChartData}>
//                           <defs>
//                             <linearGradient id="heroSalesGrad" x1="0" y1="0" x2="0" y2="1">
//                               <stop offset="0%" stopColor="#D62828" stopOpacity={0.3} />
//                               <stop offset="100%" stopColor="#D62828" stopOpacity={0} />
//                             </linearGradient>
//                           </defs>
//                           <Area
//                             type="monotone"
//                             dataKey="sales"
//                             stroke="#D62828"
//                             strokeWidth={1.5}
//                             fill="url(#heroSalesGrad)"
//                           />
//                           <XAxis dataKey="name" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
//                           <YAxis hide />
//                           <Tooltip
//                             contentStyle={{ fontSize: 10, borderRadius: 8, border: 'none', padding: '4px 8px' }}
//                             formatter={(v) => [`₹${Number(v).toLocaleString()}`, 'Sales']}
//                           />
//                         </AreaChart>
//                       </ResponsiveContainer>
//                     </div>

//                     {/* Donut chart */}
//                     <div className="bg-white rounded-lg p-2.5 shadow-sm">
//                       <p className="text-[10px] font-bold text-navy mb-1">Stock</p>
//                       <ResponsiveContainer width="100%" height={100}>
//                         <PieChart>
//                           <Pie
//                             data={stockChartData}
//                             cx="50%"
//                             cy="50%"
//                             innerRadius={22}
//                             outerRadius={38}
//                             paddingAngle={2}
//                             dataKey="value"
//                           >
//                             {stockChartData.map((entry) => (
//                               <Cell key={entry.name} fill={entry.color} />
//                             ))}
//                           </Pie>
//                           <Tooltip
//                             contentStyle={{ fontSize: 10, borderRadius: 8, border: 'none', padding: '4px 8px' }}
//                           />
//                         </PieChart>
//                       </ResponsiveContainer>
//                       <div className="flex flex-wrap gap-1 mt-0.5">
//                         {stockChartData.map((s) => (
//                           <span key={s.name} className="flex items-center gap-0.5 text-[7px] text-gray-500">
//                             <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
//                             {s.name}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Bottom row — top selling + transactions */}
//                   <div className="grid grid-cols-2 gap-2">
//                     <div className="bg-white rounded-lg p-2.5 shadow-sm">
//                       <p className="text-[10px] font-bold text-navy mb-1.5">Top Selling</p>
//                       {topSellingItems.slice(0, 3).map((item) => (
//                         <div key={item.name} className="flex justify-between text-[9px] py-0.5 border-b border-gray-50 last:border-0">
//                           <span className="text-gray-600 truncate pr-1">{item.name}</span>
//                           <span className="text-navy font-semibold">{item.sold}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="bg-white rounded-lg p-2.5 shadow-sm">
//                       <p className="text-[10px] font-bold text-navy mb-1.5">Transactions</p>
//                       {recentTransactions.slice(0, 3).map((tx) => (
//                         <div key={tx.id} className="flex justify-between text-[9px] py-0.5 border-b border-gray-50 last:border-0">
//                           <span className="text-gray-600 truncate pr-1">{tx.customer}</span>
//                           <span className={tx.status === 'Paid' ? 'text-green-600 font-semibold' : 'text-orange-500 font-semibold'}>
//                             {tx.amount}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Laptop base */}
//             <div className="h-2 bg-gray-200 rounded-b-xl mx-4 shadow-md" />
//             <div className="h-1.5 bg-gray-300 rounded-b-lg mx-12" />
//           </div>

//           {/* Phone mockup — overlapping */}
//           <motion.div
//             initial={{ opacity: 0, x: 30, y: 20 }}
//             animate={{ opacity: 1, x: 0, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="absolute -bottom-4 -right-2 lg:right-0 w-36 z-10"
//           >
//             <div className="bg-navy-gradient rounded-[1.8rem] p-1.5 shadow-2xl">
//               <div className="bg-white rounded-[1.4rem] overflow-hidden">
//                 {/* Phone status bar */}
//                 <div className="flex justify-between items-center px-3 py-1 text-[7px] text-gray-400">
//                   <span>9:41</span>
//                   <div className="w-12 h-3 bg-navy rounded-full" />
//                   <span>100%</span>
//                 </div>

//                 {/* Gold banner */}
//                 <div className="mx-2 mb-2 bg-gold-gradient rounded-lg p-2 text-center">
//                   <Diamond className="w-3.5 h-3.5 text-navy mx-auto" />
//                   <p className="text-[8px] font-bold text-navy mt-0.5">Gold Collection</p>
//                   <p className="text-[6px] text-navy/70">Up to 20% OFF</p>
//                 </div>

//                 {/* Categories */}
//                 <div className="px-2 mb-2">
//                   <p className="text-[8px] font-bold text-navy mb-1">Categories</p>
//                   <div className="grid grid-cols-2 gap-1">
//                     {phoneAppCategories.map((cat) => (
//                       <div key={cat.label} className="bg-light rounded-md p-1.5 flex flex-col items-center">
//                         <cat.icon className="w-3 h-3 text-gold-500" />
//                         <span className="text-[6px] text-navy mt-0.5">{cat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Best sellers */}
//                 <div className="px-2 pb-2">
//                   <div className="flex justify-between items-center mb-1">
//                     <p className="text-[8px] font-bold text-navy">Best Sellers</p>
//                     <ShoppingBag className="w-2.5 h-2.5 text-crimson" />
//                   </div>
//                   {topSellingItems.slice(0, 2).map((item) => (
//                     <div key={item.name} className="flex items-center gap-1.5 bg-light rounded-md p-1 mb-1">
//                       <div className="w-5 h-5 bg-gold-gradient rounded flex items-center justify-center">
//                         <Diamond className="w-2.5 h-2.5 text-navy" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-[7px] font-semibold text-navy truncate">{item.name}</p>
//                         <p className="text-[6px] text-gray-500">{item.revenue}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             {/* Phone bottom indicator */}
//             <div className="flex justify-center mt-1">
//               <div className="w-12 h-0.5 bg-gray-300 rounded-full" />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { motion } from 'framer-motion';
import {
  AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip,
} from 'recharts';
import { ArrowRight, Sparkles, TrendingUp, Diamond, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/Button';
import {
  heroStats, salesChartData, stockChartData,
  topSellingItems, recentTransactions, phoneAppCategories,
} from '@/data/content';

export default function Hero() {
  const scrollToFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to the demo form section and focus the first field
  const goToDemoForm = () => {
    const section = document.querySelector('#contact');
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth' });

    // Focus the Name input shortly after the scroll starts
    setTimeout(() => {
      (document.querySelector('#name') as HTMLInputElement | null)?.focus();
    }, 600);
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-light diamond-pattern">
      {/* Background accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-navy text-gold px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            Manage Your Business. Streamline Operations. Grow With Confidence.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-navy leading-tight text-balance"
          >
            Jewellery Business{' '}
            <span className="bg-gold-gradient bg-clip-text text-transparent">Management Software</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl font-heading font-bold text-navy-600"
          >
            One Integrated Solution. Complete Business Control.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-gray-600 max-w-xl"
          >
            Jewellery ERP + Order Management System + Retailers Application for Smarter Operations and Happy Customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button size="lg" onClick={goToDemoForm}>
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToFeatures}>
              View Features
            </Button>
          </motion.div>
        </div>

        {/* Right — laptop + phone mockups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center items-center min-h-[500px]"
        >
          {/* Laptop mockup */}
          <div className="relative w-full max-w-xl">
            <div className="bg-navy-gradient rounded-t-2xl p-1.5 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 h-5 bg-white rounded text-[9px] text-gray-400 flex items-center px-2 border border-gray-100">
                    app.iiqbets.com/dashboard
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-3 bg-light max-h-[420px] overflow-hidden">
                  {/* Stat cards */}
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="bg-white rounded-lg p-2 shadow-sm">
                        <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                        <p className="text-[10px] text-gray-500 mt-1 leading-tight">{stat.label}</p>
                        <p className="text-xs font-bold text-navy">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Charts row */}
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {/* Sales overview */}
                    <div className="col-span-2 bg-white rounded-lg p-2.5 shadow-sm">
                      <p className="text-[10px] font-bold text-navy mb-1">Sales Overview</p>
                      <ResponsiveContainer width="100%" height={100}>
                        <AreaChart data={salesChartData}>
                          <defs>
                            <linearGradient id="heroSalesGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#D62828" stopOpacity={0.3} />
                              <stop offset="100%" stopColor="#D62828" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#D62828"
                            strokeWidth={1.5}
                            fill="url(#heroSalesGrad)"
                          />
                          <XAxis dataKey="name" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{ fontSize: 10, borderRadius: 8, border: 'none', padding: '4px 8px' }}
                            formatter={(v) => [`₹${Number(v).toLocaleString()}`, 'Sales']}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Donut chart */}
                    <div className="bg-white rounded-lg p-2.5 shadow-sm">
                      <p className="text-[10px] font-bold text-navy mb-1">Stock</p>
                      <ResponsiveContainer width="100%" height={100}>
                        <PieChart>
                          <Pie
                            data={stockChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={22}
                            outerRadius={38}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {stockChartData.map((entry) => (
                              <Cell key={entry.name} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ fontSize: 10, borderRadius: 8, border: 'none', padding: '4px 8px' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {stockChartData.map((s) => (
                          <span key={s.name} className="flex items-center gap-0.5 text-[7px] text-gray-500">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom row — top selling + transactions */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-lg p-2.5 shadow-sm">
                      <p className="text-[10px] font-bold text-navy mb-1.5">Top Selling</p>
                      {topSellingItems.slice(0, 3).map((item) => (
                        <div key={item.name} className="flex justify-between text-[9px] py-0.5 border-b border-gray-50 last:border-0">
                          <span className="text-gray-600 truncate pr-1">{item.name}</span>
                          <span className="text-navy font-semibold">{item.sold}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-lg p-2.5 shadow-sm">
                      <p className="text-[10px] font-bold text-navy mb-1.5">Transactions</p>
                      {recentTransactions.slice(0, 3).map((tx) => (
                        <div key={tx.id} className="flex justify-between text-[9px] py-0.5 border-b border-gray-50 last:border-0">
                          <span className="text-gray-600 truncate pr-1">{tx.customer}</span>
                          <span className={tx.status === 'Paid' ? 'text-green-600 font-semibold' : 'text-orange-500 font-semibold'}>
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="h-2 bg-gray-200 rounded-b-xl mx-4 shadow-md" />
            <div className="h-1.5 bg-gray-300 rounded-b-lg mx-12" />
          </div>

          {/* Phone mockup — overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-4 -right-2 lg:right-0 w-36 z-10"
          >
            <div className="bg-navy-gradient rounded-[1.8rem] p-1.5 shadow-2xl">
              <div className="bg-white rounded-[1.4rem] overflow-hidden">
                {/* Phone status bar */}
                <div className="flex justify-between items-center px-3 py-1 text-[7px] text-gray-400">
                  <span>9:41</span>
                  <div className="w-12 h-3 bg-navy rounded-full" />
                  <span>100%</span>
                </div>

                {/* Gold banner */}
                <div className="mx-2 mb-2 bg-gold-gradient rounded-lg p-2 text-center">
                  <Diamond className="w-3.5 h-3.5 text-navy mx-auto" />
                  <p className="text-[8px] font-bold text-navy mt-0.5">Gold Collection</p>
                  <p className="text-[6px] text-navy/70">Up to 20% OFF</p>
                </div>

                {/* Categories */}
                <div className="px-2 mb-2">
                  <p className="text-[8px] font-bold text-navy mb-1">Categories</p>
                  <div className="grid grid-cols-2 gap-1">
                    {phoneAppCategories.map((cat) => (
                      <div key={cat.label} className="bg-light rounded-md p-1.5 flex flex-col items-center">
                        <cat.icon className="w-3 h-3 text-gold-500" />
                        <span className="text-[6px] text-navy mt-0.5">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best sellers */}
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[8px] font-bold text-navy">Best Sellers</p>
                    <ShoppingBag className="w-2.5 h-2.5 text-crimson" />
                  </div>
                  {topSellingItems.slice(0, 2).map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 bg-light rounded-md p-1 mb-1">
                      <div className="w-5 h-5 bg-gold-gradient rounded flex items-center justify-center">
                        <Diamond className="w-2.5 h-2.5 text-navy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[7px] font-semibold text-navy truncate">{item.name}</p>
                        <p className="text-[6px] text-gray-500">{item.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Phone bottom indicator */}
            <div className="flex justify-center mt-1">
              <div className="w-12 h-0.5 bg-gray-300 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}