package sprint_2_back_end.model.account;

import com.fasterxml.jackson.annotation.JsonBackReference;
import sprint_2_back_end.model.user.User;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String password;

    private Integer enabled;

    @Column(columnDefinition = "boolean default false")
    private String statusLock;

    @Column(columnDefinition = "boolean default false")
    private String isDelete;

    @JsonBackReference
    @OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
    private Set<AccountRole> accountRoles;

    @OneToOne(mappedBy = "account")
    @JsonBackReference
    private User user;

    public Account() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getEnabled() {
        return enabled;
    }

    public void setEnabled(Integer enabled) {
        this.enabled = enabled;
    }

    public String getStatusLock() {
        return statusLock;
    }

    public void setStatusLock(String statusLock) {
        this.statusLock = statusLock;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }

    public Set<AccountRole> getAccountRoles() {
        return accountRoles;
    }

    public void setAccountRoles(Set<AccountRole> accountRoles) {
        this.accountRoles = accountRoles;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
