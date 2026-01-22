"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* 导航栏 - 极简固定 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black">
        <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">小D.</div>

          {/* 桌面导航 */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-bold hover:line-through transition-all">我是谁</button>
            <button onClick={() => scrollToSection("works")} className="text-sm font-bold hover:line-through transition-all">作品</button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-bold hover:line-through transition-all">联系</button>
          </div>

          {/* 移动端菜单按钮 */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* 移动端菜单 */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black">
            <div className="flex flex-col p-6 gap-4">
              <button onClick={() => scrollToSection("about")} className="text-left text-lg font-black hover:pl-4 transition-all">我是谁</button>
              <button onClick={() => scrollToSection("works")} className="text-left text-lg font-black hover:pl-4 transition-all">作品</button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-lg font-black hover:pl-4 transition-all">联系</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - 不对称杂志风格 */}
      <section className="min-h-screen relative pt-20">
        <div className="w-full mx-auto px-6 min-h-screen flex">
          {/* 左侧 - 超大标题 */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter animate-slide-up">
                  AI
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  技术<span className="text-red-600">专家</span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  效率<span className="line-through decoration-red-600 decoration-8">顾问</span>
                </h1>
              </div>

              <div className="pt-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
                  10年+开发经验 · 帮助职场人士成为<span className="bg-black text-white px-2">超级个体</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-8 py-4 bg-black text-white font-bold text-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"
                >
                  了解我 →
                </button>
                <button
                  onClick={() => scrollToSection("works")}
                  className="px-8 py-4 border-2 border-black font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
                >
                  查看工具
                </button>
              </div>
            </div>
          </div>

          {/* 右侧 - 头像 + 装饰 */}
          <div className="hidden lg:flex lg:w-2/5 items-center justify-center relative">
            {/* 装饰圆圈 */}
            <div className="absolute w-[80%] h-[80%] border-[3px] border-black rounded-full animate-spin-slow"></div>
            <div className="absolute w-[60%] h-[60%] border-2 border-red-600 rounded-full"></div>

            {/* 头像 */}
            <div className="relative z-10 w-72 h-72">
              <div className="absolute inset-0 bg-black rounded-full"></div>
              <Image
                src="/avatar.png"
                alt="小D"
                fill
                className="relative z-10 object-cover rounded-full border-8 border-white"
                priority
              />
            </div>

            {/* 装饰文字 */}
            <div className="absolute -bottom-8 right-0 text-6xl font-black text-red-600 rotate-12">
              10Y+
            </div>
          </div>
        </div>

        {/* 底部装饰斜线 */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black">
          <div className="h-full w-1/3 bg-red-600"></div>
        </div>
      </section>

      {/* About Section - 我是谁 */}
      <section id="about" className="py-32 px-6 bg-black text-white">
        <div className="w-full mx-auto px-6">
          <div className={`${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-1000`}>
            {/* 不对称标题 */}
            <div className="mb-20">
              <span className="text-red-600 font-black text-sm tracking-widest">// ABOUT</span>
              <h2 className="text-[15vw] lg:text-[10vw] font-black leading-none mt-4">
                我是<span className="text-red-600">谁</span>
              </h2>
            </div>

            {/* 网格布局 - 不对称 */}
            <div className="grid lg:grid-cols-12 gap-8">
              {/* 左侧大卡片 */}
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-white text-black p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl font-black flex-shrink-0">
                      01
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black mb-4">愿景</h3>
                      <div className="w-20 h-2 bg-red-600"></div>
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                    帮助<span className="line-through decoration-red-600 decoration-4">更多人</span>掌握AI技术
                  </p>
                  <p className="text-xl text-gray-600 mt-6">
                    赋能职场人士成为新时代的超级个体
                  </p>
                </div>

                <div className="bg-red-600 text-white p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 bg-white text-red-600 flex items-center justify-center text-3xl font-black flex-shrink-0">
                      02
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black mb-4">履历</h3>
                      <div className="w-20 h-2 bg-white"></div>
                    </div>
                  </div>
                  <ul className="space-y-4 text-xl">
                    <li className="flex items-start gap-3">
                      <span className="text-3xl font-black">→</span>
                      10年+软件开发经验
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-3xl font-black">→</span>
                      AI科普博主
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-3xl font-black">→</span>
                      【小D聊AI】创始人
                    </li>
                  </ul>
                </div>
              </div>

              {/* 右侧装饰 */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="bg-gray-900 p-8">
                  <p className="text-8xl font-black text-red-600 leading-none">
                    {new Date().getFullYear() - 2015}
                  </p>
                  <p className="text-gray-400 mt-4">年经验</p>
                </div>

                <div className="mt-8 p-8 border-4 border-red-600">
                  <p className="text-6xl font-black leading-none">
                    AI
                  </p>
                  <p className="text-2xl font-bold mt-4">技术专家</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section - 我的作品 */}
      <section id="works" className="py-32 px-6">
        <div className="w-full mx-auto px-6">
          <div className={`${visibleSections.has("works") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-1000`}>
            {/* 标题 */}
            <div className="mb-20">
              <span className="text-red-600 font-black text-sm tracking-widest">// WORKS</span>
              <h2 className="text-[15vw] lg:text-[10vw] font-black leading-none mt-4">
                我的<span className="text-red-600">作品</span>
              </h2>
            </div>

            {/* 工具卡片 - 不对称网格 */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* PureImage - 大卡片 */}
              <a
                href="/pure-image"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black text-white p-8 md:p-12 hover:bg-red-600 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[12vw] lg:text-6xl font-black leading-none">01</span>
                  <span className="px-4 py-2 bg-white text-black text-sm font-bold">可用</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black mb-6">净图助手</h3>

                <p className="text-xl text-gray-400 mb-8">
                  批量清除 AI 生成图片的元数据标记，保护隐私，节省空间
                </p>

                <div className="flex items-center gap-4 text-sm mb-8">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    免费
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                    本地处理
                  </span>
                </div>

                <div className="flex items-center text-2xl font-black group-hover:translate-x-4 transition-transform duration-300">
                  立即使用 →
                </div>
              </a>

              {/* 公众号 */}
              <div className="bg-gray-100 p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[12vw] lg:text-6xl font-black text-gray-300 leading-none">02</span>
                  <span className="px-4 py-2 bg-black text-white text-sm font-bold">持续</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black mb-6">小D聊AI</h3>

                <p className="text-xl text-gray-600 mb-8">
                  分享实用AI工具、技术教程，帮助读者掌握AI技术
                </p>

                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* 开发中工具 1 */}
              <div className="bg-white border-4 border-black p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-black text-gray-300">03</span>
                  <span className="px-4 py-2 bg-gray-200 text-gray-600 text-sm font-bold">开发中</span>
                </div>
                <h3 className="text-2xl font-black mb-3">批量重命名</h3>
                <p className="text-gray-600">强大的文件批量重命名工具</p>
              </div>

              {/* 开发中工具 2 */}
              <div className="bg-white border-4 border-black p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-black text-gray-300">04</span>
                  <span className="px-4 py-2 bg-gray-200 text-gray-600 text-sm font-bold">开发中</span>
                </div>
                <h3 className="text-2xl font-black mb-3">文件查看器</h3>
                <p className="text-gray-600">轻量级本地文件查看器</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - 联系方式 */}
      <section id="contact" className="py-32 px-6 bg-black text-white">
        <div className="w-full mx-auto px-6">
          <div className={`${visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-1000`}>
            {/* 标题 */}
            <div className="mb-20">
              <span className="text-red-600 font-black text-sm tracking-widest">// CONTACT</span>
              <h2 className="text-[15vw] lg:text-[10vw] font-black leading-none mt-4">
                联系<span className="text-red-600">我</span>
              </h2>
            </div>

            {/* 联系卡片 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white text-black p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-black mb-6">
                  微
                </div>
                <h3 className="text-xl font-black mb-2">微信公众号</h3>
                <p className="text-gray-600">小D聊AI</p>
              </div>

              <div className="bg-white text-black p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-black mb-6">
                  信
                </div>
                <h3 className="text-xl font-black mb-2">微信</h3>
                <p className="text-gray-600">gptdavid</p>
              </div>

              <a
                href="https://github.com/jiawei89"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-8 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-red-600 transition-colors">
                  Git
                </div>
                <h3 className="text-xl font-black mb-2">GitHub</h3>
                <p className="text-gray-600">@jiawei89</p>
              </a>

              <a
                href="https://t.zsxq.com/15J7IApld"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-8 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-red-600 transition-colors">
                  星
                </div>
                <h3 className="text-xl font-black mb-2">知识星球</h3>
                <p className="text-gray-600">加入星球</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t-4 border-black">
        <div className="w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-2xl font-black">© 2025 小D</p>
          <p className="text-gray-600">用AI技术赋能更多人成为超级个体</p>
        </div>
      </footer>
    </div>
  );
}
