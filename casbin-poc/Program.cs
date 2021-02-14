using NetCasbin; 
using System;

namespace casbin_poc
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Output for Basic cases:");
            Basic.CheckBasicAccess("alice@example.com", "BasicTest", "Get");
            Basic.CheckBasicAccess("alice@example.com", "BasicTest", "Post");
            Console.WriteLine("Output for Basic cases with environment:");
            WithEnv.CheckEnvironmentAccess("alice@example.com", "BasicTest", "Get", "Prod");
            WithEnv.CheckEnvironmentAccess("alice@example.com", "BasicTest", "Get", "dev");
            WithEnv.CheckEnvironmentAccess("alice@example.com", "BasicTest", "Post", "Prod");
            WithEnv.CheckEnvironmentAccess("alice@example.com", "BasicTest", "Post", "qa");
            Console.WriteLine("Output for Advanced cases:");
            Advanced.CheckAdvancedAccess("alice@example.com", "BasicTest", "Get", "India");
            Advanced.CheckAdvancedAccess("alice@example.com", "BasicTest", "Get", "Germany");
            Advanced.CheckAdvancedAccess("alice@example.com", "BasicTest", "Post", "India");
            Advanced.CheckAdvancedAccess("alice@example.com", "BasicTest", "Post", "Srilanka");
        }
    }
}
