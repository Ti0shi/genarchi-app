
import lateRepository from "../repository/late.repository";
import userService from "./user.service";

type LateByUser = {
    userId: string;
    name: string;
    lateInMinute: number;
};

type LateByUsers = {
    lates: LateByUser[];
};

async function fetchLate() {
    const lates = lateRepository.fetchLate();
    return lates;
}

async function fetchLateByUsers() {
    const users = await userService.fetchUser();
    const lates = await fetchLate();
    const lateByUsers: LateByUsers = { lates: [] };
    for (const user in users) {
        const { id, name } = users[user];
        const lateByUser: LateByUser = {
            userId: id,
            name,
            lateInMinute: 0,
        };
        lateByUsers.lates.push(lateByUser);
    }
    lates.forEach((late) => {
        const { userId, meetingstartedAt, arrivedAt } = late;
        const lateInMinute = Math.round((arrivedAt.getTime() - meetingstartedAt.getTime()) / 60000);
        const index = lateByUsers.lates.findIndex((late) => late.userId === userId);
        lateByUsers.lates[index].lateInMinute += lateInMinute;
    });
    return lateByUsers;
}

async function postLate(startedAt: Date, userId: string) {
    await lateRepository.postLate(startedAt, userId);
}


export default {
    fetchLate,
    fetchLateByUsers,
    postLate
}