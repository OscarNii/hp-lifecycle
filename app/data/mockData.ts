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
    version: 'G10',
    releaseDate: '2024-06-15',
    majorChanges: ['Intel Core Ultra processors', 'AI PC features', 'WiFi 7 support'],
    status: 'active',
  },
  {
    version: 'G9',
    releaseDate: '2023-09-20',
    majorChanges: ['Intel 13th Gen processors', 'DDR5 RAM', '5G optional'],
    status: 'active',
  },
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
    status: 'discontinued',
  },
  {
    version: 'G6',
    releaseDate: '2019-04-10',
    majorChanges: ['Intel 10th Gen processors', 'WiFi 6 support', 'Fingerprint sensor'],
    status: 'eol',
  },
  {
    version: 'G5',
    releaseDate: '2017-08-22',
    majorChanges: ['Intel 8th Gen processors', 'USB-C port', 'FHD display option'],
    status: 'eol',
  },
  {
    version: 'G4',
    releaseDate: '2016-01-15',
    majorChanges: ['Intel 6th Gen processors', 'SSD options', 'Touch display'],
    status: 'eol',
  },
  {
    version: 'G3',
    releaseDate: '2015-03-10',
    majorChanges: ['Intel 5th Gen processors', 'Business rugged design'],
    status: 'eol',
  },
  {
    version: 'G2',
    releaseDate: '2014-07-20',
    majorChanges: ['Intel 4th Gen processors', 'Docking station support'],
    status: 'eol',
  },
  {
    version: 'G1',
    releaseDate: '2013-09-01',
    majorChanges: ['Intel 3rd Gen processors', 'First EliteBook 840'],
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
  'EliteBook 840 G10': {
    processor: 'Intel Core Ultra 7 165H',
    memory: '64GB DDR5',
    storage: '2TB NVMe SSD',
    display: '14" 2.8K OLED',
    weight: '1.32 kg',
  },
  'EliteBook 840 G9': {
    processor: 'Intel Core i7-1265U',
    memory: '32GB DDR5',
    storage: '1TB NVMe SSD',
    display: '14" WUXGA IPS',
    weight: '1.34 kg',
  },
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

// Product Family Tree Data (Enhanced with evolution history)
export interface ProductNode {
  id: string;
  name: string;
  generation?: number;
  year?: number;
  status?: 'active' | 'discontinued' | 'eol';
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
        generation: 10,
        year: 2024,
        status: 'active',
        children: [
          { id: 'elitebook-840-g10', name: 'G10 (2024)', generation: 10, year: 2024, status: 'active' },
          { id: 'elitebook-840-g9', name: 'G9 (2023)', generation: 9, year: 2023, status: 'active' },
          { id: 'elitebook-840-g8', name: 'G8 (2023)', generation: 8, year: 2023, status: 'active' },
          { id: 'elitebook-840-g7', name: 'G7 (2021)', generation: 7, year: 2021, status: 'discontinued' },
          { id: 'elitebook-840-g6', name: 'G6 (2019)', generation: 6, year: 2019, status: 'eol' },
          { id: 'elitebook-840-g5', name: 'G5 (2017)', generation: 5, year: 2017, status: 'eol' },
        ],
      },
      {
        id: 'elitebook-850',
        name: 'EliteBook 850',
        generation: 8,
        year: 2023,
        status: 'active',
        children: [
          { id: 'elitebook-850-g8', name: 'G8 (2023)', generation: 8, year: 2023, status: 'active' },
          { id: 'elitebook-850-g7', name: 'G7 (2021)', generation: 7, year: 2021, status: 'discontinued' },
        ],
      },
      {
        id: 'elitebook-830',
        name: 'EliteBook 830',
        generation: 10,
        year: 2024,
        status: 'active',
        children: [
          { id: 'elitebook-830-g10', name: 'G10 (2024)', generation: 10, year: 2024, status: 'active' },
          { id: 'elitebook-830-g9', name: 'G9 (2023)', generation: 9, year: 2023, status: 'active' },
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
        generation: 11,
        year: 2024,
        status: 'active',
        children: [
          { id: 'probook-450-g11', name: 'G11 (2024)', generation: 11, year: 2024, status: 'active' },
          { id: 'probook-450-g10', name: 'G10 (2023)', generation: 10, year: 2023, status: 'active' },
          { id: 'probook-450-g9', name: 'G9 (2023)', generation: 9, year: 2023, status: 'active' },
          { id: 'probook-450-g8', name: 'G8 (2022)', generation: 8, year: 2022, status: 'discontinued' },
          { id: 'probook-450-g7', name: 'G7 (2021)', generation: 7, year: 2021, status: 'eol' },
        ],
      },
      {
        id: 'probook-440',
        name: 'ProBook 440',
        generation: 11,
        year: 2024,
        status: 'active',
        children: [
          { id: 'probook-440-g11', name: 'G11 (2024)', generation: 11, year: 2024, status: 'active' },
          { id: 'probook-440-g10', name: 'G10 (2023)', generation: 10, year: 2023, status: 'active' },
        ],
      },
    ],
  },
  {
    id: 'zbook-firefly',
    name: 'ZBook Firefly Series',
    children: [
      {
        id: 'zbook-firefly-14',
        name: 'ZBook Firefly 14',
        generation: 10,
        year: 2024,
        status: 'active',
        children: [
          { id: 'zbook-firefly-14-g10', name: 'G10 (2024)', generation: 10, year: 2024, status: 'active' },
          { id: 'zbook-firefly-14-g9', name: 'G9 (2023)', generation: 9, year: 2023, status: 'active' },
          { id: 'zbook-firefly-14-g8', name: 'G8 (2022)', generation: 8, year: 2022, status: 'discontinued' },
        ],
      },
    ],
  },
];

