using Microsoft.AspNetCore.Mvc;
namespace DailyFoodProject.Controllers
{
    public class RegistrationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
