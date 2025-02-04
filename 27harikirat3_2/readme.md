fetch, autentication and database are done.

in this video, we will learn authentication, JWTs and try/catch
example of bank account

1- kirat goes open a bank account
2- kirat deposits some money in
3- kirat gets back a cheque from the bank

checkbook
1- whenever i have to pay some one, i have to sign the cheque
2- everyone can see my sign
3- people can try to do the same sign on their cheque book
4- bank won't accept theirs, will only accept my cheque
5- my cheque book == my json web token

some checks while withdraw
1- something bank gives me the first time i visit it (sign in)
2- something I need to keep safe, if i loose a cheque, someone can debit my account
3- even though other people can see my signature / how the cheque looks, if they try do replicate it, bank will catch them and not let you debit their funds.

JSON web tokens are just like these cheques
They are issued by backend when you sign in
Anyone can create something very similar, but the backend would reject it
If you loose the original jwt, then it is a problem

JWT
1- generate
- bank -> you go to bank open account, in return they give you cheque book by creating it from some machine which can verify back this cheque.
- backend server -> you go website for the first, signin , in return they give you jwt token (a long string) when you return back with this token, backend will verify the token.

2- decode
- some one can look at you cheque and copy the same checque .
- creating a copy of the same jwt token.
- you can decode the jwt token from jwt.io website

3- verify
- bank have machine which generates it, it will verify if copies then reject
- backend server will verify the token by which it generates it, if decoded or copied, it will reject them to access the data, if authenticated will give them access.
- verification need jwt_password a secret that bank saves, which is very important.

you can generate the copy of any data bank account details, but to generate you need secret key which is being safe in bank's machine.
thus you will be rejected in verification.

try & catch
- throwing and catching error in JS
- when an exception is raised, the process exits since the JS program doesnot wants to proceed anymore.
- 