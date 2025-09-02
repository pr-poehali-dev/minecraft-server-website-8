import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [onlineCount] = useState(1247)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const topPlayers = [
    { name: 'DragonSlayer', level: 89, coins: 15420 },
    { name: 'MineKing', level: 76, coins: 12890 },
    { name: 'CraftMaster', level: 72, coins: 11560 },
    { name: 'BlockBuilder', level: 68, coins: 10230 },
    { name: 'RedstoneWiz', level: 65, coins: 9840 }
  ]

  const shopItems = [
    { name: 'VIP статус', price: 299, description: 'Эксклюзивные привилегии на 30 дней' },
    { name: 'Алмазный набор', price: 150, description: 'Полный сет алмазной брони и оружия' },
    { name: 'Дом мечты', price: 500, description: 'Готовый дом с мебелью' },
    { name: '1000 монет', price: 99, description: 'Игровая валюта сервера' }
  ]

  const news = [
    { title: 'Обновление 2.1: Новые биомы!', date: '28.08.2024', excerpt: 'Добавили 5 новых биомов с уникальными мобами и ресурсами.' },
    { title: 'Турнир строителей', date: '25.08.2024', excerpt: 'Приз 5000 монет лучшему архитектору!' },
    { title: 'Техработы завершены', date: '22.08.2024', excerpt: 'Сервер работает стабильно, лаги устранены.' }
  ]

  return (
    <div className="min-h-screen bg-minecraft-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-minecraft-blue">CRAFTWORLD</div>
              <Badge variant="secondary" className="bg-minecraft-green text-white">
                <Icon name="Users" size={14} className="mr-1" />
                {onlineCount} онлайн
              </Badge>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Главная', 'Правила', 'Новости', 'Форум', 'Статистика'].map((item) => (
                <a key={item} href="#" className="text-minecraft-darkgray hover:text-minecraft-green transition-colors story-link">
                  {item}
                </a>
              ))}
            </nav>

            <Button className="bg-minecraft-green hover:bg-minecraft-green/90 text-white">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-minecraft-blue to-minecraft-darkgray text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            ДОБРО ПОЖАЛОВАТЬ НА CRAFTWORLD
          </h1>
          <p className="text-xl mb-8 text-white/90 animate-fade-in">
            Лучший Minecraft сервер с уникальными мирами, дружелюбным сообществом и захватывающими приключениями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-green/90 text-white px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              НАЧАТЬ ИГРУ
            </Button>
            <div className="text-sm text-white/80">
              IP: craftworld.server.com
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="news">Новости</TabsTrigger>
            <TabsTrigger value="rules">Правила</TabsTrigger>
            <TabsTrigger value="shop">Магазин</TabsTrigger>
            <TabsTrigger value="stats">Рейтинги</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <CardTitle className="text-minecraft-blue">{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-minecraft-darkgray">{item.excerpt}</p>
                    <Button variant="ghost" className="mt-4 text-minecraft-green p-0">
                      Читать далее →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rules" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-minecraft-blue flex items-center">
                  <Icon name="Shield" size={24} className="mr-2 text-minecraft-green" />
                  Правила сервера
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-minecraft-blue mb-3">Основные правила</h3>
                    <ul className="space-y-2 text-minecraft-darkgray">
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-minecraft-green mt-1 flex-shrink-0" />
                        Уважайте других игроков
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-minecraft-green mt-1 flex-shrink-0" />
                        Запрещён читинг и баги
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-minecraft-green mt-1 flex-shrink-0" />
                        Не спамьте в чате
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={16} className="mr-2 text-minecraft-green mt-1 flex-shrink-0" />
                        Стройте красиво
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-minecraft-blue mb-3">Наказания</h3>
                    <ul className="space-y-2 text-minecraft-darkgray">
                      <li className="flex items-start">
                        <Icon name="AlertTriangle" size={16} className="mr-2 text-yellow-500 mt-1 flex-shrink-0" />
                        Мут за спам: 30 минут
                      </li>
                      <li className="flex items-start">
                        <Icon name="AlertTriangle" size={16} className="mr-2 text-yellow-500 mt-1 flex-shrink-0" />
                        Кик за нарушения: предупреждение
                      </li>
                      <li className="flex items-start">
                        <Icon name="X" size={16} className="mr-2 text-red-500 mt-1 flex-shrink-0" />
                        Бан за читы: навсегда
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shop" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shopItems.map((item, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <CardTitle className="text-minecraft-blue">{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-minecraft-green mb-4">
                      {item.price}₽
                    </div>
                    <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-minecraft-blue flex items-center">
                  <Icon name="Trophy" size={24} className="mr-2 text-minecraft-green" />
                  Топ игроков
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPlayers.map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-minecraft-gray rounded-lg hover-scale">
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-minecraft-green text-white w-8 h-8 rounded-full flex items-center justify-center">
                          {index + 1}
                        </Badge>
                        <div>
                          <div className="font-semibold text-minecraft-blue">{player.name}</div>
                          <div className="text-sm text-minecraft-darkgray">Уровень {player.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-minecraft-green">{player.coins.toLocaleString()}</div>
                        <div className="text-sm text-minecraft-darkgray">монет</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register" className="mt-8">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-minecraft-blue flex items-center justify-center">
                    <Icon name="UserPlus" size={24} className="mr-2 text-minecraft-green" />
                    Регистрация
                  </CardTitle>
                  <CardDescription className="text-center">
                    Создайте аккаунт для игры на сервере
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="username">Никнейм</Label>
                    <Input 
                      id="username" 
                      placeholder="Введите никнейм"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                  <p className="text-sm text-minecraft-darkgray text-center">
                    После регистрации вам на email придут инструкции для входа
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Stats Bar */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-minecraft-green">1,247</div>
              <div className="text-minecraft-darkgray">Игроков онлайн</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-minecraft-green">15,892</div>
              <div className="text-minecraft-darkgray">Зарегистрировано</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-minecraft-green">99.9%</div>
              <div className="text-minecraft-darkgray">Время работы</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-minecraft-green">24/7</div>
              <div className="text-minecraft-darkgray">Техподдержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CRAFTWORLD</h3>
              <p className="text-white/80">
                Лучший Minecraft сервер с уникальными возможностями и дружелюбным сообществом.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-minecraft-green transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-minecraft-green transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-minecraft-green transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-minecraft-green transition-colors">VK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Подключение</h4>
              <p className="text-white/80 mb-2">IP сервера:</p>
              <code className="bg-minecraft-darkgray px-3 py-1 rounded text-minecraft-green">
                craftworld.server.com
              </code>
              <p className="text-white/80 mt-4 text-sm">Версия: 1.20.x</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 CraftWorld Server. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index