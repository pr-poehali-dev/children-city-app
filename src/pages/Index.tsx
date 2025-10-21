import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const professions = [
  { id: 1, name: 'Доктор', icon: '🩺', color: 'bg-red-100', textColor: 'text-red-700', description: 'Лечи пациентов и спасай жизни' },
  { id: 2, name: 'Повар', icon: '👨‍🍳', color: 'bg-yellow-100', textColor: 'text-yellow-700', description: 'Готовь вкусные блюда' },
  { id: 3, name: 'Пожарный', icon: '🚒', color: 'bg-orange-100', textColor: 'text-orange-700', description: 'Тушь пожары и спасай людей' },
  { id: 4, name: 'Художник', icon: '🎨', color: 'bg-purple-100', textColor: 'text-purple-700', description: 'Создавай красивые картины' },
  { id: 5, name: 'Строитель', icon: '👷', color: 'bg-cyan-100', textColor: 'text-cyan-700', description: 'Строй дома и здания' },
  { id: 6, name: 'Полицейский', icon: '👮', color: 'bg-blue-100', textColor: 'text-blue-700', description: 'Охраняй порядок в городе' },
];

const schedule = [
  { time: '10:00', activity: 'Доктор - Приём пациентов', color: 'bg-red-100' },
  { time: '11:30', activity: 'Повар - Мастер-класс по пицце', color: 'bg-yellow-100' },
  { time: '13:00', activity: 'Пожарный - Тренировка', color: 'bg-orange-100' },
  { time: '14:30', activity: 'Художник - Рисование', color: 'bg-purple-100' },
  { time: '16:00', activity: 'Строитель - Постройка дома', color: 'bg-cyan-100' },
];

const achievements = [
  { id: 1, name: 'Первый день', icon: '⭐', earned: true },
  { id: 2, name: 'Попробовал 3 профессии', icon: '🌟', earned: true },
  { id: 3, name: 'Мастер профессий', icon: '🏆', earned: false },
  { id: 4, name: 'Помощник города', icon: '🎖️', earned: true },
  { id: 5, name: 'Супер работник', icon: '💎', earned: false },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState<'home' | 'professions' | 'schedule' | 'achievements'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-red-500 via-yellow-500 to-cyan-500 bg-clip-text text-transparent">
            Детский Город 🏙️
          </h1>
          <p className="text-lg text-gray-600">Выбери профессию и стань профессионалом!</p>
        </header>

        <nav className="flex justify-center gap-3 mb-8 flex-wrap">
          <Button
            onClick={() => setActiveTab('home')}
            className={`rounded-full px-6 py-6 text-lg font-bold transition-all hover:scale-105 ${
              activeTab === 'home' ? 'bg-gradient-to-r from-red-400 to-pink-400 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icon name="Home" className="mr-2" size={24} />
            Главная
          </Button>
          <Button
            onClick={() => setActiveTab('professions')}
            className={`rounded-full px-6 py-6 text-lg font-bold transition-all hover:scale-105 ${
              activeTab === 'professions' ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icon name="Briefcase" className="mr-2" size={24} />
            Профессии
          </Button>
          <Button
            onClick={() => setActiveTab('schedule')}
            className={`rounded-full px-6 py-6 text-lg font-bold transition-all hover:scale-105 ${
              activeTab === 'schedule' ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icon name="Calendar" className="mr-2" size={24} />
            Расписание
          </Button>
          <Button
            onClick={() => setActiveTab('achievements')}
            className={`rounded-full px-6 py-6 text-lg font-bold transition-all hover:scale-105 ${
              activeTab === 'achievements' ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white' : 'bg-white text-gray-700'
            }`}
          >
            <Icon name="Trophy" className="mr-2" size={24} />
            Достижения
          </Button>
        </nav>

        <main className="animate-fade-in">
          {activeTab === 'home' && (
            <div className="text-center space-y-6">
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Привет, юный профессионал! 👋</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Добро пожаловать в Детский Город! Здесь ты можешь попробовать разные профессии, узнать что-то новое и весело провести время.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <Card className="p-6 bg-gradient-to-br from-red-100 to-pink-100 border-0 hover:scale-105 transition-transform">
                    <div className="text-5xl mb-3">🎯</div>
                    <h3 className="text-xl font-bold mb-2">6 Профессий</h3>
                    <p className="text-gray-600">Попробуй себя в разных ролях</p>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 border-0 hover:scale-105 transition-transform">
                    <div className="text-5xl mb-3">⏰</div>
                    <h3 className="text-xl font-bold mb-2">Расписание</h3>
                    <p className="text-gray-600">Узнай когда начинаются занятия</p>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 border-0 hover:scale-105 transition-transform">
                    <div className="text-5xl mb-3">🏆</div>
                    <h3 className="text-xl font-bold mb-2">Достижения</h3>
                    <p className="text-gray-600">Собирай награды за успехи</p>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'professions' && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Выбери профессию 🎭</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professions.map((profession) => (
                  <Card
                    key={profession.id}
                    className={`${profession.color} border-0 p-6 hover:scale-105 transition-all cursor-pointer shadow-lg`}
                  >
                    <div className="text-6xl mb-4 text-center">{profession.icon}</div>
                    <h3 className={`text-2xl font-bold mb-2 text-center ${profession.textColor}`}>
                      {profession.name}
                    </h3>
                    <p className="text-center text-gray-700 mb-4">{profession.description}</p>
                    <Button className="w-full bg-white text-gray-800 hover:bg-gray-100 font-bold rounded-full">
                      Выбрать профессию
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Расписание на сегодня 📅</h2>
              <Card className="bg-white shadow-xl p-8 rounded-3xl">
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} rounded-2xl p-5 flex items-center gap-4 hover:scale-102 transition-transform`}
                    >
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                        <Icon name="Clock" size={28} className="text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-gray-800">{item.time}</div>
                        <div className="text-lg text-gray-700">{item.activity}</div>
                      </div>
                      <Icon name="ChevronRight" size={28} className="text-gray-500" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Твои достижения 🎖️</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.id}
                    className={`p-6 border-0 text-center hover:scale-105 transition-all ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-yellow-100 to-orange-100 shadow-lg'
                        : 'bg-gray-100 opacity-50'
                    }`}
                  >
                    <div className="text-6xl mb-3">{achievement.icon}</div>
                    <h3 className="font-bold text-gray-800 text-sm">{achievement.name}</h3>
                    {achievement.earned && (
                      <Badge className="mt-3 bg-green-500 text-white">Получено! ✓</Badge>
                    )}
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Card className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 p-6 border-0">
                  <p className="text-2xl font-bold text-gray-800">
                    Собрано: {achievements.filter((a) => a.earned).length} из {achievements.length}
                  </p>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
