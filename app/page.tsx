"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import InteractiveEffects from "./components/InteractiveEffects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth min-h-screen relative">
      <InteractiveEffects />
      {/* Hero Section - 作为主页主体 */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl mx-auto w-full text-center animate-fade-in">
          {/* 头像部分 */}
          <div className="avatar-container mb-8 animate-float">
            <Image
              src="/avatar.png"
              alt="小D头像"
              width={200}
              height={200}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl ring-4 ring-white/50 hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="avatar-badge animate-pulse-slow">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>

          {/* 标题和描述 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-700 to-blue-500 bg-clip-text text-transparent">
              小D
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-slate-600 dark:text-slate-300">
            10年+技术开发经验 · AI科普博主 · 用AI提效工作
          </p>

          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg mb-8">
            AI技术专家 & 效率提升顾问
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="btn-primary magnetic-btn focus-ring"
            >
              了解更多
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary magnetic-btn focus-ring"
            >
              联系我
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 flex items-center justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* 标题部分 */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center mb-6">
              <div className="icon-gradient">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="section-title ml-4">我是谁</h2>
            </div>
          </div>

          {/* 内容卡片 */}
          <div className="modern-card p-8 mb-12 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">愿景使命</h3>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              帮助<span className="font-bold text-blue-600 dark:text-blue-400">更多人</span>掌握AI技术，
              赋能<span className="font-bold text-indigo-600 dark:text-indigo-400">职场人士</span>成为新时代的超级个体！
            </p>
            <p className="text-base text-slate-600 dark:text-slate-400 italic">
              用自己宝贵的技术经验分享实用的AI知识，让更多人受益于人工智能技术。
            </p>
          </div>

          {/* 个人介绍卡片 */}
          <div className="modern-card p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">个人履历</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">10年+软件开发经验，精通多种编程语言和技术栈</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">AI科普博主，专注AI技术研究与推广</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">致力于通过AI技术帮助人们提高工作效率</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">【小D聊AI】公众号创始人，分享实用AI工具和知识</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 flex items-center justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* 标题部分 */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center mb-6">
              <div className="icon-gradient">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="section-title ml-4">我的技能</h2>
            </div>
          </div>

          {/* 技能卡片 */}
          <div className="modern-card p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">擅长方向</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-5 border border-blue-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">编程语言</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">C++, C, Java, Python, JavaScript</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-5 border border-purple-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">数据库</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">MySQL, MS SQL Server</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-5 border border-green-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">系统平台</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Linux, Windows, Android</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-5 border border-yellow-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">AI技术</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">PyTorch, 深度学习, 大模型应用</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-5 border border-red-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">软件开发</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">全栈开发, 系统架构, 性能优化</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-5 border border-cyan-200 dark:border-slate-600">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">AI应用开发</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">智能工具开发, 自动化系统</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-4 flex items-center justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* 标题部分 */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center mb-6">
              <div className="icon-gradient">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="section-title ml-4">我的作品</h2>
            </div>
          </div>

          {/* 作品卡片 */}
          <div className="modern-card p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">产品及服务</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">AI工具开发</h4>
                <p className="text-slate-700 dark:text-slate-300 mb-2">批量定制化重命名文件系统</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">强大的文件批量重命名工具，支持多种命名模式和自定义规则</p>
                <div className="mt-2">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">开发中</span>
                </div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">效率工具</h4>
                <p className="text-slate-700 dark:text-slate-300 mb-2">本地文件查看器</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">轻量级本地文件查看器，支持多种文件格式的快速预览</p>
                <div className="mt-2">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">开发中</span>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">AI科普内容</h4>
                <p className="text-slate-700 dark:text-slate-300 mb-2">【小D聊AI】公众号</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">分享实用AI工具、技术教程和行业洞察，帮助读者掌握AI技术</p>
                <div className="mt-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">持续更新</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 flex items-center justify-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* 标题部分 */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="flex items-center justify-center mb-6">
              <div className="icon-gradient">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="section-title ml-4">联系方式</h2>
            </div>
          </div>

          {/* 联系信息卡片 */}
          <div className="modern-card p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">联系信息</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" clipRule="evenodd" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">公众号</h4>
                <p className="text-slate-600 dark:text-slate-300">小D聊AI</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">微信</h4>
                <p className="text-slate-600 dark:text-slate-300">gptdavid</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Github</h4>
                <a
                  href="https://github.com/jiawei89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  @jiawei89
                </a>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">知识星球</h4>
                <a
                  href="https://t.zsxq.com/15J7IApld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                >
                  加入星球
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-600 dark:text-slate-400 py-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-5xl mx-auto w-full px-4">
          <p className="text-sm">&copy; 2025 小D的个人主页 · AI技术专家 & 效率提升顾问</p>
        </div>
      </footer>
    </div>
  );
}
