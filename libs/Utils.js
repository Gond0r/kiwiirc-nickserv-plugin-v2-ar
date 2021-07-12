let data = {
    LoginText: 'تسجيل الدخول',
    RegisterText : 'تسجيل الاسم:',
    RegButton: 'تسجيل',
    IDText : 'هذا الاسم مسجل ادخل كلمة السر.',
    IDButton : 'دخول',
    ConfirmReqText : 'ادخل كود التأكيد المرسل في البريد الالكتروني.',
    ConfirmButton : 'تأكيد التسجيل'
};

export function getString(key) {
    return data[key];
}