// Enhanced Upgrade Paths with recommendations
export interface UpgradePath {
  from: string;
  fromGen: number;
  to: string;
  toGen: number;
  recommendation: 'recommended' | 'optional' | 'critical';
  benefits: string[];
}

export const upgradePaths: UpgradePath[] = [
  { from: 'EliteBook 840 G5', fromGen: 5, to: 'EliteBook 840 G6', toGen: 6, recommendation: 'critical', benefits: ['Security updates', 'Performance boost'] },
  { from: 'EliteBook 840 G6', fromGen: 6, to: 'EliteBook 840 G7', toGen: 7, recommendation: 'critical', benefits: ['Thunderbolt 4', 'WiFi 6'] },
  { from: 'EliteBook 840 G7', fromGen: 7, to: 'EliteBook 840 G8', toGen: 8, recommendation: 'recommended', benefits: ['DDR5 RAM', 'Better battery'] },
  { from: 'EliteBook 840 G8', fromGen: 8, to: 'EliteBook 840 G9', toGen: 9, recommendation: 'recommended', benefits: ['5G option', 'DDR5'] },
  { from: 'EliteBook 840 G9', fromGen: 9, to: 'EliteBook 840 G10', toGen: 10, recommendation: 'recommended', benefits: ['AI PC', 'WiFi 7', 'OLED display'] },
  { from: 'ProBook 450 G7', fromGen: 7, to: 'ProBook 450 G8', toGen: 8, recommendation: 'critical', benefits: ['Security fixes'] },
  { from: 'ProBook 450 G8', fromGen: 8, to: 'ProBook 450 G9', toGen: 9, recommendation: 'recommended', benefits: ['DDR5', 'Better performance'] },
  { from: 'ProBook 450 G9', fromGen: 9, to: 'ProBook 450 G10', toGen: 10, recommendation: 'recommended', benefits: ['5G option', 'AI features'] },
  { from: 'ProBook 450 G10', fromGen: 10, to: 'ProBook 450 G11', toGen: 11, recommendation: 'recommended', benefits: ['Intel Core Ultra', 'WiFi 7'] },
];

