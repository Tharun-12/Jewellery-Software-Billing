import {
  Users, Truck, Package, FolderTree, ShoppingCart, Receipt,
  FileText, Coins, Wallet, FileSearch, Wrench, Boxes,
  Layers, Clock, Settings2, Building2, Headphones,
  Factory, Store, Link2, Sparkles,
  TrendingUp, ShieldCheck, BarChart3, Gauge,
  type LucideIcon,
} from 'lucide-react';

export const company = {
  name: 'iiQBets',
  legalName: 'Krika MKB Corporation Private Limited',
  tagline: 'Digital Transformation Specialists',
  phone: '+91 94481 13616',
  phoneRaw: '919448113616',
  email: 'contact@iiqbets.com',
  website: 'https://www.iiqbets.com/',
  address:
    'Skyline Beverly Park # D 402, Amruthahalli Main Road, Amruthahalli, Bangalore - 560092',
  copyright: '© 2026 iiQBets – Krika MKB Corporation Pvt Ltd',
};

export type NavLink = {
  label: string;
  path: string;
  href: string; // kept for legacy references (e.g. active-section detection)
  sectionId: string;
};

export const navLinks: NavLink[] = [
  { label: 'Features', path: '/features', href: '#features', sectionId: 'features' },
  { label: 'Why Choose Us', path: '/why-choose', href: '#why-choose', sectionId: 'why-choose' },
  { label: 'Ideal For', path: '/ideal-for', href: '#ideal-for', sectionId: 'ideal-for' },
  { label: 'Benefits', path: '/benefits', href: '#benefits', sectionId: 'benefits' },
  { label: 'Contact', path: '/contact', href: '#contact', sectionId: 'contact' },
];

export type FooterLink = {
  label: string;
  path: string;
  sectionId: string;
};

export const footerLinks: Record<string, FooterLink[]> = {
  Company: [
    { label: 'Features', path: '/features', sectionId: 'features' },
    { label: 'Why Choose Us', path: '/why-choose', sectionId: 'why-choose' },
    { label: 'Ideal For', path: '/ideal-for', sectionId: 'ideal-for' },
    { label: 'Benefits', path: '/benefits', sectionId: 'benefits' },
    { label: 'Contact', path: '/contact', sectionId: 'contact' },
  ],
  Support: [
    { label: 'Request a Demo', path: '/contact', sectionId: 'request-demo-form' },
    { label: 'Contact Us', path: '/contact', sectionId: 'contact' },
  ],
};

export const heroStats = [
  { label: 'Total Customers', value: '1,250', icon: Users, color: 'text-accent-blue' },
  { label: 'Total Suppliers', value: '320', icon: Truck, color: 'text-accent-green' },
  { label: 'Total Products', value: '6,842', icon: Package, color: 'text-accent-orange' },
  { label: "Today's Sales", value: '₹18,75,600', icon: TrendingUp, color: 'text-accent-purple' },
];

export const salesChartData = [
  { name: 'Mon', sales: 42000, orders: 24 },
  { name: 'Tue', sales: 55000, orders: 31 },
  { name: 'Wed', sales: 48000, orders: 28 },
  { name: 'Thu', sales: 67000, orders: 39 },
  { name: 'Fri', sales: 72000, orders: 45 },
  { name: 'Sat', sales: 95000, orders: 58 },
  { name: 'Sun', sales: 61000, orders: 33 },
];

export const stockChartData = [
  { name: 'Gold', value: 45, color: '#F4B400' },
  { name: 'Diamond', value: 25, color: '#3B82F6' },
  { name: 'Silver', value: 20, color: '#94A3B8' },
  { name: 'Platinum', value: 10, color: '#8B5CF6' },
];

export const topSellingItems = [
  { name: 'Gold Necklace', sold: 142, revenue: '₹12,40,000' },
  { name: 'Diamond Ring', sold: 98, revenue: '₹8,75,500' },
  { name: 'Silver Bangle', sold: 76, revenue: '₹3,20,000' },
  { name: 'Gold Earrings', sold: 64, revenue: '₹2,85,000' },
];

export const recentTransactions = [
  { id: 'TXN-001', customer: 'Rajesh Kumar', amount: '₹45,000', status: 'Paid' },
  { id: 'TXN-002', customer: 'Priya Sharma', amount: '₹1,20,000', status: 'Paid' },
  { id: 'TXN-003', customer: 'Mohammed Ali', amount: '₹78,500', status: 'Pending' },
  { id: 'TXN-004', customer: 'Lakshmi Devi', amount: '₹95,000', status: 'Paid' },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
};

