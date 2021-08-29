// eslint-disable-next-line import/prefer-default-export
export const removePx = (originValue) => {
  const pxPattern = /px$/i;
  if (typeof originValue === 'number') {
    return originValue;
  }

  if (!pxPattern.test(originValue)) {
    return originValue;
  }

  const charArray = originValue.split('');
  // 兩次 pop() 把 px 去掉
  charArray.pop();
  charArray.pop();
  // console.log(charArray);
  const revisedValue = Number(charArray.join(''));
  // console.log('revisedValue: ', revisedValue);

  return revisedValue;
};
