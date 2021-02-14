using NetCasbin; 
using System;

namespace casbin_poc
{
    public static class WithEnv
    {
        public static void CheckEnvironmentAccess(string sub, string obj, string act, string env)
        {            
            var e = new Enforcer("./casbin-config/env_model.conf", "./casbin-config/env_policy.csv");
            if (e.Enforce(sub, obj, act, env)) 
            {
                // permit alice to read data1
                Console.WriteLine("Access Granted");
            }
            else
            {
                // deny the request, show an error
                Console.WriteLine("Access Denied");
            }    
        }
    }
}