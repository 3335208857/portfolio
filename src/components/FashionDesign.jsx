import '../styles/fashion-design.css'
import SplitText from './SplitText'

const IMAGES = [
  { src: '/images/fashion-1.webp', label: 'SD 生成 · 概念设计' },
  { src: '/images/fashion-2.webp', label: 'CLO3D · 3D 呈现' },
  { src: '/images/fashion-3.webp', label: 'SD + CLO3D · 综合创作' },
]

export default function FashionDesign() {
  return (
    <section id="fashion" className="fashion section">
      <div className="container">
        <div className="fashion-header">
          <p className="section-label">服装设计</p>
          <h2 className="fashion-title">
            <SplitText text="SD + CLO3D 服装设计" type="char" delay={40} />
          </h2>
          <p className="fashion-subtitle">
            <SplitText
              text="Stable Diffusion 概念生成 → CLO3D 3D建模呈现，AI驱动服装设计新流程"
              type="word"
              delay={80}
              duration={0.5}
              tag="span"
            />
          </p>
        </div>

        <div className="fashion-grid">
          {IMAGES.map(img => (
            <div key={img.src} className="fashion-card">
              <div className="fashion-img-wrapper">
                <img src={img.src} alt={img.label} className="fashion-img" />
              </div>
              <span className="fashion-label">{img.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
