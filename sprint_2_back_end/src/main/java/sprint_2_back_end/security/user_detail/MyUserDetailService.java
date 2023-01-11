package sprint_2_back_end.security.user_detail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import sprint_2_back_end.model.account.Account;
import sprint_2_back_end.service.account.IAccountService;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountService accountService;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountService.findAccountByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException(username);
        }
        return new MyUserDetail(account);
    }
}
