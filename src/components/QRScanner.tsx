import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { QRScanResult } from '@/types';

export const QRScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string>('');
  const [codeReader] = useState(() => new BrowserMultiFormatReader());

  const startScanning = async () => {
    try {
      setError('');
      setIsScanning(true);
      
      const videoInputDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = videoInputDevices.filter(device => device.kind === 'videoinput');
      
      if (videoDevices.length === 0) {
        throw new Error('No camera devices found');
      }

      const selectedDeviceId = videoDevices[0].deviceId;

      await codeReader.decodeFromVideoDevice(selectedDeviceId, videoRef.current!, (result, error) => {
        if (result) {
          handleScanResult({ text: result.getText() });
        }
        if (error && !(error instanceof NotFoundException)) {
          console.warn('Scanner error:', error);
        }
      });
    } catch (err) {
      setError(`Camera access failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setIsScanning(false);
    }
  };

  const stopScanning = () => {
    codeReader.reset();
    setIsScanning(false);
  };

  const handleScanResult = (result: QRScanResult) => {
    const url = new URL(result.text.startsWith('http') ? result.text : `http://localhost${result.text}`);
    const type = url.searchParams.get('type');
    
    stopScanning();
    
    if (type === 'gauge') {
      navigate('/gauge');
    } else if (type === 'landing') {
      navigate('/landing');
    } else {
      setError('Invalid QR code format. Expected ?type=gauge or ?type=landing');
      setTimeout(() => setError(''), 3000);
    }
  };

  // Demo buttons for testing
  const navigateToGauge = () => navigate('/gauge');
  const navigateToLanding = () => navigate('/landing');

  useEffect(() => {
    return () => {
      stopScanning();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <Card className="w-full max-w-md p-6 space-y-6 bg-surface border-outline">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">QR Code Scanner</h1>
          <p className="text-muted-foreground">Scan a QR code to navigate</p>
        </div>

        <div className="relative aspect-square bg-surface-variant rounded-lg overflow-hidden border border-outline">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
          />
          
          {!isScanning && (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-variant/80">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-2 border-dashed border-outline rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/20 rounded"></div>
                </div>
                <p className="text-muted-foreground text-sm">Camera preview will appear here</p>
              </div>
            </div>
          )}
          
          {isScanning && (
            <div className="absolute inset-4 border-2 border-primary rounded-lg pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary rounded-br-lg"></div>
            </div>
          )}
        </div>

        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-destructive text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-3">
          <Button
            onClick={isScanning ? stopScanning : startScanning}
            className="w-full"
            variant={isScanning ? "secondary" : "default"}
          >
            {isScanning ? 'Stop Scanning' : 'Start Scanning'}
          </Button>

          <div className="border-t border-outline pt-3">
            <p className="text-xs text-muted-foreground text-center mb-3">Demo Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" onClick={navigateToGauge}>
                Gauge Page
              </Button>
              <Button variant="outline" size="sm" onClick={navigateToLanding}>
                Landing Page
              </Button>
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground space-y-1">
          <p><strong>Test QR Codes:</strong></p>
          <p>• Gauge: ?type=gauge</p>
          <p>• Landing: ?type=landing</p>
        </div>
      </Card>
    </div>
  );
};