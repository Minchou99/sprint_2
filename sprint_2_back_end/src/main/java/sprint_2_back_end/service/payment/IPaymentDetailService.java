package sprint_2_back_end.service.payment;

import org.springframework.data.repository.query.Param;
import sprint_2_back_end.model.payment.PaymentDetail;

import java.util.List;

public interface IPaymentDetailService {
    void savePaymentDetail(PaymentDetail paymentDetail);
    List<PaymentDetail> getPaymentDetailList();

    void updateByListId(List<Integer> idList,
                        String description);
}
