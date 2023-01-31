package sprint_2_back_end.repository.product;

import org.springframework.data.jpa.repository.JpaRepository;
import sprint_2_back_end.model.product.Image;

public interface IImageRepository extends JpaRepository<Image,Integer> {
}
