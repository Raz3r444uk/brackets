module.exports = function check(str, bracketsConfig) {
  // Сооздаем массив скобок
  const bracketsArr = bracketsConfig.map((e) => {
    return `${e[0]}${e[1]}`;
  });

  // Записываем изначально значение длины строки для последующего сравнения
  let strLength = str.length;

  while (str.length) {
    // Удаляем все скобки из str, перезапиcывая её значение
    bracketsArr.forEach((e) => {
      str = str.replaceAll(e, "");
    });

    if (str.length === strLength) {
      return false;
    } else {
      strLength = str.length;
    }
  }

  return true;
};
