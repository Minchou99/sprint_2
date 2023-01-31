package sprint_2_back_end.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import sprint_2_back_end.model.user.User;
import sprint_2_back_end.repository.account.IUserRepository;

import java.util.Optional;

public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public void remove(Integer id) {

    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.getUserByEmail(email);
    }

}
