package sprint_2_back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sprint_2_back_end.model.account.Account;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
    @Query(
            value = " select * from account where username = :username ",
            nativeQuery = true
    )
    Account findAccountByUsername(@Param("username") String username);
}
