'use client';

import { useState } from 'react';
import { CommandPalette, CommandPaletteTrigger } from './CommandPalette';
import { DigitalPassport, PassportScannerTrigger } from './DigitalPassport';

export function FloatingTriggers() {
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [showPassport, setShowPassport] = useState(false);

  return (
    <>
      <CommandPaletteTrigger onClick={() => setShowCommandPalette(true)} />
      <PassportScannerTrigger onClick={() => setShowPassport(true)} />
      
      <CommandPalette 
        isOpen={showCommandPalette} 
        onClose={() => setShowCommandPalette(false)} 
      />
      
      {showPassport && (
        <DigitalPassport 
          deviceId="demo"
          onClose={() => setShowPassport(false)} 
          autoScan={true}
        />
      )}
    </>
  );
}
