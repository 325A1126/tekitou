import heroMorningImg from '../assets/images/hero_tekitou_morning_1794542712735.jpg';
import essayOriginImg from '../assets/images/essay_origin_ink_1794542714201.jpg';
import essayLivingImg from '../assets/images/essay_living_room_1794542713088.jpg';
import recipeTonjiruImg from '../assets/images/recipe_tonjiru_bowl_1794542713846.jpg';

export const HERO_IMAGE = heroMorningImg;
export const RECIPE_HERO_IMAGE = recipeTonjiruImg;

export type EssayCategory = 'すべて' | '言葉の由来' | '暮らしの知恵' | '仕事の塩梅';

export interface Essay {
  id: string;
  indexLabel: string;
  category: Exclude<EssayCategory, 'すべて'>;
  title: string;
  subtitle: string;
  readTime: string;
  updatedAt: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  summary: string;
  pullQuote: string;
  marginNote: string;
  paragraphs: string[];
}

export const ESSAYS: Essay[] = [
  {
    id: 'origin-of-tekitou',
    indexLabel: '01',
    category: '言葉の由来',
    title: '「適当」はもともと、最高の褒め言葉だった。',
    subtitle: '「あてはまる」と「いい加減」のあいだにある日本語の余白',
    readTime: '読了 3分',
    updatedAt: '2026年11月',
    image: essayOriginImg,
    imageAlt: '石の筆置きに載せられた竹の筆と手漉き和紙',
    imageCaption: 'Fig. 1 — 墨の濃淡のように、ちょうどよさは数値では測れない。',
    summary:
      '辞書をひらくと、最初の語釈は「ある条件にぴったりあてはまること」。なぜ私たちはいつしか「手抜き」の意味でも使うようになったのか。その背景をたどります。',
    pullQuote: '「ほどよい」を突き詰めると、そこにはいつも少しの余白が残る。',
    marginNote:
      'メモ：江戸時代の料理書では「塩加減、適当にせよ」は「腕の見せどころとして最もふさわしい量にせよ」という専門的な指示でした。',
    paragraphs: [
      '「あの人の仕事は適当だね」と言われたとき、現代の私たちはつい身構えてしまいます。雑で無責任、あるいは手を抜いている——そんな響きを感じ取る人が多いからです。',
      'けれど国語辞典を開くと、「適当」のいちばん上に書かれているのは「性質・状態・要求などに、程度がよく合っていること。ふさわしいこと」という意味です。つまり本来の「適当」は、過不足がなく、まさにぴったりであること。',
      'ではなぜ、正反対にも見える「いい加減」という意味が広がったのでしょうか。一説には、「お任せします」「ほどほどで」といった柔らかな譲歩の場面で「適当にやっておいて」と使われるうちに、「厳密に決めなくてもよい」「だいたいで構わない」というニュアンスが前面に出てきたためと言われています。',
      '興味深いのは、どちらの意味にも共通して「100点満点の厳格さを押しつけない」という知恵が流れていることです。相手や状況に合わせて加減を変える力。それこそが、暮らしを息苦しくしない「適当」の正体なのかもしれません。',
    ],
  },
  {
    id: 'seventy-percent-living',
    indexLabel: '02',
    category: '暮らしの知恵',
    title: '毎日を70点で回すほうが、生活は美しく整う。',
    subtitle: '片付けも自炊も「続きやすさ」を基準にしてみる',
    readTime: '読了 4分',
    updatedAt: '2026年11月',
    image: essayLivingImg,
    imageAlt: '午後の陽が差し込む畳の部屋とリネンの丸座布団、読みかけの本',
    imageCaption: 'Fig. 2 — 完璧に片付いた部屋より、すぐ腰を下ろせる余白がある部屋。',
    summary:
      '100点を目指して3日で息切れするより、70点の日を淡々と重ねる。無理のない暮らしのリズムをつくるための小さな工夫をまとめました。',
    pullQuote: '「今日はこれでよし」と区切れる人ほど、明日も機嫌よく始められる。',
    marginNote:
      '70点の目安：机の上にマグカップがひとつ残っていても、パソコンが開けるなら合格。洗濯物は畳まずカゴにしまっても生活は回る。',
    paragraphs: [
      '丁寧な暮らしに憧れて収納ボックスを買い揃えた週末ほど、月曜日の夜に疲れがどっと押し寄せてくることがあります。基準を100点に設定すると、たった一つのほころびで「もう全部だめだ」と感じてしまうからです。',
      'そこで提案したいのが、暮らしの合格ラインを「70点」に下げてみることです。たとえば夕食なら、一汁三菜ではなく具だくさんの味噌汁とごはんだけ。掃除なら、部屋全体ではなく「床の見える部分だけコロコロをかける」。',
      '不思議なことに、70点で納得できるようになると、心に小さな余裕が生まれます。その余裕があるから、気力のある休日には自然と90点や100点に手が届く日もやってきます。',
      '「ちゃんとしなきゃ」という口ぐせを、「ま、このくらいでちょうどいいか」に置き換えてみる。すると日々の景色の角が取れて、驚くほど歩きやすくなります。',
    ],
  },
  {
    id: 'work-balance-tekitou',
    indexLabel: '03',
    category: '仕事の塩梅',
    title: '段取りの3割を「余白」に残しておく技術。',
    subtitle: '詰め込みすぎないスケジュールが、結局いちばん早い理由',
    readTime: '読了 3分',
    updatedAt: '2026年10月',
    summary:
      '予定を分単位で埋めると、ひとつの遅れが一日中を引きずります。あえて「決めきらない時間」を置くことで、仕事の質と心の軽さを保つ考え方。',
    pullQuote: '予定表の白いマスは、怠けではなく緩衝材である。',
    marginNote:
      '実用メモ：メールの下書きは60%の完成度で一度立ち止まり、「伝わるか」だけ確認して送ると、推敲疲れを防げます。',
    paragraphs: [
      '仕事ができる人ほど、実は「ここは頑張る」「ここは流す」のメリハリがはっきりしています。すべての作業に同じ熱量を注いでしまうと、肝心な場面で集中力が残らないからです。',
      '一日のスケジュールを組むとき、7割が埋まったら残りの3割はあえて空白のままにしておきます。急な相談や思わぬ確認作業は、だいたい毎日ひとつは起きるものだからです。',
      'もし何も起きなければ、その余白で温かいお茶を淹れたり、明日の準備を少しだけ先取りしたりすればいい。最初から完璧な計画を立てない「適当さ」は、変化に強いしなやかさでもあります。',
    ],
  },
  {
    id: 'ma-and-anbai',
    indexLabel: '04',
    category: '言葉の由来',
    title: '「まあ、いいか」が口ぐせの人は、回復が早い。',
    subtitle: '白黒つけない曖昧さが心を守るクッションになる',
    readTime: '読了 2分',
    updatedAt: '2026年10月',
    summary:
      '正しさや効率ばかりを追いかけていると、些細な失敗にも立ち直れなくなります。日本語に根付いた「ほどほど」の感性を見直します。',
    pullQuote: '決めつけないことは、優しさのひとつの形でもある。',
    marginNote:
      '言葉の豆知識：「塩梅（あんばい）」はもともと梅酢と塩で味を整える料理用語から生まれました。',
    paragraphs: [
      '電車の乗り換えを一本逃したとき、うっかり傘を忘れて雨が降ってきたとき。「なんて運が悪いんだろう」と悔やみ続けるか、「ま、コンビニで温かいお茶でも買おう」と切り替えるかで、その後の数時間の気分は大きく変わります。',
      '「まあ、いいか」という言葉は、諦めではなく方向転換の合図です。変えられない過去を責めるのをそこで切り上げ、いま目の前にある心地よさへ舵を切り直す。',
      'すべてに明確な理由や勝敗をつけない曖昧さは、ときにとても人間的で温かいものです。今日の自分に小さなミスがあっても、「それもご愛嬌」と笑えるくらいの余地を残しておきたいものです。',
    ],
  },
];

