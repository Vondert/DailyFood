namespace DailyFoodProject.Models
{
    public class Category : BaseEntity
    {
        public string name { get; set; } = string.Empty;
        public double bonusCoefficient { get; set; }
        public List<Dish> dishList = new List<Dish>();
    }
}
