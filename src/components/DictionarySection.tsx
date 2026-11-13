import { useState } from 'react';
import { Search } from 'lucide-react';
import { DICTIONARY_WORDS, DictionaryWord } from '../data/tekitouData';

type DictFilter = 'すべて' | DictionaryWord['category'];

const DICT_FILTERS: DictFilter[] = ['すべて', '程度・加減', '気質・態度', '流れ・時間'];

export function DictionarySection() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<DictFilter>('すべて');

  const filteredWords = DICTIONARY_WORDS.filter((item) => {
    const matchesCategory = filter === 'すべて' || item.category === filter;
    const trimmed = query.trim();
    const matchesQuery =
      trimmed === '' ||
      item.word.includes(trimmed) ||
      item.reading.includes(trimmed) ||
      item.meaning.includes(trimmed) ||
      item.nuance.includes(trimmed);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="dictionary" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E4DFD5]">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#64605A] mb-2">
              04. ことば辞典
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C]">
              暮らしをやわらかくする日本語たち
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#64605A] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ことばや意味で探す..."
                aria-label="ことば辞典を検索"
                className="w-full sm:w-56 pl-9 pr-3 py-2 text-sm bg-[#FFFFFF] border border-[#D8D1C4] rounded-md text-[#1F1E1C] placeholder:text-[#8A847A] focus:outline-none focus:border-[#1E3A5F]"
              />
            </div>

            <div
              role="tablist"
              aria-label="言葉の分類"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFECE6] border border-[#E4DFD5] rounded-lg"
            >
              {DICT_FILTERS.map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#FFFFFF] text-[#1F1E1C] shadow-xs'
                        : 'text-[#524E48] hover:text-[#1F1E1C]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {filteredWords.length === 0 ? (
          <div className="py-16 text-center text-sm text-[#64605A]">
            該当することばが見つかりませんでした。検索条件を変えてみてください。
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {filteredWords.map((entry) => (
              <div
                key={entry.word}
                className="py-7 border-b border-[#E4DFD5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1F1E1C]">
                        {entry.word}
                      </h3>
                      <span className="text-xs text-[#64605A]">{entry.reading}</span>
                    </div>
                    <span className="text-xs text-[#64605A] shrink-0">
                      {entry.category}
                    </span>
                  </div>

                  <p className="mt-3 text-sm sm:text-[15px] text-[#292724] leading-[1.8]">
                    {entry.meaning}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-[#524E48] leading-relaxed">
                    {entry.nuance}
                  </p>
                </div>

                <p className="mt-3 text-xs font-serif text-[#64605A]">
                  例文：{entry.example}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
