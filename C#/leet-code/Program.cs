using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using leet_code.problems;

namespace leet_code
{
    class Program
    {
        static void Main(string[] args)
        {
            foreach (TestCase test in Valid_parentheses.testCases)
            {

                test.checkCase(Valid_parentheses.IsValid(test.tCase));
            }
        }
    }

    public class TestCase
    {
        public dynamic tCase;
        dynamic tResult;

        public TestCase(string tCase, bool tResult)
        {
            this.tCase = tCase;
            this.tResult = tResult;
        }

        public void checkCase(dynamic inputResult)
        {
            
            //temporary solution
            if (inputResult.GetType() == tResult.GetType())
            {
                string textCase = "";
                if(tCase.GetType().FullName == "System.String")
                {
                    textCase = tCase;
                }else if (tCase.GetType().FullName.EndsWith("[]"))
                {

                }
                else
                {
                    textCase = tCase.ToString();
                }
                if (inputResult == tResult) Console.WriteLine(
                    ((inputResult == tResult) ? "Passed!" : "Failed!") +
                    " for following data input: " + tCase +
                    " we got answer: " + inputResult);
            }

        }
    }
}