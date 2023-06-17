namespace DailyFoodProject.Models
{
    public class MainPageModel
    {
        public List<Category> categories { get; set; }
        public int? userId;
        public Order order { get; set; }
    }
}
