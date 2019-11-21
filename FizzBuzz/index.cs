public class FizzBuzz {
    public string Simple(int range){
        string results = string.Empty;

        for(int i=1; i<=range; i++){
            if(i%5 == 0) {
                results += "Buzz ";
            } else if (i%3 == 0){
                results += "Fizz ";
            } else {
                results += i.ToString()+" ";
            }
        }

        return results;
    }

    public string Hashed(int range, Dictionary<int, string> dictionary){
        string results = string.Empty;

        for (int i=1;i<=range;i++){
            string word = string.Empty;
            foreach(KeyValuePair<int,string> pair in dictionary){
                if(i%pair.key == 0){
                    word += pair.value;
                }
            }

            if(word == string.Empty){
                results += i.ToString();
            } else {
                results += word;
            }

            results += " ";
        }

        return results;
    }
}