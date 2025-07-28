using System.ComponentModel;
using System.Data.Common;
using System.Drawing.Imaging;
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;
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
    public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequest req)
    {
        int countLit,i;
        string? output=null;
        this.test();
        System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
        var encoding=Encoding.GetEncoding("Shift_JIS"); 
        var data =await this.getBlobData();
        if (data != null)
        {
            var tmpStr = encoding.GetString(data.content);
            char[] numbers = tmpStr.ToCharArray();
            countLit = 0;
            for(i=0; i<numbers.Length; i++)
            {
                if (numbers[i] == '{')
                {
                    countLit++;
                }
                else if (numbers[i] == '}')
                {
                    countLit--;
                    if (countLit < 1)
                    {
                        output=tmpStr.Substring(1, i);
                        break;
                    }
                }
            }
        }
        
        _logger.LogInformation("C# HTTP trigger function processed a request.");
        
        Console.WriteLine(output);
        return new OkObjectResult(output);
        //return new OkObjectResult("{\"message\": \"Welcome to azureFunction!!!!!!!!!!\"}");
    }

    private void test() {
        
    }
    async private Task<FileInfo> getBlobData()
    {
        return await StorageAccountHelper.DownloadAsync("environmentIoT.json");;
    }
}