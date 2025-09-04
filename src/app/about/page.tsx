import { motion } from 'framer-motion';

// 技能数据
const skills = [
  { name: 'Cursor', description: '熟练掌握AI编程工具，能够高效进行代码开发和调试' },
  { name: 'Figma', description: '精通界面设计和原型制作，具备完整的设计流程经验' },
  { name: 'Axure', description: '擅长交互原型设计，能够制作高保真的产品原型' },
  { name: 'Adobe', description: '熟悉Creative Suite套件，具备平面设计和视觉创作能力' },
];

// 社交媒体数据
const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: '微信',
    url: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.248 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1 .134-.55c1.515-1.125 2.5-2.848 2.5-4.633.001-3.671-3.505-6.895-8.016-6.895zm-2.68 3.476c.535 0 .969.441.969.984 0 .544-.434.985-.969.985s-.969-.441-.969-.985c0-.543.434-.984.969-.984zm5.362 0c.535 0 .969.441.969.984 0 .544-.434.985-.969.985s-.969-.441-.969-.985c0-.543.434-.984.969-.984z"/>
      </svg>
    )
  },
  {
    name: '抖音',
    url: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  },
  {
    name: '小红书',
    url: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 个人简介 */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">个人简介</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            我是一名充满创造力的前端开发者和UI/UX设计师，专注于打造优雅且用户友好的数字体验。拥有丰富的产品设计和开发经验，熟练运用现代化工具和技术栈。热爱探索新技术，善于将创意想法转化为实际的产品解决方案，致力于通过设计和技术的结合创造有价值的用户体验。
          </p>
        </div>
        
        {/* 专业技能 */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8">专业技能</h2>
          <div className="skills-two-column">
            <div className="skills-column">
              <div className="skill-item">
                <span className="skill-name">前端开发</span>
                <span className="skill-description">精通HTML、CSS、JavaScript，熟悉React、Vue等现代框架</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">UI/UX设计</span>
                <span className="skill-description">专业的用户界面和用户体验设计，注重用户需求和视觉美感</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">设计工具</span>
                <span className="skill-description">熟练使用Figma、Sketch、Adobe系列等专业设计软件</span>
              </div>
            </div>
            <div className="skills-divider"></div>
            <div className="skills-column">
              <div className="skill-item">
                <span className="skill-name">原型制作</span>
                <span className="skill-description">擅长使用Axure、Figma等工具制作交互原型和高保真设计稿</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">AI工具</span>
                <span className="skill-description">熟练运用Cursor、ChatGPT等AI辅助工具提升工作效率</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">产品思维</span>
                <span className="skill-description">具备产品设计思维，能够从用户角度思考产品功能和体验</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 联系方式 */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8">联系方式</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-white group-hover:bg-gray-800 dark:group-hover:text-gray-900 dark:group-hover:bg-gray-100 transition-all duration-300 rounded p-1 [&>svg]:w-full [&>svg]:h-full">
                  {link.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}