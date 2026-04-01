using Microsoft.AspNetCore.Mvc;

public class ExperienceViewComponent : ViewComponent
{
    public IViewComponentResult Invoke()
    {
        var data = new List<string>
        {
            "Tradebyte – 1000+ brand integrations, microservices",
            "Crescentic Digital – ASP.NET enterprise APIs",
            "AALogics – Magento backend + Docker deployments"
        };

        return View(data);
    }
}