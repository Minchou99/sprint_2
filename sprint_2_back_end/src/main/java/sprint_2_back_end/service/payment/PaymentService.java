package sprint_2_back_end.service.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sprint_2_back_end.dto.IPaymentDTO;
import sprint_2_back_end.model.payment.Payment;
import sprint_2_back_end.repository.payment.IPaymentRepository;

import java.util.List;
@Service
public class PaymentService implements IPaymentService{
    @Autowired
    private IPaymentRepository paymentRepository;

    @Override
    public List<IPaymentDTO> getPaymentList(String userId) {
        return paymentRepository.getListPayments(userId);
    }

    @Override
    public Payment findById(Integer id) {
        return paymentRepository.findById(id).orElse(null);
    }

    @Override
    public List<IPaymentDTO> findByListId(List<Integer> idList) {
        return paymentRepository.findByListId(idList);
    }

}
