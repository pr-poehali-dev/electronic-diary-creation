
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

// Список учеников с их логинами и паролями
const studentsList = [
  { id: 1, name: "Иванов Максим", login: "ivanov.m", password: "быков2024" },
  { id: 2, name: "Петрова Анна", login: "petrova.a", password: "школа1" },
  { id: 3, name: "Сидоров Кирилл", login: "sidorov.k", password: "класс2б" },
  { id: 4, name: "Козлова Мария", login: "kozlova.m", password: "весна2024" },
  { id: 5, name: "Смирнов Дмитрий", login: "smirnov.d", password: "ученик123" },
  { id: 6, name: "Соколова Екатерина", login: "sokolova.e", password: "дневник" },
  { id: 7, name: "Волков Артём", login: "volkov.a", password: "математика5" },
  { id: 8, name: "Лебедева Софья", login: "lebedeva.s", password: "чтение5" },
  { id: 9, name: "Морозов Александр", login: "morozov.a", password: "русский5" },
  { id: 10, name: "Васильева Виктория", login: "vasileva.v", password: "природа" },
  { id: 11, name: "Родитель", login: "parent", password: "родитель123" },
  { id: 12, name: "Учитель", login: "teacher", password: "учитель123" },
];

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Имитация запроса к серверу
    setTimeout(() => {
      const user = studentsList.find(
        (student) => student.login === login && student.password === password
      );

      if (user) {
        // В реальном приложении здесь будет сохранение токена или сессии
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/");
      } else {
        setError("Неверный логин или пароль. Пожалуйста, попробуйте снова.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-montserrat font-bold text-blue-600 text-2xl mb-2">
            МБОУ СОШ №1 с. Быков
          </h1>
          <p className="text-gray-500">Электронный дневник 2Б класса</p>
        </div>
        
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Вход в систему</CardTitle>
            <CardDescription className="text-center">
              Введите свой логин и пароль для доступа к дневнику
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <Icon name="AlertCircle" className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login">Логин</Label>
                  <Input
                    id="login"
                    placeholder="Введите логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                      Вход...
                    </>
                  ) : (
                    "Войти"
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-8">
              <p className="text-sm text-center text-gray-500">
                * Для демонстрации: в таблице ниже приведены логины и пароли.
              </p>
              
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left border">Пользователь</th>
                      <th className="p-2 text-left border">Логин</th>
                      <th className="p-2 text-left border">Пароль</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Ученик</td>
                      <td className="p-2 border">ivanov.m</td>
                      <td className="p-2 border">быков2024</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Родитель</td>
                      <td className="p-2 border">parent</td>
                      <td className="p-2 border">родитель123</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Учитель</td>
                      <td className="p-2 border">teacher</td>
                      <td className="p-2 border">учитель123</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
