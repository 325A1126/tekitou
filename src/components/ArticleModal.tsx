import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Essay } from '../data/tekitouData';
import { ResilientImage } from './ResilientImage';

interface ArticleModalProps {
  essay: Essay | null;
  onClose: () => void;
}

export function ArticleModal({ essay, onClose }: ArticleModalProps) {
  useEffect(() => {
    if (!essay) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [essay, onClose]);

  if (!essay) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1E1C]/50 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <article
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF8F4] border border-[#D8D1C4] rounded-lg shadow-xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E4DFD5]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#64605A] mb-3">
              <span className="font-mono tabular-nums">{essay.indexLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{essay.category}</span>
              <span aria-hidden="true">·</span>
              <span>{essay.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{essay.updatedAt}</span>
            </div>
            <h2
              id="article-modal-title"
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] leading-snug"
            >
              {essay.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#524E48]">
              {essay.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="記事を閉じる"
            className="shrink-0 p-2 rounded-md text-[#524E48] hover:text-[#1F1E1C] hover:bg-[#EFECE6] transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#1E3A5F]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 space-y-6 max-w-prose">
          {essay.image && (
            <div className="mb-8">
              <ResilientImage
                src={essay.image}
                alt={essay.imageAlt ?? essay.title}
                caption={essay.imageCaption}
              />
            </div>
          )}

          {essay.paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[15.5px] sm:text-base text-[#292724] leading-[1.9]"
            >
              {paragraph}
            </p>
          ))}

          <blockquote className="my-8 py-6 border-y border-[#D8D1C4] font-serif text-lg sm:text-xl text-[#1F1E1C] leading-relaxed">
            「{essay.pullQuote.replace(/^「|」$/g, '')}」
          </blockquote>

          <aside className="p-5 bg-[#EFECE6] border border-[#E4DFD5] rounded-md text-sm text-[#4A4640] leading-relaxed">
            {essay.marginNote}
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E4DFD5] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-[#FAF8F4] bg-[#1E3A5F] hover:bg-[#162C49] rounded-md transition-colors cursor-pointer"
          >
            読み終えて戻る
          </button>
        </div>
      </article>
    </div>
  );
}
