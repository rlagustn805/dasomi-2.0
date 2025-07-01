'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';
import Link from 'next/link';

const PROMPT_KEY = 'appInstallPromptLastShown';
const TWO_MONTHS_MS = 1000 * 60 * 60 * 24 * 60;

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

const isInStandaloneMode = () =>
  'standalone' in window.navigator && (window.navigator as any).standalone;

const shouldShowPrompt = (): boolean => {
  if (typeof window === 'undefined') return false;

  const lastShown = localStorage.getItem(PROMPT_KEY);
  if (!lastShown) return true;

  const lastDate = new Date(lastShown).getTime();
  const now = Date.now();
  return now - lastDate > TWO_MONTHS_MS;
};

export default function AppInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIosPromptVisible, setIsIosPromptVisible] = useState(false);

  useEffect(() => {
    if (!shouldShowPrompt()) return;

    const now = new Date().toISOString();
    localStorage.setItem(PROMPT_KEY, now);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    if (isIos() && !isInStandaloneMode()) {
      setIsIosPromptVisible(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    deferredPrompt.prompt();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      setShowInstallPrompt(false);
    }
  };

  return (
    <>
      <Dialog open={showInstallPrompt} onOpenChange={setShowInstallPrompt}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">앱으로 시작하기</DialogTitle>
            <DialogDescription>
              앱으로 시작하여 보다 친화적으로 이용할 수 있어요.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="default" onClick={handleInstallClick}>
              설치하기
            </Button>
            <Button variant="ghost" onClick={() => setShowInstallPrompt(false)}>
              나중에
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isIosPromptVisible} onOpenChange={setIsIosPromptVisible}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">앱으로 시작하기</DialogTitle>
            <DialogDescription className="text-sm text-wrap">
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                하단의 <Share size={16} className="inline-block" /> 버튼을 누른
                뒤 <strong>“홈 화면에 추가”</strong>
              </span>
              하여 보다 친화적으로 이용할 수 있어요.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">
              <Link href="/start">자세히 보기</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
