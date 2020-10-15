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

          if(!res.success) {
            alert('Kullanıcı adı yada şifre yanlış! Lütfen bilgilerinizi kontrol edin!')
          }
          
          const user = await res.json();

          console.log(user.access_token)
          console.log(user.data.tag)
          console.log(user.success)
          dispatch(userLogin(user.success, user.access_token, user.data.tag))
          
    }
  
  
  
  // return fetch('https://kampus-api.herokuapp.com/api/auth/login', {
    //   method : 'POST',
    //   body : JSON.stringify({

    //     email : username,
    //     password : password     
    //   }),
    //   headers: {
    //     'Content-type' : 'application/json; charset=UTF-8'
    //   }
    //   })
    //   .then(data => data.json())
    //   .then(user => console.log(user))
    //   .catch(err => console.log(err)) 
  }
