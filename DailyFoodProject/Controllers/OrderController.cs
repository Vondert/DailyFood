using Microsoft.AspNetCore.Mvc;
using DailyFoodProject.Models;
namespace DailyFoodProject.Controllers
{
    public class OrderController : Controller
    {
        [HttpPost]
        public IActionResult Index([FromBody] Cart model)
        {
            return View();
        }
    }
}
