package sprint_2_back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sprint_2_back_end.model.product.Product;

public interface IProductDTO {
    String getId();
    String getName();
    String getColor();
    String getDescription();
    String getOrigin();
    String getSize();
    String getStartDate();
    String getCategory();
    String getImage();
    Double getPrice();
}
