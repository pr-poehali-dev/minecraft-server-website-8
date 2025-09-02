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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage: `url('/img/14235551-d229-4b1e-b5ca-25977c87e6a2.jpg')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-500/10 p-2">
                  <Icon name="Menu" size={20} />
                </Button>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={24} className="text-white" />
                </div>
              </div>
              
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать лаунчер
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              McGround -<br />
              Комплекс<br />
              серверов<br />
              Minecraft
            </h1>
            
            <p className="text-xl text-slate-300 mb-12">
              На пути истины
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 md:gap-16 mb-12">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-slate-400 text-lg">В ИГРЕ</span>
                </div>
                <div className="text-6xl font-bold text-white">{onlineCount}</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-slate-400 text-lg">ВСЕГО</span>
                </div>
                <div className="text-6xl font-bold text-white">{totalPlayers}</div>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg rounded-lg mb-4">
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Наши серверы</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servers.map((server, index) => (
                <Card key={index} className="bg-slate-800/80 border-slate-700 hover:bg-slate-800/90 transition-all hover-scale">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-lg">{server.name}</CardTitle>
                      <Badge 
                        variant={server.status === 'online' ? 'default' : 'secondary'} 
                        className={server.status === 'online' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}
                      >
                        {server.status === 'online' ? 'Онлайн' : 'ТО'}
                      </Badge>
                    </div>
                    <p className="text-slate-400 text-sm">{server.version}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Игроков:</span>
                      <span className="text-white font-semibold">{server.online}</span>
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">Возможности</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/80 border-slate-700 text-center hover:bg-slate-800/90 transition-all hover-scale">
                  <CardHeader>
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={feature.icon as any} size={32} className="text-red-500" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-400">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Новости</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="bg-slate-800/80 border-slate-700 hover:bg-slate-800/90 transition-all hover-scale">
                  <CardHeader>
                    <CardTitle className="text-white text-lg leading-tight">{item.title}</CardTitle>
                    <CardDescription className="text-red-400">{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm mb-4">{item.excerpt}</p>
                    <Button variant="ghost" className="text-red-400 hover:text-red-300 p-0">
                      Читать далее →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Как подключиться</h2>
            
            <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700">
              <div className="text-slate-400 mb-4">IP адрес сервера:</div>
              <code className="text-2xl font-mono text-red-400 bg-slate-900/50 px-6 py-3 rounded-lg">
                mcground.ru
              </code>
              <div className="text-slate-400 mt-6">
                Версия Minecraft: <span className="text-white">1.20.4</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700/50 bg-slate-900/80 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Icon name="Gamepad2" size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">McGround</h3>
                </div>
                <p className="text-slate-400">
                  Лучший игровой опыт в Minecraft с уникальными возможностями.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Сообщество</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Discord</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Telegram</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">VK</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">YouTube</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Поддержка</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Правила</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Помощь</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Донат</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-red-400 transition-colors">Форум</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
              <p className="text-slate-500">&copy; 2024 McGround. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Index