def fact num, acc = 1
  num == 1 ? 1 : num * fact(num - 1, num * acc)
end
