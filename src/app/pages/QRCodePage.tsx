import { DashboardLayout } from '../components/DashboardLayout';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Copy, ExternalLink, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';

export function QRCodePage() {
  const [copied, setCopied] = useState(false);
  const menuUrl = 'https://cardapio.dongiovanni.com.br';
  const qrWrapperRef = useRef<HTMLDivElement>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(menuUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    const canvas = qrWrapperRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'qrcode-cardapio.png';
      link.href = url;
      link.click();
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="font-['Poppins'] font-bold text-3xl text-[#111827] mb-2">
            QR Code do cardápio
          </h1>
          <p className="text-[#64748B]">
            Compartilhe o link ou baixe o QR Code para imprimir
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
              QR Code
            </h2>
            <div className="flex flex-col items-center">
              <div ref={qrWrapperRef} className="bg-white p-8 rounded-xl border-2 border-[#E2E8F0] mb-6">
                <QRCodeCanvas
                  value={menuUrl}
                  size={280}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <Button variant="primary" onClick={handleDownloadQR} fullWidth>
                <Download className="w-5 h-5 mr-2" />
                Baixar QR Code
              </Button>
              <p className="text-sm text-[#64748B] mt-4 text-center">
                Imprima e cole nas mesas do seu restaurante
              </p>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-6">
                Link do cardápio
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    URL pública
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={menuUrl}
                      readOnly
                      className="flex-1 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#111827] font-mono text-sm"
                    />
                    <Button variant="outline" size="sm" onClick={handleCopyLink}>
                      {copied ? <CheckCircle className="w-5 h-5 text-[#16A34A]" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </div>
                  {copied && (
                    <p className="text-sm text-[#16A34A] mt-2">Link copiado!</p>
                  )}
                </div>

                <a
                  href={menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="outline" fullWidth>
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Abrir cardápio público
                  </Button>
                </a>
              </div>
            </Card>

            <Card>
              <h2 className="font-['Poppins'] font-bold text-xl text-[#111827] mb-4">
                Como usar
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#FEE2E2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#DC2626] font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#111827]">Baixe o QR Code</p>
                    <p className="text-sm text-[#64748B] mt-1">
                      Salve a imagem em alta qualidade
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#FEE2E2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#DC2626] font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#111827]">Imprima</p>
                    <p className="text-sm text-[#64748B] mt-1">
                      Recomendamos tamanho A5 ou maior
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#FEE2E2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#DC2626] font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#111827]">Posicione nas mesas</p>
                    <p className="text-sm text-[#64748B] mt-1">
                      Clientes escaneiam e acessam o cardápio
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="!bg-[#DBEAFE]">
              <h3 className="font-medium text-[#111827] mb-3">Dica profissional</h3>
              <p className="text-sm text-[#64748B]">
                Adicione uma chamada como "Escaneie para ver nosso cardápio" próximo ao QR Code para incentivar o uso.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
