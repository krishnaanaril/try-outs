using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MediatRSampleAPI
{
    public class Notifier03 : INotificationHandler<DelayNotificationMessage>
    {
        private readonly ILogger<Notifier03> _logger;
        public Notifier03(ILogger<Notifier03> logger)
        {
            _logger = logger;
        }
        public async Task Handle(DelayNotificationMessage notification, CancellationToken cancellationToken)
        {
            _logger.LogInformation($"Notifier 03 -> Time In MIlli Seconds: {notification.TimeInMilliSeconds}");
            Stopwatch stopwatch = Stopwatch.StartNew();
            try
            {
                await Task.Delay(notification.TimeInMilliSeconds, cancellationToken);
            }
            catch(OperationCanceledException ex)
            {
                _logger.LogError("5 seconds passed and the task is cancelled");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);                
            }
            stopwatch.Stop();
            _logger.LogInformation($"Elapsed Time: {stopwatch.ElapsedMilliseconds}");            
        }
    }
}
