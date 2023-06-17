using DailyFoodProject.Models;
using Newtonsoft.Json;
namespace DailyFoodProject.db
{
    public static class JsonParser
    {
        public static List<Dish> ParseDishes()
        {
            string dishesStr = DbRequests.Get("dishes");
            List<Dish> dishesList = new List<Dish>();
            dishesList = JsonConvert.DeserializeObject<List<Dish>>(dishesStr);
            return dishesList;
        }
        public static List<Category> ParseCategories()
        {
            string categoryStr = DbRequests.Get("categories");
            List<Category> categoryList = new List<Category>();
            categoryList = JsonConvert.DeserializeObject<List<Category>>(categoryStr);
            return categoryList;
        }
        public static User ParseUser(string login, string password)
        {
            string userStr = DbRequests.Get($"users/logining/{login}/{password}");
            User user = JsonConvert.DeserializeObject<User>(userStr);
            return user;
        }
    }
}
