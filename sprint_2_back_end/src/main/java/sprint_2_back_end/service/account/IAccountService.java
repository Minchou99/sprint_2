package sprint_2_back_end.service.account;

import sprint_2_back_end.model.account.Account;
import sprint_2_back_end.service.IGeneralService;

public interface IAccountService extends IGeneralService<Account> {
    Account findAccountByUsername(String username);

    Account findAccountByEmail(String email);
}
