package sprint_2_back_end.controller.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sprint_2_back_end.dto.IPaymentDTO;
import sprint_2_back_end.model.payment.PaymentDTOShipping;
import sprint_2_back_end.model.payment.PaymentDetail;
import sprint_2_back_end.model.product.Product;
import sprint_2_back_end.model.user.User;
import sprint_2_back_end.service.payment.IPaymentDetailService;
import sprint_2_back_end.service.payment.IPaymentService;
import sprint_2_back_end.service.product.IProductService;
import sprint_2_back_end.service.user.IUserService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/payments")
public class PaymentRestController {

    @Autowired
    private IPaymentService paymentService;

    @Autowired
    private IPaymentDetailService paymentDetailService;

    @Autowired
    private IProductService productService;

    @Autowired
    private IUserService userService;

    @GetMapping("payment-list")
    public ResponseEntity<List<IPaymentDTO>> getPaymentList(@RequestParam String userId) {
        List<IPaymentDTO> payment = paymentService.getPaymentList(userId);
        if (payment.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(payment, HttpStatus.OK);
    }

    @GetMapping("add-to-cart")
    public ResponseEntity<HttpStatus> savePaymentDetail(@RequestParam String userId, @RequestParam String productId) {
        PaymentDetail paymentDetail = new PaymentDetail();
        paymentDetail.setPayment(paymentService.findById(Integer.parseInt(userId)));
        paymentDetail.setProduct(productService.findById(Integer.parseInt(productId)));
        paymentDetail.setQuantity(1);
        paymentDetail.setIsDelete("0");
        paymentDetailService.savePaymentDetail(paymentDetail);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/find-by-list-id")
    public ResponseEntity<List<IPaymentDTO>> findByListId(@RequestBody List<Integer> idList) {
        if (idList.size() == 0) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<IPaymentDTO> paymentList = paymentService.findByListId(idList);

        if (idList.size() != paymentList.size()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(paymentList, HttpStatus.OK);
    }

    @GetMapping("user")
    public ResponseEntity<User> getInformation(@RequestParam String userId) {
        User user = userService.getUser(userId);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody List<PaymentDTOShipping> paymentDtoGetShips) {
        List<Integer> idList = new ArrayList<>();
        for (PaymentDTOShipping payment : paymentDtoGetShips) {
            idList.add(payment.getId());
        }
        String shippingDescription = paymentDtoGetShips.get(0).getShippingDescription();
        paymentDetailService.updateByListId(idList, shippingDescription);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

