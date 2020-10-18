export const USER_LOGIN = 'USER_LOGIN';
// export const USER_LOGIN = 'USER_REGISTER';

export function userLogin(token, tag) {
    return {
        type : 'USER_LOGIN',
        payload : {token, tag}
    }
};

// export function userRegister() {
//   return {
//       type : 'USER_REGISTER',
//       payload : {token, tag}
//   }
// };

// REGISTER
export function userRegister(name,surname,email,password,gender,department,role) {
  return async dispatch => {
    const res = await fetch('https://kampus-api.herokuapp.com/api/auth/register', {
        method : 'POST',
        body : JSON.stringify({  
          name,
          surname,
          email,
          password,
          gender,
          department,
          role
        }),
        headers: {
          'Content-type' : 'application/json; charset=UTF-8'
        }
        });

        const result = await res.json();
        console.log(result);
        if(!result.success) {
          alert('Bilgilerinizin doğru olduğundan emin olun!')
        }else{
          alert('Kayıt işlemi başarılı..')
          // this.props.navigation.navigate('Login')
          // dispatch(userLogin(user.access_token, user.data.tag))    
        }
    }
};

// LOGIN
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
            dispatch(userLogin(user.access_token, user.data.tag))    
          }
      }
  };


