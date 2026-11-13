import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import {
  Essay,
  HERO_IMAGE,
  OMIKUJI_LIST,
  OmikujiItem,
} from './data/tekitouData';
import { Header } from './components/Header';
import { ResilientImage } from './components/ResilientImage';
import { EssaysSection } from './components/EssaysSection';
import { TekitouTools, ToolTabId } from './components/TekitouTools';
import { RecipeSection } from './components/RecipeSection';
import { DictionarySection } from './components/DictionarySection';
import { ArticleModal } from './components/ArticleModal';

const OVERVIEW_STRIP = [
  {
    index: '01',
    title: '本来の意味',
    detail: '条件にぴったりと当てはまること',
  },
  {
    index: '02',
    title: '現代の知恵',
    detail: '100点より「70点」で続ける暮らし',
  },
  {
    index: '03',
    title: 'ゆる決め道具',
    detail: 'おみくじ・ルーレット・力み度診断',
  },
  {
    index: '04',
    title: '目分量レシピ',
    detail: '計量あり・なしの切り替えつき',
  },
];

export default function App() {
  const [activeEssay, setActiveEssay] = useState<Essay | null>(null);
  const [activeToolTab, setActiveToolTab] = useState<ToolTabId>('omikuji');
  const [currentOmikuji, setCurrentOmikuji] = useState<OmikujiItem>(OMIKUJI_LIST[0]);
  const [omikujiHistory, setOmikujiHistory] = useState<OmikujiItem[]>([
    OMIKUJI_LIST[0],
  ]);

  const drawNewOmikuji = () => {
    const candidates = OMIKUJI_LIST.filter((item) => item.id !== currentOmikuji.id);
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    setCurrentOmikuji(next);
    setOmikujiHistory((prev) => [next, ...prev].slice(0, 4));
  };

  const handleOpenDailyMotto = () => {
    setActiveToolTab('omikuji');
    drawNewOmikuji();
    const toolsEl = document.getElementById('tools');
    if (toolsEl) {
      toolsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#1F1E1C]">
      <Header onOpenDailyMotto={handleOpenDailyMotto} />

      <main className="flex-1">
        {/* Hero Split */}
        <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#E4DFD5]">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between py-1">
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#64605A] mb-4">
                    適当をめぐるWeb読みもの · 特集号
                  </p>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1F1E1C] leading-[1.3]">
                    完璧じゃなくていい。
                    <br />
                    「ちょうどいい」が、いちばん続く。
                  </h1>
                  <p className="mt-6 text-[15.5px] sm:text-base text-[#4A4640] leading-[1.85] max-w-prose">
                    「適当」とは本来、やりすぎず足りなすぎず、その場にぴったりと合うこと。
                    肩に力を入れすぎて少し疲れた日に、70点の気楽さを取り戻すための読みものと小さな道具をまとめました。
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E4DFD5] flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleOpenDailyMotto}
                    className="px-5 py-2.5 text-sm font-medium text-[#FAF8F4] bg-[#1E3A5F] hover:bg-[#162C49] rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    今日のひとことをひく
                  </button>
                  <a
                    href="#essays"
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-[#1F1E1C] hover:text-[#1E3A5F] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>特集記事を読む</span>
                    <ArrowDown className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <ResilientImage
                  src={HERO_IMAGE}
                  alt="朝の光が差し込む木製テーブルの上のほうじ茶と開きかけのノート"
                  aspectClassName="aspect-[4/3] lg:h-full"
                />
              </div>
            </div>

            {/* 4-column Overview Ribbon */}
            <div className="mt-12 pt-8 border-t border-[#E4DFD5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {OVERVIEW_STRIP.map((item) => (
                <div key={item.index} className="flex flex-col">
                  <div className="flex items-baseline gap-2 text-xs text-[#64605A] mb-1">
                    <span className="font-mono tabular-nums">{item.index}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#1F1E1C]">{item.title}</span>
                  </div>
                  <p className="text-sm text-[#4A4640] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EssaysSection onSelectEssay={setActiveEssay} />

        <TekitouTools
          activeTab={activeToolTab}
          onChangeTab={setActiveToolTab}
          currentOmikuji={currentOmikuji}
          onDrawOmikuji={drawNewOmikuji}
          omikujiHistory={omikujiHistory}
        />

        <RecipeSection />

        <DictionarySection />
      </main>

      <footer className="bg-[#F3EFE7] border-t border-[#E4DFD5] py-10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg font-bold text-[#1F1E1C]">
              てきとう日和
            </p>
            <p className="mt-1 text-xs text-[#64605A]">
              ちょうどいい塩梅で暮らすためのWeb読みもの · 今日もだいたい70点でよし
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#524E48]">
            <a href="#essays" className="hover:text-[#1F1E1C] transition-colors">
              読みもの
            </a>
            <a href="#tools" className="hover:text-[#1F1E1C] transition-colors">
              ゆる決め道具
            </a>
            <a href="#recipes" className="hover:text-[#1F1E1C] transition-colors">
              塩梅レシピ
            </a>
            <a href="#dictionary" className="hover:text-[#1F1E1C] transition-colors">
              ことば辞典
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-[#1E3A5F] hover:underline"
            >
              <span>一番上へ</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      <ArticleModal essay={activeEssay} onClose={() => setActiveEssay(null)} />
    </div>
  );
}
