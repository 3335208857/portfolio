import '../styles/projects.css'
import SplitText from './SplitText'

const PROJECTS = [
  {
    id: '01',
    name: '商品设计 · 产品视觉',
    tags: ['产品设计', '视觉呈现', '场景布光', '静物拍摄'],
    desc: '自主完成产品静物与场景拍摄，搭建美妆类目布光方案，素材视觉风格统一、质感突出。结合 CLO3D 进行产品3D呈现，素材点击率提升40%+。',
    video: '/images/hero-bg.mp4',
    metrics: ['点击率+40%', 'CLO3D', '场景布光', '视觉统一'],
  },
  {
    id: '02',
    name: 'AI 视觉作品集',
    tags: ['Midjourney', 'Stable Diffusion', 'Seedance', 'AI创作'],
    desc: '熟练运用 Midjourney、Stable Diffusion、Seedance、CLO3D、Canva AI、Lovart 等工具进行创意视觉内容生产——涵盖AI生成图片、AI视频动效、产品3D呈现。结合 AI 辅助选题策划与多语言文案生成，内容产出效率翻倍。',
    video: '/images/ai-video-1.mp4',
    metrics: ['Seedance', 'MJ/SD', 'CLO3D', 'Canva AI'],
  },
  {
    id: '03',
    name: '独立带货账号 · 全链路运营',
    tags: ['短视频', '直播运营', '广告投放', '美妆类目'],
    desc: '从0到1搭建抖音/快手带货账号，独立负责选品、直播策划、短视频引流、广告投放全链路。单场最高GMV 5万元，月均GMV 30万元，投放ROI稳定在1:3以上。单链接销量突破18,000+。',
    image: '/images/livestream-data.jpg',
    metrics: ['月均GMV 30W', '单场GMV 5W', 'ROI 1:3+', '单链接1.8W+'],
  },
  {
    id: '04',
    name: '短视频爆款 · 独立制作人',
    tags: ['内容创作', '爆款脚本', '拍摄剪辑', 'TikTok'],
    desc: '独立完成选题→脚本→实拍→剪辑全流程，累计产出短视频60条，总播放量突破2000万。单条视频播放量突破200万，善用前3秒抓力与音乐卡点设计提升完播率。内容方法论可跨平台迁移。',
    image: '/images/short-video-data.jpg',
    metrics: ['60条视频', '2000W播放', '单条200W+', '自然流量65%+'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-header">
          <p className="section-label">精选项目</p>
          <h2 className="projects-title">
            <SplitText text="实战案例" type="char" delay={40} />
          </h2>
          <p className="projects-subtitle">
            <SplitText
              text="3年新媒体实战，个人账号覆盖短视频、直播运营、商品设计与AI视觉创作"
              type="word"
              delay={80}
              duration={0.5}
              tag="span"
            />
          </p>
        </div>
      </div>

      <div className="container">
        {PROJECTS.map(project => (
          <div key={project.id} className="project-card">
            <span className="project-number">{project.id}</span>
            <div className="project-image-wrapper">
              {project.video ? (
                <video
                  className="project-video"
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
              ) : (
                <div className="project-image-placeholder">
                  <span className="project-image-icon">{project.icon}</span>
                </div>
              )}
            </div>

            <div className="project-info">
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-metrics">
                {project.metrics.map(m => (
                  <span key={m} className="project-metric">{m}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
