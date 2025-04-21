'use client'
import React, { useState } from 'react'
import QRCode from "react-qr-code";

const QRCodeGen = () => {
  const [input,setInput] = useState<string>('')
  const [qrCode,setQRCode] = useState<string>('')

  const handleQR = () => {
    setQRCode(input)
  }
  return (
    <div>
      <h1>QR code</h1>
      <div>
        <input type="text" placeholder='Enter your value to generate the QR' name='qr-code' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleQR}>Generate</button>
      </div>
      <div>
        <QRCode value={qrCode} />
      </div>
    </div>
  )
}

export default QRCodeGen
