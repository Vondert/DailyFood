namespace DailyFoodProject.Models
{
    public class Dish : BaseEntity
    {
        public string name { get; set; } = string.Empty;
        public double price { get; set; }
        public string image { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public int categoryId { get; set; }

    }
}
