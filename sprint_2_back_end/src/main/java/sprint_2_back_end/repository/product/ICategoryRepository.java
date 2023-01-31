package sprint_2_back_end.repository.product;

import org.springframework.data.jpa.repository.JpaRepository;
import sprint_2_back_end.model.product.Category;

public interface ICategoryRepository extends JpaRepository<Category,Integer> {
}
