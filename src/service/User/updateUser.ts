import { UserProfile } from "../../types/User";
import { http } from "../api";

export default async (user: UserProfile) => {
    delete user?.life;
    delete user?.circleProfessionals;
    await http.put(`/crud/v1/${user.rectype}/${user._id}`, user);
};