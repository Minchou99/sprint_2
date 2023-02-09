package sprint_2_back_end.service.payment;

import sprint_2_back_end.dto.IPaymentDTO;
import sprint_2_back_end.model.payment.Payment;

import java.util.List;

public interface IPaymentService {

    List<IPaymentDTO> getPaymentList(String userId);

    Payment findById(Integer id);

    List<IPaymentDTO> findByListId(List<Integer> idList);



}
