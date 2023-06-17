using DailyFoodProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using DailyFoodProject.db;

namespace DailyFoodProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            List<Category> categories = JsonParser.ParseCategories();
            List<Dish> dishes = JsonParser.ParseDishes();
            foreach (var category in categories)
            {
                foreach (var dish in dishes)
                {
                    if (dish.categoryId == category.id)
                    {
                        category.dishList.Add(dish);
                    }
                }
            }

            int? userId = HttpContext.Session.GetInt32("UserId");
            var mainPageModel = new MainPageModel
            {
                categories = categories,
                userId = userId,
                order = new Order(),
            };
            mainPageModel.order.userId = mainPageModel.userId;
            return View(mainPageModel);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}