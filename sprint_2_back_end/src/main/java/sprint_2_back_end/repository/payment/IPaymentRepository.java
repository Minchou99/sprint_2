package sprint_2_back_end.repository.payment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sprint_2_back_end.dto.IPaymentDTO;
import sprint_2_back_end.model.payment.Payment;

import java.util.List;

public interface IPaymentRepository extends JpaRepository<Payment, Integer> {
    @Query(value = "select p.id as paymentId," +
            "pr.id as productId, " +
            "pd.id as paymentDetailId, " +
            "pr.name, " +
            "i.image_name as imageName, " +
            "pr.description, " +
            "pr.price, " +
            "pr.size, " +
            "pd.quantity " +
            "from payment as p\n" +
            "join payment_detail as pd " +
            "on pd.payment_id = p.id\n" +
            "join product as pr " +
            "on pr.id = pd.product_id \n" +
            "join image as i " +
            "on pr.id = i.product_id\n" +
            "where user_id = :userId " +
            "and pr.is_delete = 0 " +
            "and p.is_delete = 0 " +
            "and pd.is_delete = 0",
            nativeQuery = true)
    List<IPaymentDTO> getListPayments(@Param("userId") String userId);

    @Query(value = "select p.id as paymentId," +
            "pr.id as productId, " +
            "pd.id as paymentDetailId, " +
            "pr.name, " +
            "i.image_name as imageName, " +
            "pr.description, " +
            "pr.price, " +
            "pr.size, " +
            "pd.quantity " +
            "from payment as p\n" +
            "join payment_detail as pd " +
            "on pd.payment_id = p.id\n" +
            "join product as pr " +
            "on pr.id = pd.product_id \n" +
            "join image as i " +
            "on pr.id = i.product_id\n" +
            "where pd.id in :idList " +
            "and pr.is_delete = 0 " +
            "and p.is_delete = 0 " +
            "and pd.is_delete = 0",
            nativeQuery = true)
    List<IPaymentDTO> findByListId(@Param("idList") List<Integer> idList);

}
