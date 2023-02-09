package sprint_2_back_end.service.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sprint_2_back_end.model.payment.PaymentDetail;
import sprint_2_back_end.repository.payment.IPaymentDetailRepository;

import java.util.List;

@Service
public class PaymentDetailService implements IPaymentDetailService {
    @Autowired
    private IPaymentDetailRepository paymentDetailRepository;

    @Override
    public void savePaymentDetail(PaymentDetail paymentDetail) {
        paymentDetailRepository.save(paymentDetail);
    }

    @Override
    public List<PaymentDetail> getPaymentDetailList() {
        return paymentDetailRepository.findAll();
    }

    @Override
    public void updateByListId(List<Integer> idList, String description) {
        paymentDetailRepository.updateByListId(idList, description);
    }
}
