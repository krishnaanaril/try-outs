using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatRSampleAPI
{
    public class OneWaySync : IRequest { }
    public class OneWayAsync : IRequest { }
    public class OneWayAsyncHandler : AsyncRequestHandler<OneWayAsync>
    {
        private readonly ILogger<OneWayAsyncHandler> _logger;
        public OneWayAsyncHandler(ILogger<OneWayAsyncHandler> logger)
        {
            _logger = logger;
        }
        protected override Task Handle(OneWayAsync request, CancellationToken cancellationToken)
        {
            _logger.LogInformation("In Async One Way Handler");
            return Task.CompletedTask;
        }
    }

    public class OneWaySyncHandler : RequestHandler<OneWaySync>
    {
        private readonly ILogger<OneWaySyncHandler> _logger;
        public OneWaySyncHandler(ILogger<OneWaySyncHandler> logger)
        {
            _logger = logger;
        }
        protected override void Handle(OneWaySync request)
        {
            _logger.LogInformation("In Sync One Way Handler");            
        }
    }
}
