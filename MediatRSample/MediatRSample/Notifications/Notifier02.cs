using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatRSample
{
    public class Notifier02 : INotificationHandler<NotificationMessage>
    {
        public Task Handle(NotificationMessage notification, CancellationToken cancellationToken)
        {
            Console.WriteLine($"Notifier 02 -> Message: {notification.Message}");
            return Task.CompletedTask;
        }
    }
}
