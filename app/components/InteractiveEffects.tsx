"use client";

import { useEffect, useState } from 'react';

export default function InteractiveEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 鼠标跟随效果
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 滚动触发动画 - 使用 Intersection Observer API
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // 观察所有带有 animate-on-scroll 类的元素
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => observer.observe(element));

    // 磁性按钮效果
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('magnetic-btn')) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        target.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('magnetic-btn')) {
        target.style.transform = 'translate(0px, 0px) scale(1)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 鼠标跟随光效 */}
      <div
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
    </>
  );
}