export interface OmikujiItem {
  id: string;
  luck: string;
  message: string;
  advice: string;
}

export const OMIKUJI_LIST: OmikujiItem[] = [
  {
    id: 'o1',
    luck: 'ちょうどいい吉',
    message: '今日は70点で、堂々と合格にしていい日。',
    advice: 'やり残しが2つあっても、できた3つを先に数えてお茶にしましょう。',
  },
  {
    id: 'o2',
    luck: 'ゆる吉',
    message: '迷ったら「一番手間がかからない方」を選んで正解。',
    advice: '凝った選択より、すぐ動ける選択が今日のあなたを助けます。',
  },
  {
    id: 'o3',
    luck: 'まったり中吉',
    message: '返事は一晩寝かせても、だいたい角が立たない。',
    advice: '急ぎでない連絡は、明日の朝の機嫌のいい自分に預けましょう。',
  },
  {
    id: 'o4',
    luck: '塩梅よし',
    message: '目分量のほうが、今日はうまくいく予感。',
    advice: 'きっちり測りすぎず、直感の「これくらい」を信じてみてください。',
  },
  {
    id: 'o5',
    luck: 'のんびり吉',
    message: '予定をひとつ減らすと、一日が急に広くなる。',
    advice: '「今日やらなくても困らないこと」を1つだけ明日へ送りましょう。',
  },
  {
    id: 'o6',
    luck: 'ほっと大吉',
    message: '完璧な説明より、短い「ありがとう」が場を和ませる。',
    advice: '言葉を飾りすぎず、肩の力を抜いた一言で十分伝わります。',
  },
  {
    id: 'o7',
    luck: '気まま吉',
    message: '今日の晩ごはんは、冷蔵庫にあるもので十分ごちそう。',
    advice: '買い出しをサボるのも、暮らしを続ける立派な工夫です。',
  },
  {
    id: 'o8',
    luck: 'ぼちぼち吉',
    message: '15分だけ手をつけたら、あとはやめても立派な前進。',
    advice: '最初からゴールを見ず、最初の5分だけ気楽に始めてみましょう。',
  },
];

