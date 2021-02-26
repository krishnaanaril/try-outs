using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MediatRSample
{
    public interface IMediatorService
    {
        void Notify(string notifyText);
        string RequestResponse();
        void OneWay();
    }
}
