import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  category: string;
  progress: number;
  image: string;
  duration: string;
  level: string;
  students: number;
}

const Index = () => {
  const [activeView, setActiveView] = useState<'catalog' | 'profile'>('catalog');

  const courses: Course[] = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      category: 'Программирование',
      progress: 65,
      image: 'https://cdn.poehali.dev/projects/db4cf633-c7aa-41df-8f33-49f2fb63019d/files/85177395-f879-4e8d-b87f-f1ee27917c17.jpg',
      duration: '12 недель',
      level: 'Начинающий',
      students: 12453
    },
    {
      id: 2,
      title: 'UI/UX дизайн 2024',
      category: 'Дизайн',
      progress: 40,
      image: 'https://cdn.poehali.dev/projects/db4cf633-c7aa-41df-8f33-49f2fb63019d/files/22a98e59-a608-4ee2-afb2-494c13736ae2.jpg',
      duration: '8 недель',
      level: 'Средний',
      students: 8932
    },
    {
      id: 3,
      title: 'Data Science & ML',
      category: 'Аналитика',
      progress: 20,
      image: 'https://cdn.poehali.dev/projects/db4cf633-c7aa-41df-8f33-49f2fb63019d/files/175653c1-a6f0-40a1-a619-a77dd1402211.jpg',
      duration: '16 недель',
      level: 'Продвинутый',
      students: 5678
    },
    {
      id: 4,
      title: 'React Advanced',
      category: 'Программирование',
      progress: 0,
      image: 'https://cdn.poehali.dev/projects/db4cf633-c7aa-41df-8f33-49f2fb63019d/files/85177395-f879-4e8d-b87f-f1ee27917c17.jpg',
      duration: '10 недель',
      level: 'Продвинутый',
      students: 6234
    },
    {
      id: 5,
      title: 'Figma для дизайнеров',
      category: 'Дизайн',
      progress: 0,
      image: 'https://cdn.poehali.dev/projects/db4cf633-c7aa-41df-8f33-49f2fb63019d/files/22a98e59-a608-4ee2-afb2-494c13736ae2.jpg',
      duration: '6 недель',
      level: 'Начинающий',
      students: 10234
    },
    {
      id: 6,
      title: 'Python для анализа данных',
      category: 'Аналитика',
      progress: 0,
      image: 'https://cdn.poehali.dev/projects/db4cf633-c7aa-41df-8f33-49f2fb63019d/files/175653c1-a6f0-40a1-a619-a77dd1402211.jpg',
      duration: '14 недель',
      level: 'Средний',
      students: 7891
    }
  ];

  const myCourses = courses.filter(course => course.progress > 0);
  const totalProgress = Math.round(myCourses.reduce((acc, course) => acc + course.progress, 0) / myCourses.length);
  const completedLessons = 47;
  const totalLessons = 89;
  const studyDays = 34;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduSpace
              </h1>
            </div>
            <nav className="flex items-center gap-2">
              <Button
                variant={activeView === 'catalog' ? 'default' : 'ghost'}
                onClick={() => setActiveView('catalog')}
                className="gap-2"
              >
                <Icon name="BookOpen" size={18} />
                Каталог
              </Button>
              <Button
                variant={activeView === 'profile' ? 'default' : 'ghost'}
                onClick={() => setActiveView('profile')}
                className="gap-2"
              >
                <Icon name="User" size={18} />
                Профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeView === 'catalog' ? (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 md:p-12">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Обучайся быстрее с ИИ-ассистентом
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Персональные траектории обучения, интерактивные уроки и поддержка 24/7
                </p>
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Sparkles" size={20} />
                  Начать обучение
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-32 w-48 h-48 bg-secondary/30 rounded-full blur-3xl"></div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Популярные курсы</h3>
                <Tabs defaultValue="all" className="w-auto">
                  <TabsList>
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="programming">Программирование</TabsTrigger>
                    <TabsTrigger value="design">Дизайн</TabsTrigger>
                    <TabsTrigger value="analytics">Аналитика</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <Card 
                    key={course.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {course.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={14} />
                          {course.students.toLocaleString()}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="outline">{course.level}</Badge>
                        {course.progress > 0 && (
                          <span className="text-primary font-medium">{course.progress}% пройдено</span>
                        )}
                      </div>
                      {course.progress > 0 && (
                        <Progress value={course.progress} className="h-2" />
                      )}
                      <Button className="w-full gap-2" variant={course.progress > 0 ? "default" : "outline"}>
                        {course.progress > 0 ? (
                          <>
                            <Icon name="Play" size={16} />
                            Продолжить
                          </>
                        ) : (
                          <>
                            <Icon name="Plus" size={16} />
                            Записаться
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white">
                АС
              </div>
              <div>
                <h2 className="text-3xl font-bold">Александр Смирнов</h2>
                <p className="text-muted-foreground">Студент с {new Date().toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Общий прогресс</CardTitle>
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">{totalProgress}%</div>
                  <Progress value={totalProgress} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">по всем курсам</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Уроки</CardTitle>
                    <Icon name="BookCheck" size={20} className="text-secondary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-secondary mb-2">{completedLessons}</div>
                  <div className="text-sm text-muted-foreground mb-2">из {totalLessons} завершено</div>
                  <Progress value={(completedLessons / totalLessons) * 100} className="h-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Дней обучения</CardTitle>
                    <Icon name="Calendar" size={20} className="text-accent" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-accent mb-2">{studyDays}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Flame" size={16} className="text-orange-500" />
                    <span>Серия: 7 дней подряд</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Мои курсы
                </CardTitle>
                <CardDescription>Активные курсы и ваш прогресс</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <img src={course.image} alt={course.title} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{course.title}</h4>
                        <Badge>{course.category}</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={course.progress} className="flex-1 h-2" />
                        <span className="text-sm font-medium text-primary min-w-[50px] text-right">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="BarChart" size={14} />
                          {course.level}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Icon name="Play" size={16} />
                      Продолжить
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" size={24} />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: 'Award', title: 'Первый курс', color: 'text-yellow-500' },
                    { icon: 'Target', title: '50 уроков', color: 'text-blue-500' },
                    { icon: 'Zap', title: '7 дней подряд', color: 'text-orange-500' },
                    { icon: 'Star', title: 'Ранняя пташка', color: 'text-purple-500' }
                  ].map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <Icon name={achievement.icon as any} size={32} className={achievement.color} />
                      <span className="text-sm font-medium text-center">{achievement.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
