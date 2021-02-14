using NetCasbin; 
using System;

namespace casbin_poc
{

    public class Environment {
        private string _location;
        private string[] APAC_COUNTRIES = {"India", "UAE", "Srilanka"};
        public Environment(string location)
        {
            _location = location;
        }
        public bool IsAPAC() {
            return Array.Exists(APAC_COUNTRIES, element => element == _location);
        }
    }

    public static class Advanced
    {
        public static void CheckAdvancedAccess(string sub, string obj, string act, string location)
        {            
            var e = new Enforcer("./casbin-config/advanced_model.conf", "./casbin-config/advanced_policy.csv");
            Environment env = new Environment(location);
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