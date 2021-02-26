﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatRSampleAPI
{
    public class MediatorService : IMediatorService
    {
        private readonly IMediator _mediator;
        public MediatorService(IMediator mediator)
        {
            _mediator = mediator;
        }
        public void Notify(string notifyText)
        {
            _mediator.Publish(new NotificationMessage { Message = notifyText });
        }

        public string RequestResponse()
        {
            string response = Task.Run(
                async () => await _mediator.Send(new Ping())
                ).Result;
            return response;
        }

        public void OneWay()
        {
            Task.Run(async () => await _mediator.Send(new OneWayAsync()));
            _mediator.Send(new OneWaySync());
        }     
        
        public void DelayedNotify(int timeInMIlliSeconds, CancellationToken cancellationToken = default)
        {
            _mediator.Publish(new DelayNotificationMessage { TimeInMilliSeconds = timeInMIlliSeconds }, cancellationToken);
        }
    }
}