export interface DecisionPreset {
  id: string;
  label: string;
  options: string[];
}

export const DECISION_PRESETS: DecisionPreset[] = [
  {
    id: 'dinner',
    label: '今夜の晩ごはん',
    options: [
      '具だくさん豚汁とごはん',
      '冷凍うどんと卵',
      '近くの定食屋さん',
      'コンビニのお気に入りを2品',
      'レトルトカレーに目玉焼き',
    ],
  },
  {
    id: 'weekend',
    label: '休日の午後の過ごし方',
    options: [
      '30分だけ昼寝する',
      '近所の喫茶店で本を読む',
      '録画や映画を1本観る',
      '目的を決めずに散歩する',
      '気になっていた棚を1段だけ拭く',
    ],
  },
  {
    id: 'task',
    label: '気乗りしない作業の始め方',
    options: [
      'タイマーを5分だけかける',
      '見出しやファイル名だけ作る',
      '好きなお茶を淹れてから座る',
      '一番簡単な部分だけ片付ける',
    ],
  },
];

export interface RecipeIngredient {
  name: string;
  exact: string;
  tekitou: string;
}

export interface RecipeItem {
  id: string;
  title: string;
  subtitle: string;
  prepNote: string;
  ingredients: RecipeIngredient[];
  steps: {
    exact: string;
    tekitou: string;
  }[];
  closingNote: string;
}

