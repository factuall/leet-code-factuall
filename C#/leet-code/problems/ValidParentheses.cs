using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;


namespace leet_code.problems
{
    /*
     * https://leetcode.com/problems/valid-parentheses/
     */
    internal class ValidParentheses
    {
        //TEST CASES
        public static TestCase[] testCases =
        {
            new TestCase("()", true),
            new TestCase("()[]{}", true),
            new TestCase("(]", false),
        };
        

        public static bool IsValid(string s)
        {
            Stack parenthasesStack = new Stack();
            foreach (char c in s.ToCharArray())
            {
                if (c == '[' || c == '(' || c == '{')
                {
                    parenthasesStack.Push(c);
                }
                if(c == ']' || c == ')' || c == '}') 
                {
                    if (parenthasesStack.Count < 0) return false;
                    switch((char)parenthasesStack.Pop())
                    {
                        case '[':
                            if (c != ']') return false;
                            break;
                        case '(':
                            if (c != ')') return false;
                            break;
                        case '{':
                            if (c != '}') return false;
                            break;
                    }
                }
            }
            if (parenthasesStack.Count > 0) return false;
            return true;
        }

    }
}
