module.exports = {
    urlReg : /^(http|https):\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)*$/,
    charCntReg : /(\w)\1\1\1/, 
    userIdReg : /^[A-Za-z0-9_.]{5,20}$/,
    userNicknameReg : /^[A-za-z0-9가-힣]{3,20}$/,
    userPwdReg : /^(?=.*\d{1,30})(?=.*[~`!@#$%\^&*()-+_=]{1,30})(?=.*[a-zA-Z]{2,30}).{8,30}$/,
    userNameReg : /^[A-Za-z가-힣]{2,20}$/,
    userEmailReg : /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
    userPhoneReg : /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})?[0-9]{3,4}?[0-9]{4}$/,
    appNameReg : /^[a-z가-힣1-9]{2,30}$/,
    roleNameReg : /^[A-Za-z0-9_]{5,20}$/
}