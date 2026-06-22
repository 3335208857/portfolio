import '../styles/contact.css'
import GradualBlur from './GradualBlur'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <GradualBlur position="top" height="8rem" />
      <div className="contact-content">
        <p className="contact-eyebrow">联系方式</p>

        <h2 className="contact-title">期待与你合作</h2>

        <p className="contact-text">
          如果你需要一位懂视觉、懂数据、懂AI的新媒体运营——
          <br />
          无论是短视频策划、直播运营还是AI视觉创作，让我们聊聊。
        </p>

        <a href="mailto:3335208857@qq.com" className="contact-email">
          3335208857@qq.com
        </a>

        <div className="contact-socials">
          <span className="contact-social-link">📞 191-0685-2054</span>
          <span className="contact-social-link">📍 浙江 · 杭州</span>
          <span className="contact-social-link">🎓 浙江科技大学</span>
          <span className="contact-social-link">📅 2002年</span>
        </div>
      </div>

      <footer className="contact-footer">
        <span className="contact-copyright">
          &copy; {new Date().getFullYear()} 王敬博. 保留所有权利.
        </span>
        <a href="#hero" className="contact-backtop">回到顶部 ↑</a>
      </footer>
    </section>
  )
}
