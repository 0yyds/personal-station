// 用于将Next.js项目导出为静态HTML文件的脚本
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 确保.next目录存在
const buildDir = path.join(__dirname, '.next');
if (!fs.existsSync(buildDir)) {
  console.log('构建Next.js项目...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
  } catch (error) {
    console.error('构建失败:', error);
    process.exit(1);
  }
}

// 创建输出目录
const outputDir = path.join(__dirname, 'out');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 导出静态HTML
console.log('导出静态HTML文件...');
try {
  // 使用next build命令，配合next.config.js中的output: 'export'配置
  execSync('npx next build', { stdio: 'inherit' });
  console.log('导出完成！静态文件位于 ./out 目录');
  
  // 复制index.html到项目根目录
  const indexHtml = path.join(outputDir, 'index.html');
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, path.join(__dirname, 'index.html'));
    console.log('已将index.html复制到项目根目录');
  }
} catch (error) {
  console.error('导出失败:', error);
  process.exit(1);
}