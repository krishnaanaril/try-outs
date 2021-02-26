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
    public class Notifier02 : INotificationHandler<NotificationMessage>
    {
        private readonly ILogger<Notifier02> _logger;
        public Notifier02(ILogger<Notifier02> logger)
        {
            _logger = logger;
        }
        public Task Handle(NotificationMessage notification, CancellationToken cancellationToken)
        {
            _logger.LogInformation($"Notifier 02 -> Message: {notification.Message}");
            return Task.CompletedTask;
        }
    }
}
