
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  // Данные об успеваемости (в реальном приложении будут приходить с сервера)
  const subjects = [
    { name: "Математика", grade: 4.6, attendance: 95, homeworkDone: 90 },
    { name: "Русский язык", grade: 4.2, attendance: 98, homeworkDone: 85 },
    { name: "Физика", grade: 4.8, attendance: 96, homeworkDone: 100 },
    { name: "История", grade: 4.0, attendance: 92, homeworkDone: 80 },
    { name: "Английский язык", grade: 4.5, attendance: 94, homeworkDone: 95 },
  ];

  const upcomingEvents = [
    { date: "14 мая", title: "Контрольная по математике", subject: "Математика" },
    { date: "16 мая", title: "Сдача проекта", subject: "История" },
    { date: "18 мая", title: "Тест по английскому", subject: "Английский язык" },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-montserrat font-bold text-gray-800 mb-6">
        Добро пожаловать, Александр!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">Средний балл</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">4.4</span>
              <span className="text-green-500 text-sm pb-1 flex items-center">
                <Icon name="TrendingUp" size={16} />
                +0.2
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">Посещаемость</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">96%</span>
              <span className="text-green-500 text-sm pb-1 flex items-center">
                <Icon name="TrendingUp" size={16} />
                +1%
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">Выполнено ДЗ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">89%</span>
              <span className="text-amber-500 text-sm pb-1 flex items-center">
                <Icon name="TrendingDown" size={16} />
                -2%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="performance">Успеваемость</TabsTrigger>
          <TabsTrigger value="upcoming">Предстоящие события</TabsTrigger>
        </TabsList>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Успеваемость по предметам</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {subjects.map((subject) => (
                  <div key={subject.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{subject.name}</span>
                      <span className="font-medium">{subject.grade}</span>
                    </div>
                    <Progress value={subject.grade * 20} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Предстоящие события</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg">
                    <div className="bg-blue-100 text-blue-700 rounded p-2 text-center min-w-14">
                      <div className="text-xs">Май</div>
                      <div className="text-lg font-bold">{event.date.split(' ')[0]}</div>
                    </div>
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.subject}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
