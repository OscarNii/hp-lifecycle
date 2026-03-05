// Mock data for HP Product Version & Lifecycle Hub

export interface Product {
  id: string;
  name: string;
  version: string;
  status: 'active' | 'discontinued' | 'eol';
  lastUpdated: string;
}

export interface RecentLookup {
  id: string;
  productName: string;
  productIcon: string;
  status: 'active' | 'inactive';
  timestamp: string;
}

export interface CriticalUpdate {
  type: string;
  count: number;
  priority: 'high' | 'medium' | 'low';
}

export interface VersionHistory {
  version: string;
  releaseDate: string;
  majorChanges: string[];
  status: 'active' | 'discontinued' | 'eol';
}

export interface LifecycleData {
  active: number;
  discontinued: number;
  eol: number;
}

export interface ProductSpecs {
  processor: string;
  memory: string;
  storage: string;
  display: string;
  weight: string;
}

// Recent Lookups Data
export const recentLookups: RecentLookup[] = [
  { id: '1', productName: 'HP EliteBook 840 G8', productIcon: '💻', status: 'active', timestamp: '2 mins ago' },
  { id: '2', productName: 'HP ProBook 450 G7', productIcon: '💻', status: 'active', timestamp: '15 mins ago' },
  { id: '3', productName: 'HP ZBook Studio G7', productIcon: '💻', status: 'inactive', timestamp: '1 hour ago' },
  { id: '4', productName: 'HP EliteDesk 800 G5', productIcon: '🖥️', status: 'active', timestamp: '2 hours ago' },
  { id: '5', productName: 'HP Spectre x360', productIcon: '💻', status: 'active', timestamp: '3 hours ago' },
];

// Critical Updates Data
export const criticalUpdates: CriticalUpdate[] = [
  { type: 'Pending Updates', count: 12, priority: 'high' },
  { type: 'Driver Updates', count: 8, priority: 'medium' },
  { type: 'Security Patches', count: 5, priority: 'high' },
];

// Lifecycle Overview Data
export const lifecycleData: LifecycleData = {
  active: 45,
  discontinued: 28,
  eol: 15,
};

// Version History Data
export const versionHistory: VersionHistory[] = [
  {
    version: 'G8',
    releaseDate: '2023-03-15',
    majorChanges: ['Intel 13th Gen processors', 'DDR5 RAM support', 'Improved battery life'],
    status: 'active',
  },
  {
    version: 'G7',
    releaseDate: '2021-06-20',
    majorChanges: ['Intel 11th Gen processors', 'Enhanced security features', 'Thunderbolt 4'],
    status: 'active',
  },
  {
    version: 'G6',
    releaseDate: '2019-04-10',
    majorChanges: ['Intel 10th Gen processors', 'WiFi 6 support', 'Fingerprint sensor'],
    status: 'discontinued',
  },
  {
    version: 'G5',
    releaseDate: '2017-08-22',
    majorChanges: ['Intel 8th Gen processors', 'USB-C port', 'FHD display option'],
    status: 'eol',
  },
];

// Release Timeline Data for Charts
export const releaseTimelineData = [
  { year: 2015, releases: 2 },
  { year: 2016, releases: 3 },
  { year: 2017, releases: 4 },
  { year: 2018, releases: 3 },
  { year: 2019, releases: 5 },
  { year: 2020, releases: 4 },
  { year: 2021, releases: 6 },
  { year: 2022, releases: 5 },
  { year: 2023, releases: 4 },
  { year: 2024, releases: 3 },
];

// Product Specification Comparison
export const productComparison: Record<string, ProductSpecs> = {
  'EliteBook 840 G8': {
    processor: 'Intel Core i7-1365U',
    memory: '32GB DDR5',
    storage: '1TB NVMe SSD',
    display: '14" FHD IPS',
    weight: '1.35 kg',
  },
  'EliteBook 840 G7': {
    processor: 'Intel Core i7-1185G7',
    memory: '16GB DDR4',
    storage: '512GB NVMe SSD',
    display: '14" FHD IPS',
    weight: '1.33 kg',
  },
};

// Product Family Tree Data
export interface ProductNode {
  id: string;
  name: string;
  children?: ProductNode[];
}

export const productFamilyTree: ProductNode[] = [
  {
    id: 'elitebook-800',
    name: 'EliteBook 800 Series',
    children: [
      {
        id: 'elitebook-840',
        name: 'EliteBook 840',
        children: [
          { id: 'elitebook-840-g8', name: 'EliteBook 840 G8' },
          { id: 'elitebook-840-g7', name: 'EliteBook 840 G7' },
          { id: 'elitebook-840-g6', name: 'EliteBook 840 G6' },
        ],
      },
      {
        id: 'elitebook-850',
        name: 'EliteBook 850',
        children: [
          { id: 'elitebook-850-g8', name: 'EliteBook 850 G8' },
          { id: 'elitebook-850-g7', name: 'EliteBook 850 G7' },
        ],
      },
    ],
  },
  {
    id: 'probook-400',
    name: 'ProBook 400 Series',
    children: [
      {
        id: 'probook-450',
        name: 'ProBook 450',
        children: [
          { id: 'probook-450-g9', name: 'ProBook 450 G9' },
          { id: 'probook-450-g8', name: 'ProBook 450 G8' },
          { id: 'probook-450-g7', name: 'ProBook 450 G7' },
        ],
      },
    ],
  },
];

