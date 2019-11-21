public class Palindrome{
    public bool IsSimple(string phrase){
        bool isPalindrome = false;

        // setup a regex to match punctation and whitespace
        // string pattern = @"/[^A-Za-z0-9]/g";
        // string replacedString = Regex.Replace(phrase, replacedString, pattern);

        // convert phrase to lowercase and remove characters found in regex

        // loop through string up to the middle and compare with characters at the end
        for(int i=0; i<phrase.Length/2;i++){
            // if there is a mismatch, return false
            if(phrase[i] != phrase[phrase.Length-1-i]){
                return false;
            }
        }
        // return true if it makes it through  

        return true;
    }

    public bool IsStack(string phrase){
        bool isPalindrome = false;

        // setup a regex to match punctation and whitespace
        // pattern = /[^A-Za-z0-9]/g

        // convert phrase to lowercase and remove characters found in regex

        var stack = new Stack<string>();
        // loop through all characters and push onto a stack
        for(int i = 0; i<phrase.Length;i++){
           stack.push(phrase[i]);
        }

        var reversedString = string.Empty;
        // pop off the stack into a new string
        while(stack.Length>0){
            reversedString += stack.pop();
        }
        // compare the strings
        if(phrase == reversedString){
            return true;
        } else {
            return false;
        }
    }
}