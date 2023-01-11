package sprint_2_back_end.service.product;

import org.springframework.beans.factory.annotation.Autowired;
import sprint_2_back_end.model.product.Product;
import sprint_2_back_end.repository.IProductRepository;

import java.util.List;

public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> listProduct() {
        return productRepository.findAll();
    }
}
