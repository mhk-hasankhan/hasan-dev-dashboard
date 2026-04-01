using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using HasanPortfolio.Models;

namespace HasanPortfolio.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
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

    [HttpPost]
    public IActionResult Contact(ContactModel model)
    {
        return Ok();
    }
}
