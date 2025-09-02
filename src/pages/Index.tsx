import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [onlineCount] = useState(0)
  const [totalPlayers] = useState(376)
  const [maxPlayers] = useState(500)
  
  const servers = [
    { name: 'Выживание', online: 156, version: '1.20.4', status: 'online' },
    { name: 'Креатив', online: 89, version: '1.20.4', status: 'online' },
    { name: 'Мини-игры', online: 131, version: '1.20.4', status: 'online' },
    { name: 'Анархия', online: 0, version: '1.20.4', status: 'maintenance' }
  ]

  const news = [
    { title: 'Открыт новый сервер Анархия', date: '01.09.2024', excerpt: 'Полная свобода действий без правил и ограничений' },
    { title: 'Турнир строителей стартовал!', date: '28.08.2024', excerpt: 'Главный приз 10.000 рублей' },
    { title: 'Обновление до версии 1.20.4', date: '25.08.2024', excerpt: 'Новые блоки и улучшения производительности' }
  ]

  const features = [
    { icon: 'Shield', title: 'Защита территорий', desc: 'Приватные регионы' },
    { icon: 'Coins', title: 'Экономика', desc: 'Торговля и аукционы' },
    { icon: 'Users', title: 'Кланы', desc: 'Объединяйтесь в группы' },
    { icon: 'Zap', title: 'События', desc: 'Ежедневные квесты' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 z-0"
        style={{
          backgroundImage: `url('/img/f88d3a97-b85f-427c-b186-11752c77e128.jpg')`
        }}
      />
      
      {/* Floating particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-60 left-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-purple-500/30 bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-md shadow-lg shadow-purple-500/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-pink-400 hover:bg-pink-500/20 p-2 border border-pink-500/30 rounded-lg">
                  <Icon name="Menu" size={20} />
                </Button>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Icon name="Gamepad2" size={24} className="text-white" />
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-lg shadow-pink-500/30 border border-pink-400/30">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать лаунчер
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
              ANIME<br />
              CRAFT<br />
              СЕРВЕР<br />
              ✨ 2024 ✨
            </h1>
            
            <p className="text-xl text-pink-200 mb-12 font-medium">
              🌸 Добро пожаловать в мир аниме и приключений! 🌸
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 md:gap-16 mb-12">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-pink-300 text-lg font-medium">💖 В ИГРЕ</span>
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{onlineCount}</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-purple-300 text-lg font-medium">✨ ВСЕГО</span>
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{totalPlayers}</div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-12 py-4 text-lg rounded-2xl mb-4 shadow-xl shadow-pink-500/40 border border-pink-400/30 hover-scale font-bold">
              <Icon name="Download" size={20} className="mr-3" />
              СКАЧАТЬ ЛАУНЧЕР
            </Button>

            <div className="text-slate-400">
              Клиент также доступен на <span className="text-blue-400">Linux</span> и <span className="text-blue-400">MacOS</span>
            </div>
          </div>
        </section>

        {/* Servers Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center mb-12">🌺 Наши серверы 🌺</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servers.map((server, index) => (
                <Card key={index} className="bg-slate-800/80 border-slate-700 hover:bg-slate-800/90 transition-all hover-scale">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-lg font-bold">{server.name} ✨</CardTitle>
                      <Badge 
                        variant={server.status === 'online' ? 'default' : 'secondary'} 
                        className={server.status === 'online' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white border border-green-300/30' : 'bg-gradient-to-r from-red-400 to-pink-500 text-white border border-red-300/30'}
                      >
                        {server.status === 'online' ? 'Онлайн' : 'ТО'}
                      </Badge>
                    </div>
                    <p className="text-pink-300 text-sm font-medium">Ver. {server.version}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-300">👥 Игроков:</span>
                      <span className="text-pink-400 font-bold">{server.online}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-12">💫 Возможности 💫</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 border border-purple-500/30 text-center hover:border-pink-400/50 transition-all hover-scale shadow-lg shadow-purple-500/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-400/30">
                      <Icon name={feature.icon as any} size={32} className="text-pink-400" />
                    </div>
                    <CardTitle className="text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text font-bold">{feature.title} ✨</CardTitle>
                    <CardDescription className="text-pink-200">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center mb-12">📰 Новости 📰</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 border border-purple-500/30 hover:border-pink-400/50 transition-all hover-scale shadow-lg shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-lg leading-tight font-bold">{item.title} 🌟</CardTitle>
                    <CardDescription className="text-pink-400 font-medium">{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-pink-200 text-sm mb-4">{item.excerpt}</p>
                    <Button variant="ghost" className="text-pink-400 hover:text-pink-300 p-0 font-semibold">
                      Читать далее → 💖
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">🔗 Как подключиться 🔗</h2>
            
            <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/30">
              <div className="text-pink-300 mb-4 font-medium">🌸 IP адрес сервера:</div>
              <code className="text-2xl font-mono text-pink-400 bg-purple-900/50 px-6 py-3 rounded-xl border border-pink-400/30 shadow-lg">
                animecraft.ru
              </code>
              <div className="text-pink-300 mt-6">
                Версия Minecraft: <span className="text-purple-300 font-bold">1.20.4</span> ✨
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-500/30 bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-md py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                    <Icon name="Gamepad2" size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">AnimeCraft ✨</h3>
                </div>
                <p className="text-pink-200">
                  🌸 Лучший аниме Minecraft сервер с уникальными возможностями! 🌸
                </p>
              </div>
              
              <div>
                <h4 className="text-pink-300 font-bold mb-4">💖 Сообщество</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">Discord 💬</a></li>
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">Telegram ✨</a></li>
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">VK 💖</a></li>
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">YouTube 🎥</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-pink-300 font-bold mb-4">🎆 Поддержка</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">Правила 📜</a></li>
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">Помощь ❤️</a></li>
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">Донат 💰</a></li>
                  <li><a href="#" className="text-purple-300 hover:text-pink-400 transition-colors font-medium">Форум 🗨️</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-purple-500/30 mt-12 pt-8 text-center">
              <p className="text-purple-400">&copy; 2024 AnimeCraft. Все права защищены. Made with ❤️ by otaku</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Index