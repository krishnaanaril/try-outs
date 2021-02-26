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
    public class Notifier01 : INotificationHandler<NotificationMessage>
    {
        private readonly ILogger<Notifier01> _logger;
        public Notifier01(ILogger<Notifier01> logger)
        {
            _logger = logger;
        }
        public Task Handle(NotificationMessage notification, CancellationToken cancellationToken)
        {
            _logger.LogInformation($"Notifier 01 -> Message: {notification.Message}");
            return Task.CompletedTask;
        }
    }
}
