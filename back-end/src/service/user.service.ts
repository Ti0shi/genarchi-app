import userRepository from "../repository/user.repository";



async function postUser(name: string) {
    await userRepository.postUser(name);
}

async function postUsers(names: string[]) {
    await Promise.all(names.map((name) => postUser(name)));
}

export async function fetchUser() {
    const users = await userRepository.fetchUser();
    return users;
}

export default {
    postUser,
    postUsers,
    fetchUser
}
