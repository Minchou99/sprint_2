package sprint_2_back_end.repository.account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sprint_2_back_end.model.user.User;

public interface IUserRepository extends JpaRepository<User, Integer> {

    @Query(
            value = " select * from user where email = :email ", nativeQuery = true
    )
    User getUserByEmail(@Param("email") String email);

    boolean existsByEmail(String email);

}
