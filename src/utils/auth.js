import { hash, compare } from "bcryptjs";

async function hashPassword(password){
    const hashedPassword= await hash(password, 12);
    return hashedPassword;
}

async function veriftyPassword(password, hashPassword){
    const isValid = await compare(password,hashPassword);
    return isValid;

}

export {hashPassword, veriftyPassword};