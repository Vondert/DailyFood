namespace DailyFoodProject.Models
{
    public class Order
    {
        public int? userId { get; set; }
        public List<OrderPart> parts { get; set; }
    }
}
