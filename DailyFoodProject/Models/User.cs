using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;
using System.Text;
public class User : Person{


    public string login { get; set; }

    public string password { get; set; }
    public string phoneNumber { get; set; }

    public int bonuses { get; set; } = 0;


    public bool status { get; set; } = true;



    public bool IsValid(string str)
    {
        str += login;
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
                    return Convert.ToBoolean(responseText);
                }
                
            }
        }
        catch (WebException ex)
        {
            Console.WriteLine("Ошибка выполнения запроса: " + ex.Message);
            return true;
        }
    }
}