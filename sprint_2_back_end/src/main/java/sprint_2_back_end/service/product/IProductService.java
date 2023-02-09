package sprint_2_back_end.service.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import sprint_2_back_end.model.product.Product;
import sprint_2_back_end.dto.IProductDTO;

import java.util.List;

public interface IProductService {
    List<Product> getListProduct();

    Page<IProductDTO> getListProductAndSearch(String name, Pageable pageable);

    Product findById(Integer id);

    IProductDTO getProductById(String id);
}