// Upgrade Paths Data
export const upgradePaths = [
  { from: 'EliteBook 840 G5', to: 'EliteBook 840 G6', path: 'direct' },
  { from: 'EliteBook 840 G6', to: 'EliteBook 840 G7', path: 'direct' },
  { from: 'EliteBook 840 G7', to: 'EliteBook 840 G8', path: 'direct' },
  { from: 'ProBook 450 G6', to: 'ProBook 450 G7', path: 'direct' },
  { from: 'ProBook 450 G7', to: 'ProBook 450 G8', path: 'direct' },
  { from: 'ProBook 450 G8', to: 'ProBook 450 G9', path: 'direct' },
];

// Hardware Versions Data
export const hardwareVersions = [
  { version: '1.0', releaseDate: '2023-03-15', changes: 'Initial release' },
  { version: '1.1', releaseDate: '2023-06-20', changes: 'BIOS update' },
  { version: '1.2', releaseDate: '2023-09-10', changes: 'Thermal improvements' },
  { version: '1.3', releaseDate: '2024-01-15', changes: 'Security patch' },
];

// OS Compatibility Data
export const osCompatibility = [
  { os: 'Windows 11 Pro', supported: true, version: '21H2+' },
  { os: 'Windows 10 Pro', supported: true, version: '20H2+' },
  { os: 'Windows 10 Home', supported: true, version: '20H2+' },
  { os: 'Ubuntu 22.04 LTS', supported: true, version: '22.04' },
  { os: 'Red Hat Enterprise Linux 9', supported: true, version: '9.0' },
];

// BIOS & Firmware Data
export const biosFirmware = [
  { component: 'BIOS', version: '1.15.0', releaseDate: '2024-02-10', size: '32 MB' },
  { component: 'Intel ME', version: '16.1.25.1940', releaseDate: '2024-01-20', size: '18 MB' },
  { component: 'HP Hotkey Support', version: '6.2.10.1', releaseDate: '2024-01-15', size: '45 MB' },
  { component: 'HP Support Assistant', version: '9.11.23.0', releaseDate: '2024-02-01', size: '120 MB' },
];

// Driver Versions Data
export const driverVersions = [
  { category: 'Graphics', driver: 'Intel Iris Xe 27.20.100.9755', date: '2024-01-10' },
  { category: 'Network', driver: 'Intel Wi-Fi 23.30.0.9', date: '2024-02-05' },
  { category: 'Audio', driver: 'Realtek 6.0.9223.1', date: '2024-01-25' },
  { category: 'Storage', driver: 'Intel RST 19.0.0.1123', date: '2024-01-15' },
];

// Support Lifecycle Data
export const supportLifecycle = {
  launchDate: '2023-03-15',
  endOfSupport: '2028-03-15',
  endOfSales: '2025-09-30',
  partAvailability: '2030-03-15',
  extendedSupport: '2031-03-15',
};

// API Mock Data
export const apiEndpoints = [
  { method: 'GET', path: '/api/v1/products', description: 'List all HP products' },
  { method: 'GET', path: '/api/v1/products/{id}', description: 'Get product details' },
  { method: 'GET', path: '/api/v1/products/{id}/versions', description: 'Get version history' },
  { method: 'GET', path: '/api/v1/products/{id}/lifecycle', description: 'Get lifecycle status' },
  { method: 'GET', path: '/api/v1/drivers', description: 'Search drivers' },
];

export const apiMockResponse = {
  success: true,
  data: {
    product: {
      name: 'HP EliteBook 840 G8',
      sku: '8G8PAU',
      series: 'EliteBook 800',
      generation: 8,
    },
    lifecycle: {
      status: 'Active',
      launchDate: '2023-03-15',
      endOfSupport: '2028-03-15',
      daysRemaining: 1460,
    },
    versions: [
      { version: 'G8', status: 'Current', releaseDate: '2023-03-15' },
      { version: 'G7', status: 'Previous', releaseDate: '2021-06-20' },
    ],
    drivers: {
      total: 24,
      critical: 5,
      recommended: 12,
      optional: 7,
    },
  },
  timestamp: '2024-03-04T16:12:00Z',
};

// AI Insights Mock Data
export const insightsData = [
  {
    title: 'Lifecycle Alert',
    content: 'HP EliteBook 840 G7 enters End of Support phase in Q3 2024. Consider planning migration to G8.',
    priority: 'high',
  },
  {
    title: 'Driver Update Available',
    content: 'New Intel Graphics driver (v27.20.100.9755) improves performance by 15% in benchmark tests.',
    priority: 'medium',
  },
  {
    title: 'Security Advisory',
    content: 'Critical BIOS update available addressing CVE-2024-1234. Recommended immediate installation.',
    priority: 'high',
  },
  {
    title: 'Cost Optimization',
    content: 'Your fleet has 45 devices eligible for Windows 11 upgrade, which can reduce support costs by 20%.',
    priority: 'low',
  },
];

// Gauge Chart Data
export const gaugeData = [
  { name: 'Pending', value: 12, fill: '#F39C12' },
  { name: 'Drivers', value: 8, fill: '#0096D6' },
  { name: 'Security', value: 5, fill: '#E74C3C' },
];

// Donut Chart Data
export const donutChartData = [
  { name: 'Active', value: 45, fill: '#2ECC71' },
  { name: 'Discontinued', value: 28, fill: '#F39C12' },
  { name: 'EOL', value: 15, fill: '#E74C3C' },
];