export const features: Feature[] = [
  { icon: Users, title: 'Customers', description: 'Maintain customer profiles, purchase history, balances and preferences', color: 'text-accent-blue', bgColor: 'bg-blue-50' },
  { icon: Truck, title: 'Suppliers', description: 'Manage supplier data, purchases, payments and performance', color: 'text-accent-green', bgColor: 'bg-green-50' },
  { icon: Package, title: 'Stock Management', description: 'Real-time inventory tracking with weight, purity, design and availability', color: 'text-accent-orange', bgColor: 'bg-orange-50' },
  { icon: FolderTree, title: 'Categories & Subcategories', description: 'Organize products in structured categories for easy management and reporting', color: 'text-accent-purple', bgColor: 'bg-purple-50' },
  { icon: ShoppingCart, title: 'Purchase', description: 'Record supplier purchases, invoices and update stock in real time', color: 'text-accent-blue', bgColor: 'bg-blue-50' },
  { icon: Receipt, title: 'Sales', description: 'Handle billing, invoicing, sales transactions with GST and pricing calculations', color: 'text-accent-red', bgColor: 'bg-red-50' },
  { icon: FileText, title: 'URD Purchase', description: 'Manage purchases from unregistered dealers with proper documentation', color: 'text-accent-green', bgColor: 'bg-green-50' },
  { icon: Coins, title: 'Receipts', description: 'Track incoming payments from customers via cash, bank or digital modes', color: 'text-accent-orange', bgColor: 'bg-orange-50' },
  { icon: Wallet, title: 'Payments', description: 'Record outgoing payments to suppliers and manage expenses', color: 'text-accent-purple', bgColor: 'bg-purple-50' },
  { icon: FileSearch, title: 'Estimation', description: 'Generate quotations for customers before final purchase', color: 'text-accent-blue', bgColor: 'bg-blue-50' },
  { icon: Wrench, title: 'Orders & Repairs', description: 'Manage custom orders and repair jobs with tracking and status updates', color: 'text-accent-red', bgColor: 'bg-red-50' },
  { icon: Boxes, title: 'Reports', description: 'Comprehensive business reports for sales, stock, GST and profitability analysis', color: 'text-accent-green', bgColor: 'bg-green-50' },
];

export const dashboardSidebar = [
  { label: 'Dashboard', icon: Layers, active: true },
  { label: 'Customers', icon: Users },
  { label: 'Suppliers', icon: Truck },
  { label: 'Stock', icon: Package },
  { label: 'Categories', icon: FolderTree },
  { label: 'Purchase', icon: ShoppingCart },
  { label: 'Sales', icon: Receipt },
  { label: 'URD Purchase', icon: FileText },
  { label: 'Receipts', icon: Coins },
  { label: 'Payments', icon: Wallet },
  { label: 'Estimation', icon: FileSearch },
  { label: 'Orders & Repairs', icon: Wrench },
  { label: 'Reports', icon: BarChart3 },
  { label: 'Settings', icon: Settings2 },
];

export const dashboardStats = [
  { label: 'Revenue (Today)', value: '₹18,75,600', change: '+12.5%', positive: true, icon: TrendingUp },
  { label: 'Orders (Today)', value: '58', change: '+8.2%', positive: true, icon: ShoppingCart },
  { label: 'Low Stock Alerts', value: '14', change: '-3', positive: true, icon: Package },
  { label: 'Pending Repairs', value: '23', change: '+2', positive: false, icon: Wrench },
];

export const whyChoose = [
  { icon: Layers, title: 'End-to-End Digital Solutions', description: 'From software development to marketing & automation, everything under one roof', color: 'text-accent-blue', bgColor: 'bg-blue-50' },
  { icon: Clock, title: 'Fast Response & Timely Delivery', description: 'Quick communication, efficient project execution, on-time delivery', color: 'text-accent-green', bgColor: 'bg-green-50' },
  { icon: Settings2, title: 'Customizable & Scalable Solutions', description: 'Tailored to your exact business needs across industries', color: 'text-accent-orange', bgColor: 'bg-orange-50' },
  { icon: Building2, title: 'Multi-Industry Expertise', description: 'Education, retail, healthcare, manufacturing and more', color: 'text-accent-purple', bgColor: 'bg-purple-50' },
  { icon: Headphones, title: 'Dedicated Support & Long-Term Partnership', description: 'We don\'t just deliver, we walk and grow with you.', color: 'text-accent-red', bgColor: 'bg-red-50' },
];

export const idealFor = [
  { icon: Factory, label: 'Jewellery Manufacturers' },
  { icon: Boxes, label: 'Wholesalers' },
  { icon: Store, label: 'Retail Chains' },
  { icon: Sparkles, label: 'Showrooms' },
  { icon: Link2, label: 'Multi-Branch Businesses' },
];

export const benefits = [
  { icon: Package, title: 'Real-time Inventory Control', color: 'text-accent-blue', bgColor: 'bg-blue-50' },
  { icon: Gauge, title: 'Higher Operational Efficiency', color: 'text-accent-green', bgColor: 'bg-green-50' },
  { icon: Users, title: 'Better Customer Experience', color: 'text-accent-orange', bgColor: 'bg-orange-50' },
  { icon: BarChart3, title: 'Accurate Reporting', color: 'text-accent-purple', bgColor: 'bg-purple-50' },
  { icon: ShieldCheck, title: 'Secure Transactions', color: 'text-accent-red', bgColor: 'bg-red-50' },
  { icon: Building2, title: 'Scalable for Multi-branch', color: 'text-accent-blue', bgColor: 'bg-blue-50' },
];

export const phoneAppCategories = [
  { label: 'Rings', icon: Sparkles },
  { label: 'Necklaces', icon: Sparkles },
  { label: 'Earrings', icon: Sparkles },
  { label: 'Bangles', icon: Sparkles },
];

export const businessTypes = [
  'Jewellery Manufacturer',
  'Wholesaler',
  'Retail Chain',
  'Showroom',
  'Multi-Branch Business',
  'Other',
];
