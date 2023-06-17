using System.Net;
namespace DailyFoodProject.db
{
    public static class DbRequests
    {
        public static string url = "http://20.4.141.232/";
        public static string Get(string str)
        {
            str = url + str;
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(str);
            request.Method = "GET";
            try
            {
                //Отправляем запрос и получаем ответ
                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                {
                    // Читаем содержимое ответа
                    using (var stream = response.GetResponseStream())
                    using (var reader = new System.IO.StreamReader(stream))
                    {
                        string responseText = reader.ReadToEnd();
                        return responseText;
                    }

                }
            }
            catch (WebException ex)
            {
                Console.WriteLine("Ошибка выполнения запроса: " + ex.Message);
            }
            return "";
        }
    }
}
