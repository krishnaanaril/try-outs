using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatRSampleAPI
{
    public interface IMediatorService
    {
        void Notify(string notifyText);
        string RequestResponse();
        void OneWay();
        void DelayedNotify(int timeInMIlliSeconds, CancellationToken cancellationToken = default);
    }
}
