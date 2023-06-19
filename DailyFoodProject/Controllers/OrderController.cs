using Microsoft.AspNetCore.Mvc;
using DailyFoodProject.Models;
using DailyFoodProject.db;

namespace DailyFoodProject.Controllers
{
    public class OrderController : Controller
    {
        [HttpPost]
        public IActionResult Index([FromBody] Order model)
        {
            model.userId = HttpContext.Session.GetInt32("UserId");
            int orderId = Convert.ToInt32(DbRequests.Post("orders", $"{{\"UserId\":\"{model.userId}\",\"CourierId\":\"{null}\",\"startAddress\":\"\",\"endAddress\":\"{model.endAddress}\",\"startTime\":\"{DateTime.Now}\",\"endTime\":\"\",\"sum\":{model.sum},\"bonuses\":{model.bonuses}}}"));
            DbRequests.PostParts(model.cart.productNames, model.cart.amount, orderId);
            return Redirect("/");
        }
    }
}
