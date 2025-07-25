using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Company.Function;

public class HttpTriggerEnvironment
{
    private readonly ILogger<HttpTriggerEnvironment> _logger;

    public HttpTriggerEnvironment(ILogger<HttpTriggerEnvironment> logger)
    {
        _logger = logger;
    }

    [Function("HttpTriggerEnvironment")]
    public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequest req)
    {
        _logger.LogInformation("C# HTTP trigger function processed a request.");
        return new OkObjectResult("{\"message\": \"Welcome to azureFunction!!!!!!!!!!\"}");
    }
}