using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MediatRSampleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlowTestController : ControllerBase
    {
        private readonly ILogger<SlowTestController> _logger;
        private readonly IMediatorService _mediatorService;

        public SlowTestController(ILogger<SlowTestController> logger, IMediatorService mediatorService)
        {
            _logger = logger;
            _mediatorService = mediatorService;
        }

        [HttpGet("/slowtest")]
        public async Task<string> Get(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Starting to do slow work");

            //// slow async action, e.g. call external api
            try
            {
                await Task.Delay(10_000, cancellationToken);
            }
            catch (OperationCanceledException ex)
            {
                _logger.LogError("Request is cancelled");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }

            var message = "Finished slow delay of 10 seconds.";

            _logger.LogInformation(message);

            return message;
        }

        [HttpGet("/dowithin5seconds")]
        public async Task<string> DoWithin5Seconds(int timeInMilliSeconds)
        {
            CancellationTokenSource source = new CancellationTokenSource();
            CancellationToken token = source.Token;
            source.CancelAfter(5000);
            _mediatorService.DelayedNotify(timeInMilliSeconds, token);
            var message = "Finished within 5 seconds.";

            _logger.LogInformation(message);

            return message;
        }

        [HttpGet("/notify")]
        public void Notify()
        {
            _mediatorService.Notify("From API");
        }

        [HttpGet("/requestresponse")]
        public string RequestResonse()
        {
            string response = _mediatorService.RequestResponse();
            return $"In Controller: {response}";
        }

        [HttpGet("/oneway")]
        public void OneWay()
        {
            _mediatorService.OneWay();
        }
    }
}
