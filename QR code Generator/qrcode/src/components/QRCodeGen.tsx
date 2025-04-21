'use client';
import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGen: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [qrCode, setQRCode] = useState<string>('');

  const handleQR = () => {
    setQRCode(input);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">QR Code Generator</h1>
        
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your value"
            name="qr-code"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleQR}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium transition-all"
          >
            Generate QR Code
          </button>
        </div>

        {qrCode && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-4 rounded-lg border">
              <QRCode value={qrCode} size={180} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGen;
