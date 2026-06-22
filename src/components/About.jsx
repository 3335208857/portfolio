import '../styles/about.css'

const STATS = [
  { number: '60条', label: '短视频作品' },
  { number: '2000W+', label: '总播放量' },
  { number: '30W', label: '月均GMV' },
  { number: '1:3+', label: '投放ROI' },
]

const CONTACT_INFO = [
  { label: '手机', value: '191-0685-2054' },
  { label: '邮箱', value: '3335208857@qq.com' },
  { label: '所在地', value: '浙江 · 杭州' },
  { label: '学历', value: '浙江科技大学 · 本科' },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <p className="section-label">关于我</p>

        <div className="about-grid">
          <div className="about-portrait-wrapper">
            <div className="about-portrait">
              <img
                src="/images/portrait.webp"
                alt="王敬博"
                className="about-portrait-img"
              />
            </div>
            <div className="about-portrait-accent" />
          </div>

          <div className="about-info">
            <h2 className="about-name">王敬博</h2>
            <p className="about-role">新媒体视觉设计师 / 短视频运营 / AI 创作实践者</p>

            <p className="about-bio">
              结果驱动型新媒体运营，3年实战经验，独立操盘个人账号0-1全链路——
              从选品、脚本策划、产品拍摄到直播运营、广告投放与数据复盘。
              深度使用 Midjourney、Stable Diffusion 等 AI 视觉工具，
              结合 ChatGPT/Claude 辅助创意策划，内容产出效率翻倍。
              累计60条短视频作品突破2000万播放，月均GMV 30万元。
            </p>

            <div className="about-contact-list">
              {CONTACT_INFO.map(item => (
                <div key={item.label} className="about-contact-item">
                  <span className="about-contact-label">{item.label}</span>
                  <span className="about-contact-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="about-divider line-divider" />

            <div className="about-stats">
              {STATS.map(stat => (
                <div key={stat.label} className="about-stat-item">
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
