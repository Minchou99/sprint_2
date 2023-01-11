package sprint_2_back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sprint_2_back_end.model.product.Product;

public interface IProductRepository extends JpaRepository<Product, Integer> {
}
