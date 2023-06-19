namespace DailyFoodProject.Models
{
    public class Order
    {
        public int? userId { get; set; }
        public double sum { get; set; }
        public double bonuses = 0;
        public string startAddress = string.Empty;
        public string endAddress = string.Empty;
        public Cart cart { get; set; }
    }
}
