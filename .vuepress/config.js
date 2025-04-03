module.exports = {
  theme: 'blog',
  title: '我的课程集散地',
  description: '欢迎来到我的课程集散地',
  themeConfig: {
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '课程一', link: '/course1.html' },
      { text: '课程二', link: '/course2.html' }
    ],
    // 侧边栏配置
    sidebar: [
      '/',
      '/course1.html',
      '/course2.html'
    ],
    // 启用分类功能
    category: true,
    // 启用标签功能
    tag: true,
    // 启用归档功能
    archive: true,
    // 设置导航栏图标（可选）
    logo: '/images/logo.png',
    // 设置导航栏布局（可选）
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Search']
    }
  }
}
