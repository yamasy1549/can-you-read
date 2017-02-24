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

export const resultsToJapanese = (correct, quizCount) => {
  switch (Math.round(correct*10/quizCount)) {
    case 1:
      return 'がんばって'
    case 2:
    case 3:
    case 4:
      return 'う〜ん'
    case 5:
    case 6:
      return 'すごい'
    case 7:
    case 8:
    case 9:
      return 'すばらしい'
    case 10:
      return 'かんぺき'
    default:
      return 'う〜ん'
  }
}