// Hardware Versions Data
export const hardwareVersions = [
  { version: '1.0', releaseDate: '2023-03-15', changes: 'Initial release' },
  { version: '1.1', releaseDate: '2023-06-20', changes: 'BIOS update' },
  { version: '1.2', releaseDate: '2023-09-10', changes: 'Thermal improvements' },
  { version: '1.3', releaseDate: '2024-01-15', changes: 'Security patch' },
  { version: '1.4', releaseDate: '2024-06-20', changes: 'Performance optimization' },
];

// OS Compatibility Data with detailed matrix
export interface OSCompatibilityEntry {
  os: string;
  version: string;
  supported: boolean;
  architecture: string;
  notes?: string;
}

export const osCompatibility: OSCompatibilityEntry[] = [
  { os: 'Windows 11', version: 'Pro 24H2', supported: true, architecture: 'x64', notes: 'Full support' },
  { os: 'Windows 11', version: 'Pro 23H2', supported: true, architecture: 'x64', notes: 'Full support' },
  { os: 'Windows 11', version: 'Home 24H2', supported: true, architecture: 'x64', notes: 'Full support' },
  { os: 'Windows 10', version: 'Pro 22H2', supported: true, architecture: 'x64', notes: 'Until Oct 2025' },
  { os: 'Windows 10', version: 'Home 22H2', supported: true, architecture: 'x64', notes: 'Until Oct 2025' },
  { os: 'Ubuntu', version: '24.04 LTS', supported: true, architecture: 'x64', notes: 'Canonical certified' },
  { os: 'Ubuntu', version: '22.04 LTS', supported: true, architecture: 'x64', notes: 'Canonical certified' },
  { os: 'Red Hat Enterprise Linux', version: '9.4', supported: true, architecture: 'x64', notes: 'RHEL certified' },
  { os: 'Red Hat Enterprise Linux', version: '8.10', supported: true, architecture: 'x64', notes: 'RHEL certified' },
  { os: 'Fedora', version: '40', supported: true, architecture: 'x64', notes: 'Community supported' },
  { os: 'Windows 10', version: 'LTSC 2021', supported: false, architecture: 'x64', notes: 'Not compatible' },
];

// Enhanced BIOS & Firmware Data with release dates
export interface BiosFirmwareEntry {
  component: string;
  version: string;
  releaseDate: string;
  size: string;
  priority: 'critical' | 'recommended' | 'optional';
  description: string;
}

export const biosFirmware: BiosFirmwareEntry[] = [
  { component: 'BIOS', version: '1.15.0', releaseDate: '2024-06-15', size: '32 MB', priority: 'critical', description: 'Security updates, Intel Microcode' },
  { component: 'BIOS', version: '1.14.0', releaseDate: '2024-03-10', size: '31 MB', priority: 'recommended', description: 'Performance improvements' },
  { component: 'BIOS', version: '1.13.0', releaseDate: '2024-01-20', size: '31 MB', priority: 'critical', description: 'Security vulnerability fixes' },
  { component: 'Intel ME', version: '16.1.25.1940', releaseDate: '2024-05-15', size: '18 MB', priority: 'critical', description: 'Intel Management Engine update' },
  { component: 'Intel ME', version: '16.1.20.1800', releaseDate: '2024-02-10', size: '18 MB', priority: 'recommended', description: 'Performance fixes' },
  { component: 'HP Hotkey Support', version: '6.2.10.1', releaseDate: '2024-04-20', size: '45 MB', priority: 'optional', description: 'Hotkey driver update' },
  { component: 'HP Support Assistant', version: '9.11.34.0', releaseDate: '2024-06-01', size: '120 MB', priority: 'optional', description: 'Support tool improvements' },
  { component: 'HP Sure Click', version: '5.0.25.0', releaseDate: '2024-05-20', size: '15 MB', priority: 'recommended', description: 'Security browser update' },
  { component: 'HP Wolf Security', version: '1.0.45.0', releaseDate: '2024-06-10', size: '85 MB', priority: 'critical', description: 'Endpoint security' },
];

// Driver Versions Data
export interface DriverEntry {
  category: string;
  driver: string;
  version: string;
  date: string;
  priority: 'critical' | 'recommended' | 'optional';
}

