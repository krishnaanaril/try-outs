using NetCasbin; 
using System;

namespace casbin_poc
{
    public static class Basic
    {
        public static void CheckBasicAccess(string sub, string obj, string act)
        {            
            var e = new Enforcer("./casbin-config/basic_model.conf", "./casbin-config/basic_policy.csv");
            if (e.Enforce(sub, obj, act)) 
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