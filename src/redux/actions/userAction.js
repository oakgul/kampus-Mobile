export const USER_LOGIN = 'USER_LOGIN'

export function userLogin(success, token, tag) {
    return {
        type : 'USER_LOGIN',
        payload : {
          success,
          token,
          tag
        }
    }
}


export function userSign(username, password) {
    return async dispatch => {
      const res = await fetch('https://kampus-api.herokuapp.com/api/auth/login', {
          method : 'POST',
          body : JSON.stringify({
    
            email : username,
            password : password     
          }),
          headers: {
            'Content-type' : 'application/json; charset=UTF-8'
          }
          });

          const user = await res.json();
          if(!user.success) {
            alert('Kullanıcı adı yada parola yanlış!')
          }else{
            dispatch(userLogin(user.success, user.access_token, user.data.tag))    
          }
      }
  }
