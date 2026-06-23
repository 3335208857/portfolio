import '../styles/ai-showcase.css'
import SplitText from './SplitText'

const AI_VIDEOS = [
  { src: '/images/ai-showcase-1.mp4', label: 'AI 动态 01' },
  { src: '/images/ai-showcase-2.mp4', label: 'AI 动态 02' },
  { src: '/images/ai-video-2.mp4', label: 'AI 动态 03' },
  { src: '/images/ai-video-3.mp4', label: 'AI 动态 04' },
]

export default function AIShowcase() {
  return (
    <section id="ai-showcase" className="ai-showcase section">
      <div className="container">
        <div className="ai-showcase-header">
          <p className="section-label">AI 创作</p>
          <h2 className="ai-showcase-title">
            <SplitText text="AI 动态作品" type="char" delay={40} />
          </h2>
          <p className="ai-showcase-subtitle">
            <SplitText
              text="Seedance AI 视频生成 — 探索视觉表达的无限可能"
              type="word"
              delay={80}
              duration={0.5}
              tag="span"
            />
          </p>
        </div>

        <div className="ai-showcase-grid">
          {AI_VIDEOS.map(v => (
            <div key={v.src} className="ai-showcase-card">
              <div className="ai-showcase-video-wrapper">
                <video
                  className="ai-showcase-video"
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onPause={e => e.target.play().catch(() => {})}
                />
                <span className="ai-showcase-label">{v.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
