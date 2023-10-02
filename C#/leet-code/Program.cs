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
            /*foreach (TestCase test in ValidParentheses.testCases)
            {

                test.checkCase(ValidParentheses.IsValid(test.tCase));
            }*/

            foreach (TestCase test in BasicCalculatorII.testCases)
            {

                test.checkCase(BasicCalculatorII.Calculate(test.tCase));
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

        public TestCase(string tCase, int tResult)
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
                Console.WriteLine(
                    ((inputResult == tResult) ? "Passed!" : "Failed!") +
                    " for following data input: " + textCase +
                    " we got answer: " + inputResult);
            }

        }
    }
}