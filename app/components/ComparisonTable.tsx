'use client';

import { ProductSpecs } from '../data/mockData';

interface ComparisonTableProps {
  products: Record<string, ProductSpecs>;
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  const productNames = Object.keys(products);
  const specs = ['processor', 'memory', 'storage', 'display', 'weight'];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-3 bg-gray-50 text-gray-600 font-semibold text-sm border-b border-gray-200">
              Specification
            </th>
            {productNames.map((name) => (
              <th key={name} className="p-3 bg-gray-50 text-[#0A1F44] font-semibold text-sm border-b border-gray-200 text-center">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr key={spec} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 text-gray-600 text-sm font-medium capitalize border-b border-gray-100">
                {spec}
              </td>
              {productNames.map((name) => (
                <td key={`${name}-${spec}`} className="p-3 text-gray-800 text-sm text-center border-b border-gray-100">
                  {products[name][spec as keyof ProductSpecs]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
