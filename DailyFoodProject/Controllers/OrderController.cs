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
            int orderId = Convert.ToInt32(DbRequests.Post("orders", $"{{\"UserId\":{model.userId},\"CourierId\":null,\"startAddress\":\"{model.startAddress}\",\"endAddress\":\"{model.endAddress}\",\"startTime\":\"{DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss.fffZ")}\",\"sum\":{model.sum.ToString().Replace(',', '.')},\"bonusesAmount\":{model.bonuses.ToString().Replace(',', '.')}}}"));
            DbRequests.PostParts(model.cart.productNames, model.cart.amount, orderId);
            return Redirect("/");
        }
        public IActionResult Page()
        {
            return View();
        }
    }
}
