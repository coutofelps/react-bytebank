export class AuthSystem {
    static login(canAuth, password) {
        if(AuthSystem.gotAuthMethod(canAuth)) {
            return canAuth.auth(password);
        }

        return false;
    }

    static gotAuthMethod(canAuth) {
        return 'auth' in canAuth && canAuth.auth instanceof Function; // Verifica se o método 'auth' está dentro de 'canAuth' e se o mesmo é uma função
    }
}