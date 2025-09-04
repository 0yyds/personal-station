import Link from 'next/link';

// 模拟更多文章数据
const articles = [
  {
    id: 1,
    title: '如何使用React和Next.js构建现代网站',
    excerpt: '探索React和Next.js的强大功能，了解如何构建高性能、SEO友好的现代网站。',
    date: '2023-10-15',
    readTime: '8 分钟阅读',
    slug: 'how-to-build-modern-websites',
    category: '前端开发',
  },
  {
    id: 2,
    title: 'CSS动画的艺术：创造引人入胜的用户体验',
    excerpt: '深入了解CSS动画和过渡效果，学习如何创造令人惊叹的用户界面和交互体验。',
    date: '2023-09-28',
    readTime: '6 分钟阅读',
    slug: 'css-animation-art',
    category: 'CSS',
  },
  {
    id: 3,
    title: '响应式设计的最佳实践',
    excerpt: '学习创建在各种设备上都能完美展示的网站的技巧和策略。',
    date: '2023-09-10',
    readTime: '5 分钟阅读',
    slug: 'responsive-design-best-practices',
    category: '设计',
  },
  {
    id: 4,
    title: 'TypeScript入门指南',
    excerpt: '了解TypeScript的基础知识，以及如何在你的项目中使用它来提高代码质量。',
    date: '2023-08-22',
    readTime: '10 分钟阅读',
    slug: 'typescript-getting-started',
    category: '编程语言',
  },
  {
    id: 5,
    title: '使用Tailwind CSS加速UI开发',
    excerpt: '探索Tailwind CSS如何通过其实用优先的方法改变前端开发流程。',
    date: '2023-08-05',
    readTime: '7 分钟阅读',
    slug: 'tailwind-css-speedup-ui-development',
    category: 'CSS',
  },
  {
    id: 6,
    title: 'Web性能优化技巧',
    excerpt: '学习提高网站加载速度和用户体验的实用技巧和最佳实践。',
    date: '2023-07-18',
    readTime: '9 分钟阅读',
    slug: 'web-performance-optimization',
    category: '性能优化',
  },
];

// 获取所有分类
const categories = [...new Set(articles.map(article => article.category))];

export default function BlogPage() {
  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6">博客文章</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          分享我关于前端开发、设计和技术的想法和经验。
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 侧边栏 */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-lg font-semibold mb-4">分类</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog"
                  className="text-primary-light dark:text-primary-dark font-medium"
                >
                  全部文章
                </Link>
              </li>
              {categories.map(category => (
                <li key={category}>
                  <Link 
                    href={`/blog/category/${category.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 文章列表 */}
        <div className="lg:col-span-3">
          <div className="space-y-8">
            {articles.map(article => (
              <article 
                key={article.id}
                className="card p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                  <span className="mx-2">•</span>
                  <span className="text-primary-light dark:text-primary-dark">{article.category}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-3 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}