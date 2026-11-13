import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ESSAYS, Essay, EssayCategory } from '../data/tekitouData';
import { ResilientImage } from './ResilientImage';

interface EssaysSectionProps {
  onSelectEssay: (essay: Essay) => void;
}

const CATEGORIES: EssayCategory[] = ['すべて', '言葉の由来', '暮らしの知恵', '仕事の塩梅'];

export function EssaysSection({ onSelectEssay }: EssaysSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<EssayCategory>('すべて');

  const filteredEssays =
    selectedCategory === 'すべて'
      ? ESSAYS
      : ESSAYS.filter((essay) => essay.category === selectedCategory);

  const leadEssay = filteredEssays[0];
  const secondaryEssays = filteredEssays.slice(1);

  return (
    <section id="essays" className="py-16 sm:py-24 border-b border-[#E4DFD5]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E4DFD5]">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#64605A] mb-2">
              01. 特集読みもの
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C]">
              「ちょうどいい」を取り戻す読みもの
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="記事カテゴリー絞り込み"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE6] border border-[#E4DFD5] rounded-lg self-start md:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#1F1E1C] shadow-xs'
                      : 'text-[#524E48] hover:text-[#1F1E1C]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tier 1: Lead Story */}
        {leadEssay && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pb-12 border-b border-[#E4DFD5]">
            <div className="lg:col-span-6">
              {leadEssay.image ? (
                <div className="h-full">
                  <ResilientImage
                    src={leadEssay.image}
                    alt={leadEssay.imageAlt ?? leadEssay.title}
                    aspectClassName="aspect-[4/3] lg:h-full"
                  />
                </div>
              ) : (
                <div className="h-full min-h-[240px] bg-[#EFECE6] border border-[#E4DFD5] p-8 flex flex-col justify-between">
                  <span className="font-mono tabular-nums text-xs text-[#64605A]">
                    No. {leadEssay.indexLabel}
                  </span>
                  <p className="font-serif text-xl text-[#1F1E1C] leading-relaxed">
                    「{leadEssay.pullQuote}」
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between py-1">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#64605A] mb-3">
                  <span className="font-mono tabular-nums">{leadEssay.indexLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadEssay.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadEssay.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadEssay.updatedAt}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] leading-snug">
                  {leadEssay.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-[#524E48]">
                  {leadEssay.subtitle}
                </p>
                <p className="mt-5 text-[15px] sm:text-base text-[#292724] leading-[1.85] max-w-prose">
                  {leadEssay.summary}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-[#E4DFD5]">
                <span className="text-xs text-[#64605A] truncate">
                  {leadEssay.marginNote}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectEssay(leadEssay)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1E3A5F] hover:bg-[#EFECE6] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>記事を読む</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tier 2: Secondary Stories */}
        {secondaryEssays.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryEssays.map((essay) => (
              <article
                key={essay.id}
                className="flex flex-col justify-between bg-[#FFFFFF] border border-[#E4DFD5] rounded-lg p-6 transition-colors duration-150 hover:border-[#BDB4A4]"
              >
                <div>
                  {essay.image && (
                    <div className="mb-5">
                      <ResilientImage
                        src={essay.image}
                        alt={essay.imageAlt ?? essay.title}
                        aspectClassName="aspect-[4/3]"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs text-[#64605A] mb-2.5">
                    <span className="font-mono tabular-nums">{essay.indexLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{essay.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{essay.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F1E1C] leading-snug">
                    {essay.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4A4640] leading-[1.75]">
                    {essay.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFECE6]">
                  <button
                    type="button"
                    onClick={() => onSelectEssay(essay)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E3A5F] hover:underline cursor-pointer"
                  >
                    <span>続きを読む</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
