import '../styles/hero.css'
import TextPressure from './TextPressure'
import SplitText from './SplitText'
import GradualBlur from './GradualBlur'
import SideRays from './SideRays'
import Shuffle from './Shuffle'

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <video
          className="hero-bg-video"
          src="/images/hero-bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPause={e => e.target.play().catch(() => {})}
        />
        <div className="hero-bg-overlay" />
        <div className="hero-particles">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="hero-particle" />
          ))}
        </div>
      </div>

      <div className="hero-rays">
        <SideRays
          speed={1.8}
          rayColor1="#f5f5f5"
          rayColor2="#96c8ff"
          intensity={1.2}
          spread={1.8}
          origin="top-right"
          tilt={-8}
          saturation={0.8}
          blend={0.55}
          falloff={2.0}
          opacity={0.7}
        />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">新媒体视觉设计师 · AI 创作实践者</p>

        <div className="hero-headline">
          <div className="hero-line hero-line--1">
            <Shuffle
              text="用视觉"
              tag="span"
              shuffleDirection="down"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power4.out"
              stagger={0.06}
              triggerOnce={true}
              triggerOnHover={true}
              threshold={0.1}
            />
          </div>

          <div className="hero-line hero-line--2">
            <TextPressure
              text="驱动增长"
              stroke
              weight
              textColor="transparent"
              strokeColor="rgba(255,255,255,0.7)"
              minFontSize={28}
              flex
            />
          </div>

          <div className="hero-line hero-line--3">
            <Shuffle
              text="以数据"
              tag="span"
              shuffleDirection="down"
              duration={0.4}
              animationMode="evenodd"
              shuffleTimes={2}
              ease="power3.out"
              stagger={0.05}
              triggerOnce={true}
              triggerOnHover={true}
              threshold={0.1}
            />
            <Shuffle
              text="验证创意"
              tag="span"
              shuffleDirection="down"
              duration={0.5}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power4.out"
              stagger={0.06}
              triggerOnce={true}
              triggerOnHover={true}
              threshold={0.1}
            />
          </div>
        </div>

        <p className="hero-subtitle">
          <SplitText
            text="3年新媒体实战经验，个人账号累计2000万+视频播放，月均GMV 30万。擅长用AI工具与视觉设计打造高转化内容。"
            type="char"
            delay={30}
            duration={0.5}
            threshold={0.3}
            tag="span"
          />
        </p>

        <a href="#projects" className="hero-cta">
          查看作品
          <span className="hero-cta-arrow">→</span>
        </a>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-text">向下滚动</span>
        <div className="hero-scroll-line" />
      </div>

      <GradualBlur position="bottom" height="10rem" />
    </section>
  )
}
