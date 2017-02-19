export const levelToJapanese = (level) => {
  switch (level) {
    case 1:
      return 'やさしめ'
    case 2:
      return 'ふつう'
    case 3:
      return 'やや難'
    case 4:
      return '難'
    case 5:
      return 'とても難'
    default:
      return 'ふつう'
  }
}
