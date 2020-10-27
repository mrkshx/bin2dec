function bin2dec(bin_num) {
  var result = 0;
  var bin_array = Array.from(String(bin_num), Number);
  for (var i = 0; i < bin_array.length; i++) {
    var pow = bin_array.length - i - 1;
    result += bin_array[i] * Math.pow(2, pow);
  }
  return result;
}


console.log(bin2dec(1010100000));
