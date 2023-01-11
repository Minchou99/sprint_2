package sprint_2_back_end.controller.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import sprint_2_back_end.model.account.Account;
import sprint_2_back_end.payload.request.SignInForm;
import sprint_2_back_end.payload.response.JwtRespone;
import sprint_2_back_end.payload.response.MessageRespone;
import sprint_2_back_end.security.jwt.JwtProvider;
import sprint_2_back_end.security.user_detail.MyUserDetail;
import sprint_2_back_end.service.account.IAccountService;

@CrossOrigin("*")
@RequestMapping("/api/auth")
@RestController
public class SecurityController {
    @Autowired
    private IAccountService accountService;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private AuthenticationManager authenticationManager;
    @PostMapping("/signin")
    public ResponseEntity<?> login(@RequestBody SignInForm signInForm) {

        Account accountValidate = accountService.findAccountByUsername(signInForm.getUsername());

        if (accountValidate == null) {
            return new ResponseEntity<>(new MessageRespone("username not found"), HttpStatus.NOT_FOUND);
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.createToken(authentication);

        MyUserDetail myUserDetail = (MyUserDetail) authentication.getPrincipal();

        JwtRespone respone = new JwtRespone(token, myUserDetail.getAuthorities(),
                myUserDetail.getAccount(),myUserDetail.getAccount().getUser());

        return ResponseEntity.ok(respone);
    }
}
