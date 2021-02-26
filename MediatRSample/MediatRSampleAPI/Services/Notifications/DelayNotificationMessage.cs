using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MediatRSampleAPI
{
    public class DelayNotificationMessage: INotification
    {
        public int TimeInMilliSeconds { get; set; }
    }
}
