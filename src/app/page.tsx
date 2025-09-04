import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import VideoBackground from '@/components/VideoBackground';

// 模拟文章数据
const articles = [
  {
    id: 1,
    title: '如何使用React和Next.js构建现代网站',
    excerpt: '探索React和Next.js的强大功能，了解如何构建高性能、SEO友好的现代网站。',
    date: '2023-10-15',
    readTime: '8 分钟阅读',
    slug: 'how-to-build-modern-websites',
  },
  {
    id: 2,
    title: 'CSS动画的艺术：创造引人入胜的用户体验',
    excerpt: '深入了解CSS动画和过渡效果，学习如何创造令人惊叹的用户界面和交互体验。',
    date: '2023-09-28',
    readTime: '6 分钟阅读',
    slug: 'css-animation-art',
  },
  {
    id: 3,
    title: '响应式设计的最佳实践',
    excerpt: '学习创建在各种设备上都能完美展示的网站的技巧和策略。',
    date: '2023-09-10',
    readTime: '5 分钟阅读',
    slug: 'responsive-design-best-practices',
  },
];

export default function Home() {
  return (
    <div className="container-custom py-12">
      <VideoBackground videoSrc="/videos/bg.mp4" overlayOpacity={60} />
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-400 text-transparent bg-clip-text">
            你好，我是 Kuma
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            这是一段个人简介这是一段个人简介这是一段个人简介这是一段个人简介
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/about"
              className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              了解更多
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              联系我
            </Link>
          </div>
        </div>
      </div>

      {/* 文章列表 */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date} · {article.readTime}</p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                <Link 
                  href={`/blog/${article.slug}`}
                  className="text-primary-light dark:text-primary-dark font-medium inline-flex items-center link-hover"
                >
                  阅读更多
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            查看所有文章
          </Link>
        </div>
      </div>
    </div>
  );
}