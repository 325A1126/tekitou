import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenDailyMotto: () => void;
}

const NAV_LINKS = [
  { href: '#essays', label: '読みもの' },
  { href: '#tools', label: 'ゆる決め道具' },
  { href: '#recipes', label: '塩梅レシピ' },
  { href: '#dictionary', label: 'ことば辞典' },
];

export function Header({ onOpenDailyMotto }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-sm border-b border-[#E4DFD5]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#1F1E1C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A5F]"
        >
          てきとう日和
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="主要メニュー"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#524E48]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:text-[#1F1E1C] hover:border-[#1E3A5F] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A5F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenDailyMotto}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-[#FAF8F4] bg-[#1E3A5F] hover:bg-[#162C49] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F]"
          >
            今日のひとこと
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'メニューを閉じる' : 'メニューを開く'}
            className="md:hidden p-2 text-[#1F1E1C] hover:bg-[#EFECE6] rounded-md transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="モバイルメニュー"
          className="md:hidden border-t border-[#E4DFD5] bg-[#FAF8F4] px-5 py-3 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-2 text-sm font-medium text-[#1F1E1C] hover:bg-[#EFECE6] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
