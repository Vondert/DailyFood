using Microsoft.AspNetCore.Mvc;
using DailyFoodProject.db;
namespace DailyFoodProject.Controllers
{
    public class RegistrationController : Controller
    {
        public IActionResult Index(User user)
        {
            return View(user);
        }
        public IActionResult Registrate(User user)
        {
            if (ModelState.IsValid)
            {
                bool flag = false;
                if (Convert.ToBoolean(DbRequests.Get($"users/login/{user.login}")))
                {
                    ModelState.AddModelError("login", "Цей логін вже зайнятий");
                    flag = true;
                }
                if (Convert.ToBoolean(DbRequests.Get($"users/phoneNumber/{user.phoneNumber}/{user.id}")))
                {
                    ModelState.AddModelError("phoneNumber", "Цей номер телефону вже зайнятий");
                    flag = true;
                }
                if(!flag)
                {
                    user.id = Convert.ToInt32(DbRequests.Post("users", $"{{\"login\":\"{user.login}\",\"name\":\"{user.name}\",\"phoneNumber\":\"{user.phoneNumber}\",\"surname\":\"{user.surname}\",\"password\":\"{user.password}\",\"status\":true,\"dob\":\"{user.dob.ToString("yyyy-MM-ddTHH:mm:ss.fffZ")}\"}}"));
                    HttpContext.Session.SetInt32("UserId", user.id);
                    return Redirect("/");
                }
            }
            return View("Index", user);
        }
    }
}
