namespace DailyFoodProject.Models
{
    public class Order
    {
        public int? userId { get; set; }
        public double sum { get; set; }
        public double bonuses { get; set; }
        public string startAddress { get; set; }
        public string endAddress { get; set; }
        public Cart cart { get; set; }
    }
}
