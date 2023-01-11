package sprint_2_back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import sprint_2_back_end.model.account.AccountRole;

@Transactional
public interface IAccountRoleRepository extends JpaRepository<AccountRole, Integer> {

    @Modifying
    @Query(value = " insert into account_role (account_id, role_id) values" +
            " ( :accountRoleId, :roleId ) ", nativeQuery = true)
    void saveAccountRole(@Param("accountRoleId") Integer accountRoleId,
                         @Param("roleId") Integer roleId);

}
