using Microsoft.AspNetCore.Mvc;
using DailyFoodProject.db;


namespace DailyFoodProject.Controllers
{
    public class AuthorizationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Login(User data)
        {
                User user = JsonParser.ParseUser(data.login, data.password);
                if (user == null)
                {
                    ModelState.AddModelError("login", "Неправильний логін або пароль");
                }
                else if (user.status == false)
                {
                    ModelState.AddModelError("login", "Цей користувач заблокований");
                }
                else
                {
                    HttpContext.Session.SetInt32("UserId", user.id);
                    return Redirect("/Home");
                }
            return View("Index");
        }
    }
}
