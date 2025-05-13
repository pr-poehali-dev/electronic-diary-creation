import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type Grade = {
  date: string;
  value: number;
  topic: string;
  type: string;
};

type SubjectGrades = {
  id: number;
  name: string;
  teacher: string;
  averageGrade: number;
  grades: Grade[];
};

const Grades = () => {
  const [period, setPeriod] = useState("quarter4");

  // Данные об оценках для 2Б класса (в реальном приложении будут приходить с сервера)
  const subjectsData: SubjectGrades[] = [
    {
      id: 1,
      name: "Математика",
      teacher: "Петрова М.И.",
      averageGrade: 4.8,
      grades: [
        {
          date: "12.05",
          value: 5,
          topic: "Сложение и вычитание",
          type: "Контрольная работа",
        },
        {
          date: "05.05",
          value: 5,
          topic: "Решение задач",
          type: "Самостоятельная работа",
        },
        {
          date: "28.04",
          value: 4,
          topic: "Геометрические фигуры",
          type: "Тест",
        },
        {
          date: "21.04",
          value: 5,
          topic: "Таблица умножения",
          type: "Устный ответ",
        },
      ],
    },
    {
      id: 2,
      name: "Русский язык",
      teacher: "Петрова М.И.",
      averageGrade: 4.5,
      grades: [
        {
          date: "11.05",
          value: 4,
          topic: "Правописание безударных гласных",
          type: "Диктант",
        },
        { date: "04.05", value: 5, topic: "Части речи", type: "Тест" },
        {
          date: "27.04",
          value: 4,
          topic: "Имена существительные",
          type: "Самостоятельная работа",
        },
        {
          date: "20.04",
          value: 5,
          topic: "Предложение",
          type: "Домашнее задание",
        },
      ],
    },
    {
      id: 3,
      name: "Чтение",
      teacher: "Петрова М.И.",
      averageGrade: 5.0,
      grades: [
        {
          date: "10.05",
          value: 5,
          topic: "Стихотворения о весне",
          type: "Чтение наизусть",
        },
        {
          date: "03.05",
          value: 5,
          topic: "Сказки народов мира",
          type: "Пересказ",
        },
        {
          date: "26.04",
          value: 5,
          topic: "Рассказы о животных",
          type: "Выразительное чтение",
        },
        {
          date: "19.04",
          value: 5,
          topic: "Детские писатели",
          type: "Техника чтения",
        },
      ],
    },
    {
      id: 4,
      name: "Окружающий мир",
      teacher: "Петрова М.И.",
      averageGrade: 4.7,
      grades: [
        {
          date: "09.05",
          value: 5,
          topic: "Весенние изменения в природе",
          type: "Тест",
        },
        { date: "02.05", value: 4, topic: "Животные весной", type: "Доклад" },
        {
          date: "25.04",
          value: 5,
          topic: "Растения весной",
          type: "Устный ответ",
        },
        { date: "18.04", value: 5, topic: "Птицы весной", type: "Проект" },
      ],
    },
    {
      id: 5,
      name: "Английский язык",
      teacher: "Смирнова О.А.",
      averageGrade: 4.3,
      grades: [
        { date: "08.05", value: 4, topic: "Знакомство", type: "Диалог" },
        { date: "01.05", value: 5, topic: "Цвета", type: "Тест" },
        {
          date: "24.04",
          value: 4,
          topic: "Числа от 1 до 10",
          type: "Устный ответ",
        },
        {
          date: "17.04",
          value: 4,
          topic: "Игрушки",
          type: "Словарный диктант",
        },
      ],
    },
  ];

  const getGradeColorClass = (grade: number) => {
    switch (grade) {
      case 5:
        return "bg-green-100 text-green-800";
      case 4:
        return "bg-blue-100 text-blue-800";
      case 3:
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };

  const calculateAverageGrade = () => {
    const sum = subjectsData.reduce(
      (acc, subject) => acc + subject.averageGrade,
      0,
    );
    return (sum / subjectsData.length).toFixed(1);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-montserrat font-bold text-gray-800">
          Оценки 2Б класса
        </h1>

        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Выберите период" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="quarter1">I четверть</SelectItem>
            <SelectItem value="quarter2">II четверть</SelectItem>
            <SelectItem value="quarter3">III четверть</SelectItem>
            <SelectItem value="quarter4">IV четверть</SelectItem>
            <SelectItem value="year">Год</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">
              Средний балл за IV четверть
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">
                {calculateAverageGrade()}
              </span>
              <span className="text-green-500 text-sm pb-1 flex items-center">
                <Icon name="TrendingUp" size={16} />
                +0.2
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">
              Всего предметов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{subjectsData.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-normal text-gray-500">
              Всего оценок
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {subjectsData.reduce(
                (sum, subject) => sum + subject.grades.length,
                0,
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="bySubject">
        <TabsList className="mb-6">
          <TabsTrigger value="bySubject">По предметам</TabsTrigger>
          <TabsTrigger value="detailed">Подробная информация</TabsTrigger>
        </TabsList>

        <TabsContent value="bySubject">
          <div className="space-y-6">
            {subjectsData.map((subject) => (
              <Card key={subject.id}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex justify-between items-center">
                    <span>{subject.name}</span>
                    <Badge
                      className={cn(
                        "font-bold text-lg px-3",
                        getGradeColorClass(Math.floor(subject.averageGrade)),
                      )}
                    >
                      {subject.averageGrade}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">
                    Преподаватель: {subject.teacher}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {subject.grades.map((grade, index) => (
                      <div
                        key={index}
                        className="group relative cursor-pointer"
                      >
                        <div
                          className={cn(
                            "w-10 h-10 flex items-center justify-center rounded-md border font-medium",
                            getGradeColorClass(grade.value),
                          )}
                        >
                          {grade.value}
                        </div>
                        <div className="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 w-64 hidden group-hover:block z-10">
                          <div className="bg-black text-white text-xs rounded p-2 shadow-lg">
                            <div className="font-bold mb-1">{grade.topic}</div>
                            <div className="flex justify-between">
                              <span>{grade.type}</span>
                              <span>{grade.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="detailed">
          <Card>
            <CardHeader>
              <CardTitle>Подробная информация об оценках</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left">Предмет</th>
                      <th className="py-3 px-4 text-left">Дата</th>
                      <th className="py-3 px-4 text-left">Тема</th>
                      <th className="py-3 px-4 text-left">Тип работы</th>
                      <th className="py-3 px-4 text-right">Оценка</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectsData.flatMap((subject) =>
                      subject.grades.map((grade, gradeIndex) => (
                        <tr
                          key={`${subject.id}-${gradeIndex}`}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">{subject.name}</td>
                          <td className="py-3 px-4">{grade.date}</td>
                          <td className="py-3 px-4">{grade.topic}</td>
                          <td className="py-3 px-4">{grade.type}</td>
                          <td className="py-3 px-4 text-right">
                            <span
                              className={cn(
                                "px-2 py-1 rounded text-xs",
                                getGradeColorClass(grade.value),
                              )}
                            >
                              {grade.value}
                            </span>
                          </td>
                        </tr>
                      )),
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Grades;
