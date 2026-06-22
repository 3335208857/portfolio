import '../styles/practice-gallery.css'
import SplitText from './SplitText'
import CircularGallery from './CircularGallery'

const PRACTICE_IMAGES = [
  { image: '/images/practice/1.公园长椅上的紫色黄昏.png', text: '公园长椅上的紫色黄昏' },
  { image: '/images/practice/1.重塑文艺复兴.png', text: '重塑文艺复兴' },
  { image: '/images/practice/4.涩谷路口十指相扣.png', text: '涩谷路口十指相扣' },
  { image: '/images/practice/5.云之建筑.png', text: '云之建筑' },
  { image: '/images/practice/eee74e71d19611847bc463da93b0d2a6.png', text: '练习 05' },
  { image: '/images/practice/gpt-image-2_0aa2579f-3179-4856-bd56-d1f5b73e6162_0 (1).png', text: '练习 06' },
  { image: '/images/practice/gpt-image-2_a66a36fe-9350-44db-a5ec-3a1f8989f3bd_0.png', text: '练习 07' },
  { image: '/images/practice/gpt-image-2_b26c726f-c2db-4e50-85ad-b1bab58c2bfc_0.png', text: '练习 08' },
  { image: '/images/practice/海螺_图片_Y2K style _522772989941850122.png', text: '海螺 Y2K' },
]

export default function PracticeGallery() {
  return (
    <section id="practice" className="practice section">
      <div className="container">
        <div className="practice-header">
          <p className="section-label">练习作品</p>
          <h2 className="practice-title">
            <SplitText text="个人练习散图" type="char" delay={40} />
          </h2>
          <p className="practice-subtitle">
            <SplitText
              text="AI 图像生成练习 — 探索 Midjourney / GPT 视觉创作的边界"
              type="word"
              delay={80}
              duration={0.5}
              tag="span"
            />
          </p>
        </div>
      </div>

      <div className="practice-gallery-wrapper">
        <CircularGallery
          items={PRACTICE_IMAGES}
          bend={2}
          textColor="#cccccc"
          borderRadius={0.03}
          scrollEase={0.03}
          scrollSpeed={1.5}
          font="bold 24px 'Space Grotesk'"
        />
      </div>
    </section>
  )
}
