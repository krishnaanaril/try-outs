using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatRSample
{
    public class OneWaySync : IRequest { }
    public class OneWayAsync : IRequest { }
    public class OneWayAsyncHandler : AsyncRequestHandler<OneWayAsync>
    {
        protected override Task Handle(OneWayAsync request, CancellationToken cancellationToken)
        {
            Console.WriteLine("In Async One Way Handler");
            return Task.CompletedTask;
        }
    }

    public class OneWaySyncHandler : RequestHandler<OneWaySync>
    {
        protected override void Handle(OneWaySync request)
        {
            Console.WriteLine("In Sync One Way Handler");            
        }
    }
}
