using Microsoft.AspNetCore.Mvc;

namespace DailyFoodProject.Models
{
    public class Cart
    {
        public List<string> productNames { get; set; }
        public double sum { get; set; }
        public double bonuses = 0;
        public List<int> amount { get; set; }
        public string startAddress = string.Empty;
        public string endAddress = string.Empty;
        public bool type = true;
    }
}
