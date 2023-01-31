package sprint_2_back_end.repository.account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sprint_2_back_end.model.account.Role;

import java.util.List;

public interface IRoleRepository extends JpaRepository<Role, Integer> {
    @Query(
            value = " select role.id, role.name from role " +
                    " join account_role on role.id = account_role.role_id " +
                    " where account_id = :accountId ", nativeQuery = true
    )
    List<Role> getListRoleByAccountId(@Param("accountId") Integer accountId);
}
