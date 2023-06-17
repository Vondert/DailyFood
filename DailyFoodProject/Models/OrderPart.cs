namespace DailyFoodProject.Models
{
    public class OrderPart : BaseEntity
    {
        public int? orderId { get; set; }
        public int dishId { get; set; }
        public int amount { get; set; }
    }
}