export const RECIPES: RecipeItem[] = [
  {
    id: 'tonjiru',
    title: 'だいたいの豚汁',
    subtitle: '余り野菜を全部受け止めてくれる、失敗しない一杯',
    prepNote: '目安：お椀 2〜3杯分',
    ingredients: [
      { name: '豚こま切れ肉', exact: '120g', tekitou: 'ひと握りくらい（多めでもうれしい）' },
      { name: '大根・にんじん', exact: '各100g（5mmいちょう切り）', tekitou: '冷蔵庫に残っている分をざくざく' },
      { name: 'ごま油', exact: '小さじ2（10ml）', tekitou: '鍋底にひと回し' },
      { name: '水とだしの素', exact: '水 500ml / 顆粒だし 小さじ1.5', tekitou: '具材がひたひたにかぶる水 ＋ だしパラパラ' },
      { name: '味噌', exact: '大さじ2.5（約45g）', tekitou: 'お玉に軽くひとすくい（味を見て足す）' },
    ],
    steps: [
      {
        exact: '鍋にごま油を中火で熱し、豚肉を2分間炒めてから根菜を加え、さらに2分炒める。',
        tekitou: '鍋にごま油を垂らして、豚肉と野菜をだいたい色が変わるまで炒める。',
      },
      {
        exact: '水500mlとだしの素を加えて強火にし、沸騰したらアクを取り、弱めの中火で10分煮る。',
        tekitou: '水を具材が隠れるくらい入れて煮る。野菜が柔らかくなったらOK。',
      },
      {
        exact: '火を止め、味噌45gを溶き入れてから、沸騰直前まで30秒温めて器に盛る。',
        tekitou: '火を止めて味噌を溶かし、ひと口飲んで「おいしい」と思ったら完成。',
      },
    ],
    closingNote: 'きのこ、豆腐、こんにゃく、ねぎなど、あるものを足すほどおいしくなります。',
  },
  {
    id: 'shogayaki',
    title: '目分量のしょうが焼き',
    subtitle: '醤油・みりん・酒を「だいたい同量」で覚える定番',
    prepNote: '目安：1〜2人分',
    ingredients: [
      { name: '豚ロース薄切り', exact: '200g', tekitou: '1パック分' },
      { name: '玉ねぎ', exact: '1/2個（100g）', tekitou: '半分くらい（なくても可）' },
      { name: '醤油・みりん・酒', exact: '各大さじ1.5（22.5ml）', tekitou: 'それぞれ同じくらい、ひと回しずつ' },
      { name: 'おろししょうが', exact: '小さじ1.5（約7g）', tekitou: 'チューブなら3〜4cmほど' },
    ],
    steps: [
      {
        exact: '小皿に醤油・みりん・酒・おろししょうがを計量して混ぜ合わせる。',
        tekitou: 'お皿かボウルに醤油・みりん・酒を同量くらい入れ、しょうがを絞る。',
      },
      {
        exact: 'フライパンに油小さじ1を引き、中火で豚肉と玉ねぎを計4分焼く。',
        tekitou: 'フライパンで肉と玉ねぎを焼く。多少重なってもほぐせば大丈夫。',
      },
      {
        exact: '弱火にして合わせ調味料を加え、全体に照りが出るまで約1分絡める。',
        tekitou: 'タレをざっと回し入れて、汁気が少しとろっとしたら火を止める。',
      },
    ],
    closingNote: '千切りキャベツが面倒な日は、ちぎったレタスかトマトを添えるだけで十分です。',
  },
  {
    id: 'tamago-rice',
    title: '気分がラクな焼き飯',
    subtitle: 'パラパラを目指さなくてもおいしい、気楽な一皿',
    prepNote: '目安：1人分',
    ingredients: [
      { name: '温かいごはん', exact: '200g', tekitou: 'お茶碗おおもり1杯' },
      { name: '卵', exact: '1個（約50g）', tekitou: '1個（贅沢したい日は2個）' },
      { name: 'ハムまたはベーコン', exact: '40g', tekitou: '冷蔵庫の隅にあるウインナーやちくわでも' },
      { name: '醤油・塩こしょう', exact: '醤油 小さじ1 / 塩 1g / こしょう少々', tekitou: '塩こしょうパラパラ、最後に鍋肌へ醤油ちょろり' },
    ],
    steps: [
      {
        exact: 'フライパンに油大さじ1を熱し、溶いた卵を入れて3秒後にごはんを投入し、強火で1分半ほぐす。',
        tekitou: '油を引いたフライパンに卵を割り入れ、すぐごはんをのせて気楽に混ぜる。',
      },
      {
        exact: '刻んだ具材を加えてさらに1分炒め、塩1gとこしょうを振る。',
        tekitou: '細かくした具を入れて炒め、塩こしょうで好みの味に近づける。',
      },
      {
        exact: '鍋肌から醤油小さじ1を垂らし、香ばしい香りが立ったら皿へ移す。',
        tekitou: '最後に醤油を少しだけジュッと垂らして、いい香りがしたら盛り付ける。',
      },
    ],
    closingNote: 'しっとりしていても、それはそれで家庭の焼き飯のやさしい味になります。',
  },
];

