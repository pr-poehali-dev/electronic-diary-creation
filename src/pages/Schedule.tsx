
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type Lesson = {
  id: number;
  subject: string;
  time: string;
  teacher: string;
  room: string;
  homework?: string;
};

type DaySchedule = {
  date: string;
  dayOfWeek: string;
  lessons: Lesson[];
};

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<"week" | "day">("week");

  // Расписание на неделю (в реальном приложении данные будут приходить с сервера)
  const weekSchedule: DaySchedule[] = [
    {
      date: "13 мая",
      dayOfWeek: "Понедельник",
      lessons: [
        { id: 1, subject: "Математика", time: "8:30 - 9:15", teacher: "Иванова А.П.", room: "305", homework: "Стр. 45, упр. 1-3" },
        { id: 2, subject: "Русский язык", time: "9:25 - 10:10", teacher: "Петрова Е.И.", room: "204", homework: "Написать сочинение" },
        { id: 3, subject: "Физика", time: "10:20 - 11:05", teacher: "Сидоров В.Г.", room: "403", homework: "Стр. 78, задачи 5-7" },
        { id: 4, subject: "История", time: "11:15 - 12:00", teacher: "Кузнецова Т.Н.", room: "201" },
      ]
    },
    {
      date: "14 мая",
      dayOfWeek: "Вторник",
      lessons: [
        { id: 5, subject: "Английский язык", time: "8:30 - 9:15", teacher: "Смирнова О.А.", room: "308", homework: "Учить слова" },
        { id: 6, subject: "Математика", time: "9:25 - 10:10", teacher: "Иванова А.П.", room: "305" },
        { id: 7, subject: "Литература", time: "10:20 - 11:05", teacher: "Петрова Е.И.", room: "204", homework: "Прочитать гл. 5-6" },
        { id: 8, subject: "Биология", time: "11:15 - 12:00", teacher: "Николаева И.С.", room: "405", homework: "Подготовить доклад" }
      ]
    },
    {
      date: "15 мая",
      dayOfWeek: "Среда",
      lessons: [
        { id: 9, subject: "Физика", time: "8:30 - 9:15", teacher: "Сидоров В.Г.", room: "403" },
        { id: 10, subject: "Химия", time: "9:25 - 10:10", teacher: "Морозова Е.А.", room: "402", homework: "Задачи 12-14" },
        { id: 11, subject: "Информатика", time: "10:20 - 11:05", teacher: "Королев Д.М.", room: "310", homework: "Сделать презентацию" },
        { id: 12, subject: "Русский язык", time: "11:15 - 12:00", teacher: "Петрова Е.И.", room: "204" }
      ]
    },
    {
      date: "16 мая",
      dayOfWeek: "Четверг",
      lessons: [
        { id: 13, subject: "Математика", time: "8:30 - 9:15", teacher: "Иванова А.П.", room: "305", homework: "Стр. 47, упр. 5-8" },
        { id: 14, subject: "Английский язык", time: "9:25 - 10:10", teacher: "Смирнова О.А.", room: "308" },
        { id: 15, subject: "История", time: "10:20 - 11:05", teacher: "Кузнецова Т.Н.", room: "201", homework: "Учить даты" },
        { id: 16, subject: "Физкультура", time: "11:15 - 12:00", teacher: "Соколов А.В.", room: "Спортзал" }
      ]
    },
    {
      date: "17 мая",
      dayOfWeek: "Пятница",
      lessons: [
        { id: 17, subject: "Литература", time: "8:30 - 9:15", teacher: "Петрова Е.И.", room: "204" },
        { id: 18, subject: "Обществознание", time: "9:25 - 10:10", teacher: "Кузнецова Т.Н.", room: "201", homework: "Подготовить доклад" },
        { id: 19, subject: "Биология", time: "10:20 - 11:05", teacher: "Николаева И.С.", room: "405" },
        { id: 20, subject: "Физкультура", time: "11:15 - 12:00", teacher: "Соколов А.В.", room: "Спортзал" }
      ]
    }
  ];

  // Получаем расписание для текущего дня
  const getCurrentDaySchedule = () => {
    const today = new Date().getDate();
    const selectedDate = date?.getDate() || today;
    
    // Для демонстрации: если выбранная дата совпадает с днем недели из данных, покажем этот день
    const dayIndex = (selectedDate - 13) % 5; // 13 мая - понедельник в наших данных
    return dayIndex >= 0 && dayIndex < 5 ? [weekSchedule[dayIndex]] : [];
  };

  const displaySchedule = view === "week" ? weekSchedule : getCurrentDaySchedule();

  const getLessonColorClass = (subject: string) => {
    const colors: Record<string, string> = {
      "Математика": "bg-blue-50 border-blue-200",
      "Русский язык": "bg-red-50 border-red-200",
      "Физика": "bg-purple-50 border-purple-200",
      "История": "bg-amber-50 border-amber-200",
      "Английский язык": "bg-green-50 border-green-200",
      "Литература": "bg-pink-50 border-pink-200",
      "Биология": "bg-emerald-50 border-emerald-200",
      "Химия": "bg-orange-50 border-orange-200",
      "Информатика": "bg-indigo-50 border-indigo-200",
      "Физкультура": "bg-sky-50 border-sky-200",
      "Обществознание": "bg-yellow-50 border-yellow-200"
    };
    
    return colors[subject] || "bg-gray-50 border-gray-200";
  };

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-montserrat font-bold text-gray-800">Расписание занятий</h1>
        
        <div className="flex items-center gap-3">
          <Select value={view} onValueChange={(value) => setView(value as "week" | "day")}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Выберите вид" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">На неделю</SelectItem>
              <SelectItem value="day">На день</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <Icon name="Printer" size={18} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Календарь</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-2">
          <div className="space-y-6">
            {displaySchedule.map((day, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex justify-between items-center">
                    <span>{day.dayOfWeek}, {day.date}</span>
                    <span className="text-sm text-gray-500 font-normal">{day.lessons.length} уроков</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.lessons.map((lesson) => (
                      <div 
                        key={lesson.id} 
                        className={cn(
                          "p-3 rounded-lg border flex flex-col md:flex-row gap-3 items-start",
                          getLessonColorClass(lesson.subject)
                        )}
                      >
                        <div className="md:w-24 text-center md:text-left font-medium">
                          {lesson.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{lesson.subject}</h3>
                          <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <Icon name="User" size={14} />
                            <span>{lesson.teacher}</span>
                          </div>
                          <div className="text-sm text-gray-600 flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            <span>Кабинет {lesson.room}</span>
                          </div>
                          {lesson.homework && (
                            <div className="mt-2 text-sm bg-white bg-opacity-60 p-2 rounded">
                              <span className="font-medium">Домашнее задание: </span>
                              {lesson.homework}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
