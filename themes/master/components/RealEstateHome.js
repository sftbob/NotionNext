/* eslint-disable @next/next/no-img-element */
import SmartLink from '@/components/SmartLink'

const sampleHomes = [
  {
    title: '信義計畫區・景觀豪宅',
    meta: '台北市信義區｜3 房 2 廳｜含車位',
    price: '總價 8,880 萬',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82'
  },
  {
    title: '內湖科學園區・美裝三房',
    meta: '台北市內湖區｜3 房 2 廳｜電梯大樓',
    price: '總價 3,680 萬',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=82'
  },
  {
    title: '永和頂溪・捷運電梯三房',
    meta: '新北市永和區｜3 房 2 廳｜近捷運',
    price: '總價 2,980 萬',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82'
  },
  {
    title: '新店央北・質感兩房',
    meta: '新北市新店區｜2 房 2 廳｜新成屋',
    price: '總價 2,280 萬',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82'
  }
]

const areas = [
  {
    name: '大坪林',
    text: '捷運雙線、成熟商圈與完整生活機能',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82'
  },
  {
    name: '七張',
    text: '傳統市場、學校與捷運串起日常便利',
    image:
      'https://images.unsplash.com/photo-1461696114087-397271a7aedc?auto=format&fit=crop&w=1200&q=82'
  },
  {
    name: '區公所',
    text: '行政機能、碧潭生活與市中心便利兼具',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=82'
  },
  {
    name: '央北十四張',
    text: '重劃新貌、綠地與交通建設持續成形',
    image:
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=82'
  },
  {
    name: '小碧潭中央新村',
    text: '河岸景觀、商場機能與舒適住宅環境',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=82'
  }
]

const services = [
  ['💬', '免費諮詢', '先釐清需求，再決定下一步'],
  ['🏠', '售屋服務', '從定價、曝光到交易完整陪伴'],
  ['🧮', '房貸試算', '預先掌握自備款與每月負擔'],
  ['📋', '稅費試算', '買賣成本透明，不留下意外']
]

const SectionTitle = ({ eyebrow, title, text }) => (
  <div className='mx-auto mb-10 max-w-2xl text-center'>
    <p className='mb-3 text-sm font-semibold tracking-[0.24em] text-[#9c0c0c]'>
      {eyebrow}
    </p>
    <h2 className='text-3xl font-bold tracking-tight text-[#111111] md:text-4xl'>
      {title}
    </h2>
    {text && <p className='mt-4 leading-7 text-[#555555]'>{text}</p>}
  </div>
)

