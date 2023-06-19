using Microsoft.AspNetCore.Mvc;

namespace DailyFoodProject.Models
{
    public class Cart
    {

        public List<string> productNames { get; set; }
        public List<int> amount { get; set; }

    }
}
