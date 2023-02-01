package sprint_2_back_end.service.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import sprint_2_back_end.model.product.Product;
import sprint_2_back_end.repository.IProductDTO;

import java.util.List;

public interface IProductService {
    List<Product> getListProduct();

    Page<IProductDTO> getListProductAndSearch(String name, Pageable pageable);
}
