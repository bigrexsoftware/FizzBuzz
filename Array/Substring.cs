public class ArrayStuff {
    public Dictionary<string,int> CountDistinct(string[] inputArray){
        var results = new Dictionary<string,int>();

        // loop through input array
        foreach(string element in inputArray){
            if(results[element] == null){
                results[element] = 1;
            } else {
                results[element]++;
            }
        }

        return results;
    }

        public Dictionary<string,int> CountCertainDistinct(string[] inputArray, string[] allowedValues){
        var results = new Dictionary<string,int>();
        var allowedValuesHash = new Dictionary<string,int>();

        for(j=0;j<allowedValues.Length;j++){
            string key = allowedValues[j];
            if(allowedValuesHash[key] == null){
                allowedValuesHash[key] = 1;
            } else {
                allowedValuesHash[key]++;
            }
        }

        // loop through input array
        foreach(string element in inputArray){
            if(allowedValuesHash[element]!=null){
                if(results[element] == null){
                    results[element] = 1;
                } else {
                    results[element]++;
                }
            }
        }

        return results;
    }
}