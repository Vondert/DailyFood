using System.Net;
using System.Text;

namespace DailyFoodProject.db
{
    public static class DbRequests
    {
        public static string url = "http://20.4.124.65/";
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
        public static string Post(string str, string jsonData)
        {
            string connection = url + str;
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(connection);
            request.Method = "POST";
            request.ContentType = "application/json";

            // Преобразуем данные JSON в байты
            byte[] postData = Encoding.UTF8.GetBytes(jsonData);

            try
            {
                // Устанавливаем размер и отправляем данные в тело запроса
                request.ContentLength = postData.Length;
                using (var stream = request.GetRequestStream())
                {
                    stream.Write(postData, 0, postData.Length);
                }
                using (var response = (HttpWebResponse)request.GetResponse())
                using (var streamReader = new StreamReader(response.GetResponseStream()))
                {
                    string responseText = streamReader.ReadToEnd();
                    return responseText;
                }
            }
            catch (WebException ex)
            {
                Console.WriteLine("Ошибка выполнения запроса: " + ex.Message);
            }
            return "";
        }
        public static async void PostParts(List<string> products, List<int> amount, int orderId)
        {
            string str = url + $"orderParts/all/{orderId}";

            // Создаем объект с данными, которые будем отправлять
            var data = new
            {
                products,
                amount
            };

            using (var httpClient = new HttpClient())
            {
                var json = Newtonsoft.Json.JsonConvert.SerializeObject(data);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await httpClient.PostAsync(url, content);

                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("Запрос успешно выполнен");
                }
                else
                {
                    Console.WriteLine("Произошла ошибка при выполнении запроса");
                }
            }
        }
    }
}
