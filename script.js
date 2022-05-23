function getUnit(num) {
if(num <= 3){
    return "I".repeat(num)
}else if(num === 4){
    return "IV"
}else if(num <= 8){
    return "V" + "I".repeat(num - 5)
}else if(num === 9){
    return "IX"
}
};

function getTens(first) {
    if(first <= 3){
        return "X".repeat(first)
    }else if(first === 4){
        return "XL"
    }else if(first <= 8){
        return "L" + "X".repeat(first - 5)
    }else if(first === 9){
        return "XC"
    }
};

function getHundreds(first) {
    if(first <= 3){
        return "C".repeat(first)
    }else if(first === 4){
        return "CD"
    }else if(first <= 8){
        return "D" + "C".repeat(first - 5)
    }else if(first === 9){
        return "CM"
    }
};

function getThousands(first) {
    if(first <= 4){
        return "M".repeat(first)
    }else{
        throw new Error("Unsuported number")
    }
};

function convertToRoman(num) {
    const bases = [{n: 1, r: 'I'}, { n: 5, r: 'V' },
        {n: 10, r: "X"}, {n: 50, r: "L"}, {n: 100, r: "C"},
        {n: 500, r: "D"}, {n: 1000, r: "M" }
    ];
    const string = num.toString();
    const found = bases.find(base => base.n === num);
    if(found){
        return found.r
    }else if(string.length === 1){
        return getUnit(num)
    }else if(string.length === 2){
        return getTens(parseInt(string[0])) + getUnit(parseInt(string[1]))
    }else if(string.length === 3){
        return getHundreds(parseInt(string[0])) + getTens(parseInt(string[1])) + getUnit(parseInt(string[2]))
    }else if(string.length === 4){
        return getThousands(parseInt(string[0])) + getHundreds(parseInt(string[1])) + getTens(parseInt(string[2])) + getUnit(parseInt(string[3]))
    }else{
        throw new Error("Unsuported number")
    }
}

console.log(convertToRoman(59990))