package sprint_2_back_end.service.user;

import sprint_2_back_end.model.user.User;
import sprint_2_back_end.service.IGeneralService;

public interface IUserService extends IGeneralService<User> {
    User getUserByEmail(String email);
}
