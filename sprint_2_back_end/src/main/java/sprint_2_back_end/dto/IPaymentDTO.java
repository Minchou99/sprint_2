package sprint_2_back_end.dto;

public interface IPaymentDTO {
    String getPaymentId();
    Integer getPaymentDetailId();
    String getName();
    String getDescription();
    String getSize();
    Integer getPrice();
    String getQuantity();
    String getImageName();
    String getProductId();
}
