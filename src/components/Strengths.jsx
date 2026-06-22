import '../styles/strengths.css'
import SplitText from './SplitText'

const STRENGTHS = [
  {
    icon: '◇',
    name: '短视频创作',
    desc: '独立完成选题→脚本→实拍→剪辑全流程，善用前3秒抓力与音乐卡点设计，累计产出60条短视频、2000万+播放。',
  },
  {
    icon: '◎',
    name: '直播运营',
    desc: '从0到1搭建带货直播间，深谙人货场匹配与算法逻辑，单场最高GMV 5万，月均GMV 30万，转化率3%+。',
  },
  {
    icon: '◉',
    name: 'AI 视觉创作',
    desc: '熟练运用 Midjourney、Stable Diffusion、CLO3D、Canva AI 等工具，AI驱动创意制图，内容产出效率翻倍。',
  },
  {
    icon: '◐',
    name: '数据运营',
    desc: '以数据复盘驱动增长，广告投放ROI稳定1:3+，自然流量占比超65%，擅长从数据中发现优化机会。',
  },
  {
    icon: '▥',
    name: '内容策略',
    desc: '深入理解海内外短视频平台算法生态，内容方法论可跨平台迁移，TikTok/IG Reels/YouTube Shorts 均能驾驭。',
  },
  {
    icon: '⬒',
    name: '拍摄与后期',
    desc: '自主完成产品静物/场景拍摄与布光，熟练使用剪映、PR，素材视觉风格统一，点击率提升40%+。',
  },
]

export default function Strengths() {
  return (
    <section id="strengths" className="strengths section">
      <div className="container">
        <div className="strengths-header">
          <p className="section-label">专业能力</p>
          <h2 className="strengths-title">
            <SplitText text="核心优势" type="char" delay={40} />
          </h2>
          <p className="strengths-subtitle">
            <SplitText
              text="六大领域，定义我的新媒体视觉运营方法论"
              type="word"
              delay={80}
              duration={0.5}
              tag="span"
            />
          </p>
        </div>

        <div className="strengths-grid">
          {STRENGTHS.map(s => (
            <div key={s.name} className="strength-card">
              <div className="strength-icon">{s.icon}</div>
              <h3 className="strength-name">{s.name}</h3>
              <p className="strength-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
