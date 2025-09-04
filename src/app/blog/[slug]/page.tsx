import Link from 'next/link';
import { notFound } from 'next/navigation';

// 模拟文章数据
const articles = [
  {
    id: 1,
    title: '如何使用React和Next.js构建现代网站',
    content: `
# 如何使用React和Next.js构建现代网站

在当今的Web开发领域，React和Next.js已经成为构建现代、高性能网站的首选技术栈。本文将探讨为什么这个组合如此强大，以及如何利用它们创建令人印象深刻的Web应用程序。

## React的组件化思想

React的核心理念是组件化。通过将UI拆分为独立、可重用的组件，开发者可以更轻松地管理复杂的用户界面。每个组件都有自己的状态和生命周期，使得代码更加模块化和可维护。

```jsx
function Button({ text, onClick }) {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
```

## Next.js的强大功能

Next.js是一个基于React的框架，它提供了许多开箱即用的功能，如：

- **服务器端渲染(SSR)** - 提高首屏加载速度和SEO表现
- **静态站点生成(SSG)** - 预渲染页面，提供极快的加载速度
- **文件系统路由** - 简化路由配置
- **API路由** - 轻松创建后端API
- **自动代码分割** - 优化加载性能

## 构建一个Next.js项目

创建一个新的Next.js项目非常简单：

```bash
npx create-next-app my-website
cd my-website
npm run dev
```

## 性能优化技巧

使用React和Next.js构建网站时，可以采用以下技巧来优化性能：

1. **使用图片组件** - Next.js的Image组件自动优化图片加载
2. **实现代码分割** - 使用动态导入减小初始加载包的大小
3. **利用缓存** - 合理设置缓存策略
4. **优化字体加载** - 使用Next.js的字体优化功能

## 结论

React和Next.js的组合为开发者提供了一个强大的工具集，使构建现代、高性能、SEO友好的网站变得更加简单。通过利用这些技术，你可以创建出既满足用户需求又符合现代Web标准的出色应用程序。
    `,
    date: '2023-10-15',
    readTime: '8 分钟阅读',
    slug: 'how-to-build-modern-websites',
    category: '前端开发',
  },
  {
    id: 2,
    title: 'CSS动画的艺术：创造引人入胜的用户体验',
    content: `
# CSS动画的艺术：创造引人入胜的用户体验

在现代Web设计中，动画不再只是装饰，而是提升用户体验的关键元素。精心设计的动画可以引导用户注意力、提供反馈、增强交互感，甚至表达品牌个性。本文将探讨如何使用CSS创建优雅、高效的Web动画。

## CSS动画的基础

CSS提供了两种主要的动画机制：transitions和animations。

### Transitions

Transitions允许元素的属性值平滑地从一个状态变化到另一个状态：

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
```

### Animations

Animations提供了更复杂的动画序列控制：

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 1s ease-out forwards;
}
```

## 创建流畅的动画

### 使用适当的属性

某些CSS属性的动画性能比其他属性更好。`transform`和`opacity`通常是最佳选择，因为它们可以利用GPU加速：

```css
/* 推荐 */
.element {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.element:hover {
  transform: translateY(-10px);
}

/* 避免 */
.element {
  top: 0;
  transition: top 0.3s ease;
}

.element:hover {
  top: -10px;
}
```

### 遵循动画原则

迪士尼的12个动画原则同样适用于Web动画：

1. **缓入缓出** - 使用ease、ease-in-out等时间函数
2. **预期** - 在动作发生前给予暗示
3. **跟随和重叠** - 元素不应同时开始或结束动画

## 实用动画示例

### 加载动画

```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: blue;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### 页面转场

```css
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-content {
  animation: fadeSlideUp 0.5s ease-out forwards;
}
```

## 结论

CSS动画是提升用户体验的强大工具。通过理解动画原则、关注性能，并在适当的地方应用动画，你可以创造出既美观又实用的用户界面。记住，好的动画应该是微妙的，它应该增强而不是干扰用户体验。
    `,
    date: '2023-09-28',
    readTime: '6 分钟阅读',
    slug: 'css-animation-art',
    category: 'CSS',
  },
  {
    id: 3,
    title: '响应式设计的最佳实践',
    content: `
# 响应式设计的最佳实践

在多设备时代，响应式设计已经从一种选择变成了必需。用户期望在任何设备上都能获得良好的浏览体验，无论是桌面电脑、平板还是手机。本文将分享一些响应式设计的最佳实践，帮助你创建在各种屏幕尺寸上都表现出色的网站。

## 移动优先设计

移动优先设计意味着首先为移动设备设计界面，然后再逐步增强以适应更大的屏幕。这种方法有几个优势：

- 强制你专注于核心内容和功能
- 确保移动用户获得最佳体验
- 通常导致更快的加载时间

```css
/* 移动设备基础样式 */
.container {
  padding: 15px;
}

/* 平板电脑及以上 */
@media (min-width: 768px) {
  .container {
    padding: 30px;
  }
}

/* 桌面电脑 */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## 灵活的网格系统

使用灵活的网格系统而不是固定像素值：

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

这段代码创建了一个自适应的网格，每列至少250px宽，并自动填充可用空间。

## 响应式图片

图片通常是网页中最大的资源，正确处理它们对响应式设计至关重要：

```html
<img 
  srcset="image-small.jpg 500w, image-medium.jpg 1000w, image-large.jpg 1500w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
  src="image-medium.jpg"
  alt="响应式图片示例"
/>
```

## 响应式排版

使用相对单位而不是固定像素值：

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px */
}

p {
  font-size: 1rem; /* 16px */
  line-height: 1.5;
}

@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
}
```

## 测试和调试

响应式设计需要在各种设备和浏览器上进行测试。使用以下工具：

- 浏览器开发者工具的设备模拟功能
- 真实设备测试
- 响应式设计测试工具如Responsively App

## 结论

响应式设计不仅仅是技术实现，更是一种思维方式。通过采用移动优先设计、使用灵活的布局系统、优化媒体资源，并持续测试，你可以创建出在任何设备上都能提供出色用户体验的网站。记住，最好的响应式设计是那些用户甚至没有注意到的设计——因为一切都正常工作，无论他们使用什么设备。
    `,
    date: '2023-09-10',
    readTime: '5 分钟阅读',
    slug: 'responsive-design-best-practices',
    category: '设计',
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // 查找匹配的文章
  const article = articles.find(article => article.slug === slug);
  
  // 如果找不到文章，返回404
  if (!article) {
    notFound();
  }
  
  // 将Markdown内容转换为HTML（简化版，实际应用中应使用markdown解析库）
  const contentHtml = article.content
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal mb-2">$1</li>')
    .replace(/^- (.+)$/gm, '<li class="ml-6 list-disc mb-2">$1</li>')
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\n/g, '<br />');

  return (
    <div className="container-custom py-12">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="text-primary-light dark:text-primary-dark inline-flex items-center mb-6 hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回文章列表
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
            <span className="mx-2">•</span>
            <span className="text-primary-light dark:text-primary-dark">{article.category}</span>
          </div>
        </div>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: `<p class="mb-4">${contentHtml}</p>` }}
        />
      </article>
    </div>
  );
}