export interface DictionaryWord {
  word: string;
  reading: string;
  category: '程度・加減' | '気質・態度' | '流れ・時間';
  meaning: string;
  nuance: string;
  example: string;
}

export const DICTIONARY_WORDS: DictionaryWord[] = [
  {
    word: '適当',
    reading: 'てきとう',
    category: '程度・加減',
    meaning: 'ある条件や目的にちょうどよく当てはまること。また、厳密にせずほどほどに行うこと。',
    nuance: '「ぴったり」と「気楽」の両方をひとつの器に収めた便利な言葉。',
    example: '「塩は適当に振って、あとは体調に合わせて適当に休もう。」',
  },
  {
    word: '塩梅',
    reading: 'あんばい',
    category: '程度・加減',
    meaning: '料理の味加減や、物事のちょうどよい加減・具合。',
    nuance: '数字ではなく感覚で整える、日本らしい美意識が宿る表現。',
    example: '「今日の湯加減、なんともいい塩梅ですね。」',
  },
  {
    word: 'いい加減',
    reading: 'いいかげん',
    category: '程度・加減',
    meaning: '本来は「良い加減（ほどよい程度）」。転じて、中途半端や無責任なさま。',
    nuance: '「良い湯加減」と同じ語源。言葉の使いどころで温かさも出ます。',
    example: '「厳しすぎず甘すぎず、いい加減のところで手を打つ。」',
  },
  {
    word: 'ほどほど',
    reading: 'ほどほど',
    category: '程度・加減',
    meaning: '行きすぎず、不足もしないちょうどよい程度。',
    nuance: '無理をしないための、自分へのやさしいブレーキとして使われます。',
    example: '「仕事も片付けも、今日はほどほどにしておこう。」',
  },
  {
    word: '大雑把',
    reading: 'おおざっぱ',
    category: '気質・態度',
    meaning: '細かい点にはこだわらず、全体を大きく捉えるさま。',
    nuance: '細部に迷いそうなとき、「まずは大雑把に掴む」と前進しやすくなります。',
    example: '「まずは大雑把な見取り図だけ描いてから考えよう。」',
  },
  {
    word: '気まま',
    reading: 'きまま',
    category: '気質・態度',
    meaning: '周囲や決まりに縛られず、自分の気の向くままに振る舞うこと。',
    nuance: '「わがまま」と違い、静かで穏やかなマイペースさを伴う響き。',
    example: '「休日は行き先を決めず、気ままに電車を乗り継ぐ。」',
  },
  {
    word: '成り行き',
    reading: 'なりゆき',
    category: '流れ・時間',
    meaning: '物事が自然に変化・展開していく様子やその結果。',
    nuance: 'すべてをコントロールしようとせず、流れに少し身を委ねる姿勢。',
    example: '「先のことは成り行きに任せて、まずは目の前の茶を飲む。」',
  },
  {
    word: 'ぼちぼち',
    reading: 'ぼちぼち',
    category: '流れ・時間',
    meaning: '慌てず急がず、少しずつ物事を進めたり始めたりする様子。',
    nuance: '頑張りすぎをほぐす魔法のような挨拶。急かさない優しさがあります。',
    example: '「まあ、ぼちぼちやっていきましょう。」',
  },
];
