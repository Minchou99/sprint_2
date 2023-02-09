package sprint_2_back_end.repository.payment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import sprint_2_back_end.model.payment.PaymentDetail;

import javax.transaction.Transactional;
import java.util.List;
@Repository
@Transactional
public interface IPaymentDetailRepository extends JpaRepository<PaymentDetail, Integer> {
    @Query(value = "select* from payment_detail order by payment_detail.id desc", nativeQuery = true)
    List<PaymentDetail> getPaymentDetailList();

    @Modifying
    @Query(value = "update payment_detail set description = :description,is_payment = 1, payment_date = localtime()" +
            " where id in :idList", nativeQuery = true)
    void updateByListId(@Param("idList") List<Integer> idList,
                        @Param("description") String description);
}
