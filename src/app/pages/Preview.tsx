import { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Button } from '../components/Button';
import { Monitor, Smartphone } from 'lucide-react';
import { CardapioPublico } from './CardapioPublico';

export function Preview() {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
              Preview do cardápio
            </h1>
            <p className="text-[#64748B]">
              Visualize como seu cardápio aparece para os clientes
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-white border border-[#E2E8F0] rounded-lg p-1">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                device === 'desktop'
                  ? 'bg-[#DC2626] text-white'
                  : 'text-[#64748B] hover:text-[#111827]'
              }`}
            >
              <Monitor className="w-5 h-5" />
              <span className="font-medium">Desktop</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                device === 'mobile'
                  ? 'bg-[#DC2626] text-white'
                  : 'text-[#64748B] hover:text-[#111827]'
              }`}
            >
              <Smartphone className="w-5 h-5" />
              <span className="font-medium">Mobile</span>
            </button>
          </div>
        </div>

        <div className="bg-[#E2E8F0] rounded-xl p-8 flex items-center justify-center min-h-[600px]">
          <div
            className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all ${
              device === 'mobile' ? 'w-[375px]' : 'w-full max-w-6xl'
            }`}
            style={{ height: device === 'mobile' ? '667px' : 'auto' }}
          >
            <div className={device === 'mobile' ? 'overflow-y-auto h-full' : ''}>
              <CardapioPublico isPreview />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
