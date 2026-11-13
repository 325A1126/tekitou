import { useState } from 'react';
import { RECIPE_HERO_IMAGE, RECIPES } from '../data/tekitouData';
import { ResilientImage } from './ResilientImage';

type RecipeMode = 'tekitou' | 'exact';

export function RecipeSection() {
  const [mode, setMode] = useState<RecipeMode>('tekitou');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(RECIPES[0].id);

  const activeRecipe =
    RECIPES.find((recipe) => recipe.id === selectedRecipeId) ?? RECIPES[0];

  return (
    <section id="recipes" className="py-16 sm:py-24 border-b border-[#E4DFD5]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E4DFD5]">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#64605A] mb-2">
              03. 塩梅レシピ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1E1C]">
              計量スプーンを置いてつくる、だいたいのごはん
            </h2>
          </div>

          {/* Exact vs Tekitou Toggle */}
          <div
            role="group"
            aria-label="レシピの表記モード"
            className="inline-flex items-center gap-1 p-1 bg-[#EFECE6] border border-[#E4DFD5] rounded-lg self-start md:self-auto"
          >
            <button
              type="button"
              onClick={() => setMode('tekitou')}
              aria-pressed={mode === 'tekitou'}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                mode === 'tekitou'
                  ? 'bg-[#1E3A5F] text-[#FAF8F4]'
                  : 'text-[#524E48] hover:text-[#1F1E1C]'
              }`}
            >
              適当モード（目分量）
            </button>
            <button
              type="button"
              onClick={() => setMode('exact')}
              aria-pressed={mode === 'exact'}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                mode === 'exact'
                  ? 'bg-[#FFFFFF] text-[#1F1E1C] shadow-xs'
                  : 'text-[#524E48] hover:text-[#1F1E1C]'
              }`}
            >
              きっちり計量モード
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image + Recipe Selector */}
          <div className="lg:col-span-5 space-y-6">
            <ResilientImage
              src={RECIPE_HERO_IMAGE}
              alt="湯気の立つ陶器のお椀に盛られた具だくさんの豚汁"
              caption="Fig. 3 — 大根やにんじんの厚みが揃っていなくても、あたたかければ十分おいしい。"
            />

            <div className="divide-y divide-[#E4DFD5] border-y border-[#E4DFD5]">
              {RECIPES.map((recipe) => {
                const isSelected = recipe.id === activeRecipe.id;
                return (
                  <button
                    key={recipe.id}
                    type="button"
                    onClick={() => setSelectedRecipeId(recipe.id)}
                    className={`w-full text-left py-4 px-3 transition-colors flex items-center justify-between gap-4 cursor-pointer ${
                      isSelected
                        ? 'bg-[#EFECE6] text-[#1F1E1C]'
                        : 'hover:bg-[#F4F0E8] text-[#4A4640]'
                    }`}
                  >
                    <div>
                      <p className="font-serif text-base font-semibold text-[#1F1E1C]">
                        {recipe.title}
                      </p>
                      <p className="text-xs text-[#64605A] mt-0.5">
                        {recipe.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#1E3A5F] whitespace-nowrap shrink-0">
                      {isSelected ? '表示中' : '見る'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Recipe Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E4DFD5] rounded-lg p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-5 border-b border-[#E4DFD5]">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1F1E1C]">
                  {activeRecipe.title}
                </h3>
                <p className="text-sm text-[#524E48] mt-1">
                  {activeRecipe.subtitle}
                </p>
              </div>
              <span className="text-xs text-[#64605A] whitespace-nowrap shrink-0">
                {activeRecipe.prepNote}
              </span>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#1F1E1C] mb-3">
                材料（{mode === 'tekitou' ? 'だいたいの目安' : '計量の目安'}）
              </h4>
              <dl className="divide-y divide-[#EFECE6] border-t border-b border-[#EFECE6]">
                {activeRecipe.ingredients.map((item) => (
                  <div
                    key={item.name}
                    className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                  >
                    <dt className="text-sm font-medium text-[#1F1E1C] shrink-0">
                      {item.name}
                    </dt>
                    <dd className="text-sm text-[#4A4640] sm:text-right">
                      {mode === 'tekitou' ? item.tekitou : item.exact}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-[#1F1E1C] mb-3">
                つくり方
              </h4>
              <ol className="space-y-4">
                {activeRecipe.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3.5 items-baseline">
                    <span className="font-mono tabular-nums text-xs font-medium text-[#1E3A5F] shrink-0">
                      0{idx + 1}.
                    </span>
                    <p className="text-[15px] text-[#292724] leading-[1.8]">
                      {mode === 'tekitou' ? step.tekitou : step.exact}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 pt-5 border-t border-[#EFECE6] text-xs sm:text-sm text-[#64605A]">
              メモ：{activeRecipe.closingNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