export const driverVersions: DriverEntry[] = [
  { category: 'Graphics', driver: 'Intel Iris Xe Graphics', version: '27.20.100.9755', date: '2024-06-10', priority: 'critical' },
  { category: 'Network', driver: 'Intel Wi-Fi 7 BE200', version: '23.30.0.9', date: '2024-05-25', priority: 'critical' },
  { category: 'Audio', driver: 'Realtek Audio', version: '6.0.9223.1', date: '2024-04-15', priority: 'recommended' },
  { category: 'Storage', driver: 'Intel RST', version: '19.0.0.1123', date: '2024-03-20', priority: 'recommended' },
  { category: 'Bluetooth', driver: 'Intel Bluetooth', version: '23.30.0.6', date: '2024-05-10', priority: 'optional' },
  { category: 'Touchpad', driver: 'Synaptics Pointing Device', version: '23.2.2.2', date: '2024-04-05', priority: 'optional' },
  { category: 'Security', driver: 'HP Sure Sense', version: '1.2.5.0', date: '2024-06-01', priority: 'critical' },
  { category: 'USB', driver: 'Intel USB 3.1', version: '10.1.1.38', date: '2024-02-28', priority: 'optional' },
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

// Evolution Flow Data for Tree Map / Flow Diagram
export interface EvolutionNode {
  id: string;
  name: string;
  generation: number;
  year: number;
  status: 'active' | 'discontinued' | 'eol';
  position: { x: number; y: number };
  connectedTo: string[];
}

export const evolutionFlowData: EvolutionNode[] = [
  { id: 'G1', name: 'EliteBook 840 G1', generation: 1, year: 2013, status: 'eol', position: { x: 0, y: 4 }, connectedTo: ['G2'] },
  { id: 'G2', name: 'EliteBook 840 G2', generation: 2, year: 2014, status: 'eol', position: { x: 1, y: 4 }, connectedTo: ['G3'] },
  { id: 'G3', name: 'EliteBook 840 G3', generation: 3, year: 2015, status: 'eol', position: { x: 2, y: 4 }, connectedTo: ['G4'] },
  { id: 'G4', name: 'EliteBook 840 G4', generation: 4, year: 2016, status: 'eol', position: { x: 3, y: 3 }, connectedTo: ['G5'] },
  { id: 'G5', name: 'EliteBook 840 G5', generation: 5, year: 2017, status: 'eol', position: { x: 4, y: 3 }, connectedTo: ['G6'] },
  { id: 'G6', name: 'EliteBook 840 G6', generation: 6, year: 2019, status: 'eol', position: { x: 5, y: 2 }, connectedTo: ['G7'] },
  { id: 'G7', name: 'EliteBook 840 G7', generation: 7, year: 2021, status: 'discontinued', position: { x: 6, y: 2 }, connectedTo: ['G8'] },
  { id: 'G8', name: 'EliteBook 840 G8', generation: 8, year: 2023, status: 'active', position: { x: 7, y: 1 }, connectedTo: ['G9'] },
  { id: 'G9', name: 'EliteBook 840 G9', generation: 9, year: 2023, status: 'active', position: { x: 8, y: 1 }, connectedTo: ['G10'] },
  { id: 'G10', name: 'EliteBook 840 G10', generation: 10, year: 2024, status: 'active', position: { x: 9, y: 0 }, connectedTo: [] },
];

// HP Products Database for Live Search
export interface HPProduct {
  id: string;
  name: string;
  sku: string;
  series: string;
  category: 'Laptop' | 'Desktop' | 'Workstation' | 'Tablet';
  generation: number;
  releaseDate: string;
  status: 'active' | 'discontinued' | 'eol';
  lifecycle: {
    status: 'Active' | 'Discontinued' | 'End of Life';
    endOfSupport: string;
    endOfSales: string;
  };
  specs: {
    processor: string;
    memory: string;
    storage: string;
    display: string;
    weight: string;
  };
  biosVersion: string;
  drivers: {
    total: number;
    critical: number;
    recommended: number;
    optional: number;
  };
}

export const hpProducts: HPProduct[] = [
  { id: 'elitebook-840-g10', name: 'HP EliteBook 840 G10', sku: '8G9X8PA', series: 'EliteBook 800', category: 'Laptop', generation: 10, releaseDate: '2024-06-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2029-06-15', endOfSales: '2026-12-31' }, specs: { processor: 'Intel Core Ultra 7 165H', memory: '64GB DDR5', storage: '2TB NVMe SSD', display: '14" 2.8K OLED', weight: '1.32 kg' }, biosVersion: '1.15.0', drivers: { total: 28, critical: 3, recommended: 15, optional: 10 } },
  { id: 'elitebook-840-g9', name: 'HP EliteBook 840 G9', sku: '6G9F4PA', series: 'EliteBook 800', category: 'Laptop', generation: 9, releaseDate: '2023-09-20', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-09-20', endOfSales: '2025-06-30' }, specs: { processor: 'Intel Core i7-1265U', memory: '32GB DDR5', storage: '1TB NVMe SSD', display: '14" WUXGA IPS', weight: '1.34 kg' }, biosVersion: '1.12.0', drivers: { total: 24, critical: 5, recommended: 12, optional: 7 } },
  { id: 'elitebook-840-g8', name: 'HP EliteBook 840 G8', sku: '8G8PAU', series: 'EliteBook 800', category: 'Laptop', generation: 8, releaseDate: '2023-03-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-03-15', endOfSales: '2025-09-30' }, specs: { processor: 'Intel Core i7-1365U', memory: '32GB DDR5', storage: '1TB NVMe SSD', display: '14" FHD IPS', weight: '1.35 kg' }, biosVersion: '1.10.0', drivers: { total: 24, critical: 5, recommended: 12, optional: 7 } },
  { id: 'elitebook-840-g7', name: 'HP EliteBook 840 G7', sku: '22N56PA', series: 'EliteBook 800', category: 'Laptop', generation: 7, releaseDate: '2021-06-20', status: 'discontinued', lifecycle: { status: 'Discontinued', endOfSupport: '2026-06-20', endOfSales: '2023-12-31' }, specs: { processor: 'Intel Core i7-1185G7', memory: '16GB DDR4', storage: '512GB NVMe SSD', display: '14" FHD IPS', weight: '1.33 kg' }, biosVersion: '1.08.0', drivers: { total: 22, critical: 4, recommended: 10, optional: 8 } },
  { id: 'elitebook-840-g6', name: 'HP EliteBook 840 G6', sku: '7KP31PA', series: 'EliteBook 800', category: 'Laptop', generation: 6, releaseDate: '2019-04-10', status: 'eol', lifecycle: { status: 'End of Life', endOfSupport: '2024-04-10', endOfSales: '2021-12-31' }, specs: { processor: 'Intel Core i5-8265U', memory: '16GB DDR4', storage: '256GB SSD', display: '14" FHD IPS', weight: '1.48 kg' }, biosVersion: '1.05.0', drivers: { total: 18, critical: 2, recommended: 8, optional: 8 } },
  { id: 'elitebook-830-g10', name: 'HP EliteBook 830 G10', sku: '8G9X7PA', series: 'EliteBook 800', category: 'Laptop', generation: 10, releaseDate: '2024-06-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2029-06-15', endOfSales: '2026-12-31' }, specs: { processor: 'Intel Core Ultra 7 165H', memory: '32GB DDR5', storage: '1TB NVMe SSD', display: '13.3" WUXGA', weight: '1.23 kg' }, biosVersion: '1.15.0', drivers: { total: 26, critical: 3, recommended: 14, optional: 9 } },
  { id: 'elitebook-850-g8', name: 'HP EliteBook 850 G8', sku: '8G8PBV', series: 'EliteBook 800', category: 'Laptop', generation: 8, releaseDate: '2023-03-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-03-15', endOfSales: '2025-09-30' }, specs: { processor: 'Intel Core i7-1365U', memory: '32GB DDR5', storage: '1TB NVMe SSD', display: '15.6" FHD IPS', weight: '1.74 kg' }, biosVersion: '1.10.0', drivers: { total: 25, critical: 5, recommended: 12, optional: 8 } },
  { id: 'probook-450-g11', name: 'HP ProBook 450 G11', sku: 'A2HG5PA', series: 'ProBook 400', category: 'Laptop', generation: 11, releaseDate: '2024-05-20', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2029-05-20', endOfSales: '2026-12-31' }, specs: { processor: 'Intel Core Ultra 7 155U', memory: '32GB DDR5', storage: '1TB NVMe SSD', display: '15.6" FHD', weight: '1.79 kg' }, biosVersion: '1.14.0', drivers: { total: 26, critical: 3, recommended: 14, optional: 9 } },
  { id: 'probook-450-g10', name: 'HP ProBook 450 G10', sku: '8G8PCW', series: 'ProBook 400', category: 'Laptop', generation: 10, releaseDate: '2023-06-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-06-15', endOfSales: '2025-12-31' }, specs: { processor: 'Intel Core i5-1335U', memory: '16GB DDR4', storage: '512GB NVMe SSD', display: '15.6" FHD', weight: '1.74 kg' }, biosVersion: '1.11.0', drivers: { total: 22, critical: 4, recommended: 11, optional: 7 } },
  { id: 'probook-450-g9', name: 'HP ProBook 450 G9', sku: '6G9F5PA', series: 'ProBook 400', category: 'Laptop', generation: 9, releaseDate: '2023-02-10', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-02-10', endOfSales: '2025-06-30' }, specs: { processor: 'Intel Core i5-1235U', memory: '16GB DDR4', storage: '512GB NVMe SSD', display: '15.6" FHD', weight: '1.74 kg' }, biosVersion: '1.09.0', drivers: { total: 20, critical: 3, recommended: 10, optional: 7 } },
  { id: 'probook-440-g11', name: 'HP ProBook 440 G11', sku: 'A2HG4PA', series: 'ProBook 400', category: 'Laptop', generation: 11, releaseDate: '2024-05-20', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2029-05-20', endOfSales: '2026-12-31' }, specs: { processor: 'Intel Core Ultra 5 125U', memory: '16GB DDR5', storage: '512GB NVMe SSD', display: '14" WUXGA', weight: '1.39 kg' }, biosVersion: '1.14.0', drivers: { total: 24, critical: 3, recommended: 13, optional: 8 } },
  { id: 'zbook-firefly-14-g10', name: 'HP ZBook Firefly 14 G10', sku: '8G9Y0PA', series: 'ZBook Firefly', category: 'Workstation', generation: 10, releaseDate: '2024-07-10', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2029-07-10', endOfSales: '2026-12-31' }, specs: { processor: 'Intel Core Ultra 7 165H', memory: '64GB DDR5', storage: '2TB NVMe SSD', display: '14" 2.8K OLED', weight: '1.4 kg' }, biosVersion: '1.16.0', drivers: { total: 32, critical: 4, recommended: 18, optional: 10 } },
  { id: 'zbook-firefly-14-g9', name: 'HP ZBook Firefly 14 G9', sku: '6G9G4PA', series: 'ZBook Firefly', category: 'Workstation', generation: 9, releaseDate: '2023-08-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-08-15', endOfSales: '2025-12-31' }, specs: { processor: 'Intel Core i7-1365U', memory: '32GB DDR5', storage: '1TB NVMe SSD', display: '14" WUXGA', weight: '1.4 kg' }, biosVersion: '1.13.0', drivers: { total: 28, critical: 4, recommended: 15, optional: 9 } },
  { id: 'zbook-studio-g9', name: 'HP ZBook Studio G9', sku: '6G9G6PA', series: 'ZBook Studio', category: 'Workstation', generation: 9, releaseDate: '2023-09-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-09-15', endOfSales: '2025-12-31' }, specs: { processor: 'Intel Core i9-13900H', memory: '64GB DDR5', storage: '2TB NVMe SSD', display: '16" 4K OLED', weight: '1.8 kg' }, biosVersion: '1.14.0', drivers: { total: 38, critical: 5, recommended: 22, optional: 11 } },
  { id: 'elitedesk-800-g6-mini', name: 'HP EliteDesk 800 G6 Mini', sku: '8G8PDQ', series: 'EliteDesk 800', category: 'Desktop', generation: 6, releaseDate: '2023-04-10', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2028-04-10', endOfSales: '2025-12-31' }, specs: { processor: 'Intel Core i7-12700T', memory: '32GB DDR4', storage: '512GB NVMe SSD', display: 'N/A', weight: '1.42 kg' }, biosVersion: '1.11.0', drivers: { total: 20, critical: 3, recommended: 11, optional: 6 } },
  { id: 'spectre-x360-14', name: 'HP Spectre x360 14', sku: '9G0X3PA', series: 'Spectre', category: 'Tablet', generation: 0, releaseDate: '2024-08-15', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2029-08-15', endOfSales: '2026-12-31' }, specs: { processor: 'Intel Core Ultra 7 155H', memory: '32GB', storage: '1TB SSD', display: '13.5" 3K2K OLED', weight: '1.36 kg' }, biosVersion: '1.03.0', drivers: { total: 22, critical: 2, recommended: 12, optional: 8 } },
  { id: 'dragonfly-g4', name: 'HP Dragonfly G4', sku: '8G9Y2PA', series: 'Dragonfly', category: 'Laptop', generation: 4, releaseDate: '2024-09-10', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2029-09-10', endOfSales: '2026-12-31' }, specs: { processor: 'Intel Core Ultra 7 155V', memory: '32GB LPDDR5x', storage: '1TB NVMe SSD', display: '13.5" 2.8K OLED', weight: '0.99 kg' }, biosVersion: '1.05.0', drivers: { total: 26, critical: 3, recommended: 14, optional: 9 } },
  { id: 'pavilion-laptop-15', name: 'HP Pavilion Laptop 15', sku: 'A2HG6PA', series: 'Pavilion', category: 'Laptop', generation: 0, releaseDate: '2024-05-01', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2027-05-01', endOfSales: '2025-12-31' }, specs: { processor: 'Intel Core Ultra 5 125U', memory: '16GB DDR5', storage: '512GB NVMe SSD', display: '15.6" FHD', weight: '1.74 kg' }, biosVersion: '1.02.0', drivers: { total: 18, critical: 2, recommended: 10, optional: 6 } },
  { id: 'omen-16', name: 'HP OMEN 16', sku: 'A2HG8PA', series: 'OMEN', category: 'Laptop', generation: 0, releaseDate: '2024-07-01', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2027-07-01', endOfSales: '2025-12-31' }, specs: { processor: 'Intel Core i9-14900HX', memory: '32GB DDR5', storage: '2TB NVMe SSD', display: '16.1" QHD 240Hz', weight: '2.4 kg' }, biosVersion: '1.07.0', drivers: { total: 28, critical: 4, recommended: 15, optional: 9 } },
  { id: 'envy-x360-15', name: 'HP Envy x360 15', sku: '9G0X5PA', series: 'Envy', category: 'Tablet', generation: 0, releaseDate: '2024-08-01', status: 'active', lifecycle: { status: 'Active', endOfSupport: '2027-08-01', endOfSales: '2025-12-31' }, specs: { processor: 'AMD Ryzen 7 8845HS', memory: '16GB DDR5', storage: '1TB NVMe SSD', display: '15.6" FHD IPS', weight: '1.8 kg' }, biosVersion: '1.01.0', drivers: { total: 20, critical: 2, recommended: 11, optional: 7 } },
];

// Search function for HP Products
export function searchHPProducts(query: string): HPProduct[] {
  if (!query || query.length < 2) return [];
  const lowerQuery = query.toLowerCase();
  return hpProducts.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.series.toLowerCase().includes(lowerQuery) ||
    product.sku.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  ).slice(0, 10);
}
