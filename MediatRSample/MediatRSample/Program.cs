using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using System;
using System.Reflection;

namespace MediatRSample
{
    class Program
    {
        static void Main(string[] args)
        {
            var services = ConfigureServices();
            var serviceProvider = services.BuildServiceProvider();
            serviceProvider.GetService<App>().Run();
        }

        private static IServiceCollection ConfigureServices()
        {
            IServiceCollection services = new ServiceCollection();

            var serilogLogger = new LoggerConfiguration()
                                    .Enrich.FromLogContext()
                                    .WriteTo.File("logs/MediatRSample.txt", rollingInterval: RollingInterval.Day)
                                    .CreateLogger();

            services.AddLogging(builder =>
            {
                builder.AddSerilog(logger: serilogLogger, dispose: true);
            });
            services.AddMediatR(Assembly.GetExecutingAssembly());
            services.AddTransient<IMediatorService, MediatorService>();
            services.AddTransient<App>();
            return services;
        }
    }
}
