/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanToInt = function(s) {
        const romanNumerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    
        let result = 0;
    
        for (let i = 0; i < s.length; i++) {
            const currentSymbol = romanNumerals[s[i]];
            const nextSymbol = romanNumerals[s[i + 1]];
    
            if (nextSymbol && currentSymbol < nextSymbol) {
                result += nextSymbol - currentSymbol;
                i++; // Skip the next symbol since it's already considered
            } else {
                result += currentSymbol;
            }
        }
    
        return result;
    };
    
    
};


module.exports={romanToInt}