export const RealEstateHome = ({ posts = [] }) => {
  return (
    <main className='bg-[#f7f4f3] text-[#111111]'>
      <section className='relative min-h-[680px] overflow-hidden pt-28'>
        <img
          src='https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88'
          alt='溫暖明亮的居家空間'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#333333]/65 to-transparent' />
        <div className='container relative z-10 flex min-h-[540px] items-center py-16'>
          <div className='max-w-3xl'>
            <p className='mb-5 text-sm font-semibold tracking-[0.35em] text-white/80'>
              安居・好室｜ANJU REAL ESTATE
            </p>
            <h1 className='max-w-2xl text-5xl font-bold leading-[1.12] text-white md:text-7xl'>
              找到家的美好
              <span className='mt-2 block text-white'>讓生活更靠近理想</span>
            </h1>
            <p className='mt-7 max-w-xl text-lg leading-8 text-white/85'>
              提供清楚、完整的房地產資訊，以專業、誠信與用心，陪你找到真正適合的家。
            </p>

          </div>
        </div>
      </section>

      <section className='container py-24'>
        <SectionTitle
          eyebrow='SELECTED HOMES'
          title='精選好房推薦'
          text='不只看規格，也從生活方式、社區條件與長期價值替你整理選擇。'
        />
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {sampleHomes.map(home => (
            <article key={home.title} className='group overflow-hidden rounded-2xl bg-white shadow-[0_12px_35px_rgba(17,17,17,0.10)]'>
              <div className='relative h-52 overflow-hidden'>
                <img src={home.image} alt={home.title} className='h-full w-full object-cover transition duration-500 group-hover:scale-105' />
                <span className='absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#9c0c0c]'>精選物件</span>
              </div>
              <div className='p-5'>
                <h3 className='text-lg font-bold'>{home.title}</h3>
                <p className='mt-2 text-sm leading-6 text-[#555555]'>{home.meta}</p>
                <p className='mt-4 font-semibold text-[#9c0c0c]'>{home.price}</p>
              </div>
            </article>
          ))}
        </div>
        <p className='mt-5 text-center text-xs text-[#666666]'>以上物件為首頁版型示意，實際物件資訊請以最新公告與專人說明為準。</p>
      </section>

      <section className='bg-white py-24'>
        <div className='container'>
          <SectionTitle eyebrow='XINDIAN LIVING DISTRICTS' title='新店熱門生活圈' text='從捷運、商圈、學區到河岸生活，快速認識新店五個熱門居住區域。' />
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-5'>
            {areas.map(area => (
              <article key={area.name} className='group relative h-80 overflow-hidden rounded-2xl'>
                <img src={area.image} alt={area.name} className='h-full w-full object-cover transition duration-500 group-hover:scale-105' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent' />
                <div className='absolute bottom-0 p-7 text-white'>
                  <h3 className='text-2xl font-bold'>{area.name}</h3>
                  <p className='mt-2 text-white/80'>{area.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className='mt-5 text-center text-xs text-[#666666]'>
            生活圈圖片為情境示意，實際環境與周邊機能請以現場及最新公開資訊為準。
          </p>
        </div>
      </section>

      <section className='container py-24'>
        <SectionTitle eyebrow='SERVICE' title='把複雜的買賣流程，整理成清楚的下一步' />
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {services.map(([icon, title, text]) => (
            <div key={title} className='rounded-2xl border border-[#e5e5e5] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg'>
              <span className='text-3xl'>{icon}</span>
              <h3 className='mt-5 text-xl font-bold'>{title}</h3>
              <p className='mt-3 leading-7 text-[#555555]'>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-[#f1eded] py-24'>
        <div className='container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]'>
          <div className='overflow-hidden rounded-[2rem] shadow-xl'>
            <img
              src='https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=82'
              alt='房地產顧問形象照示意'
              className='h-[520px] w-full object-cover'
            />
          </div>
          <div>
            <p className='text-sm font-semibold tracking-[0.28em] text-[#9c0c0c]'>YOUR REAL ESTATE ADVISOR</p>
            <h2 className='mt-4 text-4xl font-bold leading-tight md:text-5xl'>房子是交易，安居是人生</h2>
            <p className='mt-6 text-lg leading-8 text-[#555555]'>
              我是房仲哖大師。我的工作不只是介紹物件，而是協助你看懂價格、社區、交易風險與生活選擇，讓每一個決定都有充分依據。
            </p>
            <div className='mt-8 grid grid-cols-3 gap-3 border-y border-[#cccccc] py-6 text-center'>
              {['專業分析', '誠信溝通', '全程陪伴'].map(item => (
                <div key={item} className='font-semibold text-[#9c0c0c]'>{item}</div>
              ))}
            </div>
            <SmartLink href='/about' className='mt-8 inline-flex rounded-xl bg-[#111111] px-7 py-3.5 font-semibold text-white hover:bg-[#333333]'>認識我的服務方式</SmartLink>
          </div>
        </div>
      </section>

      <section className='bg-white py-24'>
        <div className='container'>
          <SectionTitle eyebrow='MARKET INSIGHTS' title='房市最新動態' text='把複雜政策與市場變化，整理成能幫助你做決定的內容。' />
          <div className='grid gap-6 lg:grid-cols-3'>
            {(posts.length ? posts.slice(0, 3) : [
              { id: 'demo-1', title: '買房前，先釐清自己的安全預算', summary: '從自備款、房貸到持有成本，建立不勉強生活的購屋範圍。' },
              { id: 'demo-2', title: '如何判斷一個社區值不值得長住？', summary: '管理、住戶組成、公共空間與周邊生活，是看屋時容易忽略的長期條件。' },
              { id: 'demo-3', title: '房市政策改變，真正影響你的地方', summary: '不只看新聞標題，從貸款、稅費與交易節奏理解實際影響。' }
            ]).map(post => (
              <article key={post.id || post.slug} className='rounded-2xl border border-[#e5e5e5] bg-[#f7f4f3] p-7'>
                <p className='text-xs font-semibold tracking-[0.2em] text-[#9c0c0c]'>房市知識</p>
                <h3 className='mt-4 text-xl font-bold leading-8'>{post.title}</h3>
                <p className='mt-3 line-clamp-3 leading-7 text-[#555555]'>{post.summary || post.description}</p>
                <SmartLink href={post.href || (post.slug ? `/${post.slug}` : '/archive')} className='mt-6 inline-flex font-semibold text-[#9c0c0c]'>閱讀文章 →</SmartLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#111111] py-20 text-white'>
        <div className='container flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left'>
          <div>
            <p className='text-sm font-semibold tracking-[0.25em] text-white/70'>LET&apos;S TALK</p>
            <h2 className='mt-3 text-3xl font-bold md:text-4xl'>準備找房、賣房，或只是想先問清楚？</h2>
            <p className='mt-3 text-white/70'>從一次沒有壓力的諮詢開始，我們一起整理最適合你的方向。</p>
          </div>
          <SmartLink href='/contact' className='shrink-0 rounded-xl bg-[#9c0c0c] px-8 py-4 font-semibold text-white transition hover:bg-[#7a0909]'>立即免費諮詢</SmartLink>
        </div>
      </section>
    </main>
  )
}
