package sprint_2_back_end.payload.response;

import org.springframework.security.core.GrantedAuthority;
import sprint_2_back_end.model.account.Account;
import sprint_2_back_end.model.user.User;

import java.util.Collection;

public class JwtRespone {
    private String token;
    private String type = "Bearer";
    private Account account;
    private User user;
    private Collection<? extends GrantedAuthority> roles;

    public JwtRespone() {
    }

    public JwtRespone(String token, Collection<? extends GrantedAuthority> authorities, Account account) {
        this.token = token;
        this.roles = authorities;
        this.account = account;
    }

    public JwtRespone(String token, Collection<? extends GrantedAuthority> authorities, Account account, User user) {
        this.token = token;
        this.roles = authorities;
        this.account = account;
        this.user = user;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }
}
