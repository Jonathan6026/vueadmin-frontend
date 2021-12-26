/*
 *validatePassword函数return函数
 */

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(
        new Error('Your password is not strong enough / 密码不得少于六位')
      )
    } else {
      callback()
    }
  }
}
