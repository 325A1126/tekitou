import { useState } from 'react';
import { Plus, RotateCcw, Shuffle, Trash2 } from 'lucide-react';
import {
  DECISION_PRESETS,
  OMIKUJI_LIST,
  OmikujiItem,
} from '../data/tekitouData';

export type ToolTabId = 'omikuji' | 'roulette' | 'balance';

interface TekitouToolsProps {
  activeTab: ToolTabId;
  onChangeTab: (tab: ToolTabId) => void;
  currentOmikuji: OmikujiItem;
  onDrawOmikuji: () => void;
  omikujiHistory: OmikujiItem[];
}

export function TekitouTools({
  activeTab,
  onChangeTab,
  currentOmikuji,
  onDrawOmikuji,
  omikujiHistory,
}: TekitouToolsProps) {
  // Decision Roulette State
  const [selectedPresetId, setSelectedPresetId] = useState<string>(DECISION_PRESETS[0].id);
  const [options, setOptions] = useState<string[]>(DECISION_PRESETS[0].options);
  const [newOption, setNewOption] = useState<string>('');
  const [pickedOption, setPickedOption] = useState<string | null>(null);

  // Balance Check State (0 = relaxed, 100 = tense)
  const [perfectionism, setPerfectionism] = useState<number>(65);
  const [scheduleDensity, setScheduleDensity] = useState<number>(60);
  const [worryAboutOthers, setWorryAboutOthers] = useState<number>(50);

  const handleSelectPreset = (presetId: string) => {
    const preset = DECISION_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setSelectedPresetId(presetId);
    setOptions(preset.options);
    setPickedOption(null);
  };

  const handleAddOption = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newOption.trim();
    if (!trimmed) return;
    if (options.includes(trimmed)) {
      setNewOption('');
      return;
    }
    setOptions((prev) => [...prev, trimmed]);
    setNewOption('');
  };

  const handleRemoveOption = (indexToRemove: number) => {
    setOptions((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    setPickedOption(null);
  };

  const handlePickDecision = () => {
    if (options.length === 0) return;
    const candidates =
      options.length > 1 && pickedOption
        ? options.filter((opt) => opt !== pickedOption)
        : options;
    const randomIndex = Math.floor(Math.random() * candidates.length);
    setPickedOption(candidates[randomIndex]);
  };

  const tensionAverage = Math.round(
    (perfectionism + scheduleDensity + worryAboutOthers) / 3
  );
  const tekitouScore = 100 - tensionAverage;

  const getBalanceDiagnosis = (score: number) => {
    if (score >= 70) {
      return {
        label: 'ちょうどいい達人',
        summary: '肩の力がほどよく抜けて、日々の風通しがよい状態です。',
        tip: 'その調子で、たまには少し背伸びしたい日だけ気合を入れるくらいが心地よいです。',
      };
    }
    if (score >= 40) {
      return {
        label: 'だいたい健やか',
        summary: '真面目さと気楽さのバランスが取れています。少しだけ慎重な日かもしれません。',
        tip: '今日やるべきリストから「実は明日でも困らないもの」をひとつだけ外してみましょう。',
      };
    }
    return {
      label: 'ちょっと力みすぎかも',
      summary: 'きちんとこなそうとするあまり、心の余白が少なくなっているようです。',
      tip: '今日は「70点でよし」「返信は短くてもよし」を合言葉に、早めにお茶を淹れましょう。',
    };
  };

  const diagnosis = getBalanceDiagnosis(tekitouScore);

  return (
    <section id="tools" className="py-16 sm:py-24 bg-[#F3EFE7] border-b border-[#E4DFD5]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D8D1C4]">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#64605A] mb-2">
              02. ゆる決め道具
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C]">
              迷う時間を短くする、気楽な道具箱
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="ゆる決め道具の切り替え"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#E7E1D6] border border-[#D8D1C4] rounded-lg self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'omikuji'}
              onClick={() => onChangeTab('omikuji')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'omikuji'
                  ? 'bg-[#FFFFFF] text-[#1F1E1C] shadow-xs'
                  : 'text-[#524E48] hover:text-[#1F1E1C]'
              }`}
            >
              今日のおみくじ
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'roulette'}
              onClick={() => onChangeTab('roulette')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'roulette'
                  ? 'bg-[#FFFFFF] text-[#1F1E1C] shadow-xs'
                  : 'text-[#524E48] hover:text-[#1F1E1C]'
              }`}
            >
              ゆる決めルーレット
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'balance'}
              onClick={() => onChangeTab('balance')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'balance'
                  ? 'bg-[#FFFFFF] text-[#1F1E1C] shadow-xs'
                  : 'text-[#524E48] hover:text-[#1F1E1C]'
              }`}
            >
              力み具合チェック
            </button>
          </div>
        </div>

        <div className="mt-10 bg-[#FFFFFF] border border-[#E4DFD5] rounded-lg p-6 sm:p-10">
          {/* Tab 1: Omikuji */}
          {activeTab === 'omikuji' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs text-[#64605A] mb-3">
                  今日のひとこと · 全<span className="font-mono tabular-nums">{OMIKUJI_LIST.length}</span>種
                </p>
                <div className="p-6 sm:p-8 bg-[#FAF8F4] border border-[#E4DFD5] rounded-lg">
                  <p className="text-sm font-medium text-[#1E3A5F] mb-2">
                    {currentOmikuji.luck}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] leading-snug">
                    {currentOmikuji.message}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#4A4640] leading-[1.8]">
                    {currentOmikuji.advice}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={onDrawOmikuji}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#FAF8F4] bg-[#1E3A5F] hover:bg-[#162C49] rounded-md transition-colors cursor-pointer"
                  >
                    <Shuffle className="w-4 h-4" aria-hidden="true" />
                    <span>もう一枚ひく</span>
                  </button>
                  <span className="text-xs text-[#64605A]">
                    気に入った言葉が出たら、そこでやめても大丈夫です。
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#E4DFD5] pt-6 lg:pt-0 lg:pl-8">
                <h4 className="text-sm font-semibold text-[#1F1E1C] mb-4">
                  さきほど引いた言葉
                </h4>
                <ul className="divide-y divide-[#EFECE6]">
                  {omikujiHistory.map((item, idx) => (
                    <li key={`${item.id}-${idx}`} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-xs text-[#64605A] mb-0.5">{item.luck}</p>
                      <p className="text-sm text-[#1F1E1C]">{item.message}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 2: Decision Roulette */}
          {activeTab === 'roulette' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-[#1F1E1C] mb-3">
                    テーマを選ぶ
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {DECISION_PRESETS.map((preset) => {
                      const active = selectedPresetId === preset.id;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => handleSelectPreset(preset.id)}
                          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            active
                              ? 'bg-[#1E3A5F] text-[#FAF8F4] border-[#1E3A5F]'
                              : 'bg-[#FAF8F4] text-[#4A4640] border-[#D8D1C4] hover:border-[#1E3A5F]'
                          }`}
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1F1E1C] mb-2">
                    候補リスト（<span className="font-mono tabular-nums">{options.length}</span>件）
                  </p>
                  <ul className="divide-y divide-[#EFECE6] border border-[#E4DFD5] rounded-md bg-[#FAF8F4] px-4">
                    {options.length === 0 ? (
                      <li className="py-4 text-sm text-[#64605A]">
                        候補が空です。下の入力欄から追加してみてください。
                      </li>
                    ) : (
                      options.map((option, idx) => (
                        <li
                          key={`${option}-${idx}`}
                          className="py-2.5 flex items-center justify-between gap-3"
                        >
                          <span className="text-sm text-[#1F1E1C]">{option}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveOption(idx)}
                            aria-label={`${option} を削除`}
                            className="p-1.5 text-[#64605A] hover:text-[#9A3412] rounded transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </li>
                      ))
                    )}
                  </ul>

                  <form onSubmit={handleAddOption} className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                      placeholder="迷っている選択肢を追加..."
                      aria-label="新しい候補を入力"
                      className="flex-1 min-w-0 px-3.5 py-2 text-sm bg-[#FFFFFF] border border-[#D8D1C4] rounded-md text-[#1F1E1C] placeholder:text-[#8A847A] focus:outline-none focus:border-[#1E3A5F]"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-[#EFECE6] hover:bg-[#E4DFD5] text-[#1F1E1C] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                      <span>追加</span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 bg-[#FAF8F4] border border-[#E4DFD5] rounded-lg min-h-[280px]">
                <div>
                  <p className="text-xs text-[#64605A] mb-2">選んだ結果</p>
                  {pickedOption ? (
                    <>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C] leading-snug">
                        「{pickedOption}」でよし。
                      </h3>
                      <p className="mt-3 text-sm text-[#4A4640] leading-relaxed">
                        もし一瞬「やっぱり別のほうがいいかも」と思ったら、それも大事な自分の本音です。やり直しても構いません。
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#524E48]">
                        迷ったら、いったん任せてみる。
                      </h3>
                      <p className="mt-3 text-sm text-[#64605A] leading-relaxed">
                        左の候補からひとつだけ気楽に選びます。決断のエネルギーを温存しましょう。
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePickDecision}
                    disabled={options.length === 0}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#FAF8F4] bg-[#1E3A5F] hover:bg-[#162C49] disabled:opacity-40 rounded-md transition-colors cursor-pointer"
                  >
                    <Shuffle className="w-4 h-4" aria-hidden="true" />
                    <span>{pickedOption ? '選びなおす' : 'ひとつ決める'}</span>
                  </button>
                  {pickedOption && (
                    <button
                      type="button"
                      onClick={() => setPickedOption(null)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[#524E48] hover:text-[#1F1E1C] hover:bg-[#EFECE6] rounded-md transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      <span>リセット</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Balance Check */}
          {activeTab === 'balance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <label htmlFor="slider-perfectionism" className="font-medium text-[#1F1E1C]">
                      今日の「ちゃんとしなきゃ」度
                    </label>
                    <span className="font-mono tabular-nums text-xs text-[#64605A]">
                      {perfectionism} / 100
                    </span>
                  </div>
                  <input
                    id="slider-perfectionism"
                    type="range"
                    min={0}
                    max={100}
                    value={perfectionism}
                    onChange={(e) => setPerfectionism(Number(e.target.value))}
                    className="w-full accent-[#1E3A5F] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#64605A] mt-1">
                    <span>まあ70点でよし</span>
                    <span>100点でないと落ち着かない</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <label htmlFor="slider-schedule" className="font-medium text-[#1F1E1C]">
                      予定のぎっしり度
                    </label>
                    <span className="font-mono tabular-nums text-xs text-[#64605A]">
                      {scheduleDensity} / 100
                    </span>
                  </div>
                  <input
                    id="slider-schedule"
                    type="range"
                    min={0}
                    max={100}
                    value={scheduleDensity}
                    onChange={(e) => setScheduleDensity(Number(e.target.value))}
                    className="w-full accent-[#1E3A5F] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#64605A] mt-1">
                    <span>余白がたっぷりある</span>
                    <span>分単位で埋まっている</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <label htmlFor="slider-worry" className="font-medium text-[#1F1E1C]">
                      まわりへの気遣い・気疲れ度
                    </label>
                    <span className="font-mono tabular-nums text-xs text-[#64605A]">
                      {worryAboutOthers} / 100
                    </span>
                  </div>
                  <input
                    id="slider-worry"
                    type="range"
                    min={0}
                    max={100}
                    value={worryAboutOthers}
                    onChange={(e) => setWorryAboutOthers(Number(e.target.value))}
                    className="w-full accent-[#1E3A5F] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#64605A] mt-1">
                    <span>マイペースで気楽</span>
                    <span>どう見られるかずっと気になる</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 bg-[#FAF8F4] border border-[#E4DFD5] rounded-lg">
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#E4DFD5]">
                  <div>
                    <p className="text-xs text-[#64605A]">いまのちょうどよさ</p>
                    <h3 className="font-serif text-2xl font-semibold text-[#1F1E1C] mt-1">
                      {diagnosis.label}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-mono tabular-nums text-3xl font-medium text-[#1E3A5F]">
                      {tekitouScore}
                    </span>
                    <span className="text-xs text-[#64605A] ml-1">%</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#292724] leading-[1.8]">
                  {diagnosis.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-[#E4DFD5]">
                  <p className="text-xs font-medium text-[#1E3A5F] mb-1">
                    今日の一歩
                  </p>
                  <p className="text-sm text-[#4A4640] leading-[1.75]">
                    {diagnosis.tip}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
