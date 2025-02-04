const jwt = require("jsonwebtoken")
const jwtPassword = 'secret';
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!passwordResponse.success || !usernameResponse.success){
        return null;
    }

    const signature = jwt.sign({username},jwtPassword);
    return signature;
}

// console.log(signJwt("abhi@gmail.com","1234567"));
function decodeJwt(token){
    // here if any one who can decode it only not verified, either true of false
    const decoded = jwt.decode(token); // we can decode it without using the secret usign decode function
    // console.log(decoded);
    if(decoded) return true;
    return false;
}

function verifyJwt(token){
    const ans = true;
    try{
        const response = jwt.verify(token,jwtPassword); // verify either returns true or give you some error
        // console.log(response);
        // response => { username: 'abhi@gmail.com', iat: 1737730114 }
    }
    catch(e){
        console.error(e);
        ans = false;
    }
    return ans;
}

verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGlAZ21haWwuY29tIiwiaWF0IjoxNzM3NzMwMTE0fQ.iPiJ70y50C7Cyrgp_jkTqwXLT7QF7iCuIYBArDHkxI4");