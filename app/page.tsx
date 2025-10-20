"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">小D</div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "works", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section === "home" && "首页"}
                  {section === "about" && "我是谁"}
                  {section === "skills" && "我的技能"}
                  {section === "works" && "我的作品"}
                  {section === "contact" && "联系方式"}
                </button>
              ))}
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/avatar.png"
              alt="小D头像"
              width={200}
              height={200}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            小D
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            10年+技术开发经验 · AI科普博主 · 用AI提效工作
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection("about")}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              了解更多
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              联系我
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            我是谁
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/avatar.png"
                  alt="小D"
                  width={300}
                  height={300}
                  className="w-64 h-64 rounded-2xl shadow-xl mx-auto"
                />
              </div>
              <div className="order-1 md:order-2 text-left">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  小D | 10年+技术开发经验
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  我是一名充满热情的技术开发者，拥有超过10年的软件开发经验。
                  热衷于AI技术研究，专注于帮助人们通过AI技术提高工作效率。
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  作为AI科普博主，我致力于分享实用的AI知识和工具，
                  让更多人了解并受益于人工智能技术。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            我的技能
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-4">
                  编程语言
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["C++", "C", "Java", "Python", "JavaScript", "HTML"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg text-center font-medium text-gray-800 dark:text-white"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-l-4 border-cyan-500 pl-4">
                  技术栈
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["MySQL", "MS SQL Server", "Linux", "Android", "PyTorch"].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg text-center font-medium text-gray-800 dark:text-white"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            我的作品
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "批量定制化重命名文件系统",
                  description: "强大的文件批量重命名工具，支持多种命名模式和自定义规则",
                  status: "开发中"
                },
                {
                  title: "本地文件查看器",
                  description: "轻量级本地文件查看器，支持多种文件格式的快速预览",
                  status: "开发中"
                }
              ].map((work, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {work.title}
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                      {work.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {work.description}
                  </p>
                  <div className="mt-6">
                    <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                      查看详情 →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            联系方式
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" clipRule="evenodd" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">公众号</h4>
                    <p className="text-gray-600 dark:text-gray-300">小D聊AI</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">微信</h4>
                    <p className="text-gray-600 dark:text-gray-300">gptdavid</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Github</h4>
                    <p className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                      https://github.com/jiawei89
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">知识星球</h4>
                    <p className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer">
                      https://t.zsxq.com/15J7IApld
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                  发送消息
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      消息
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                      placeholder="请输入您的消息"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-bg text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 小D的个人主页. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
