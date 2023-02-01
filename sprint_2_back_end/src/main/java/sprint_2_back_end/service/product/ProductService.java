package sprint_2_back_end.service.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import sprint_2_back_end.model.product.Product;
import sprint_2_back_end.repository.IProductDTO;
import sprint_2_back_end.repository.product.IProductRepository;

import java.util.List;
@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> getListProduct() {
        return productRepository.findAll();
    }

    @Override
    public Page<IProductDTO> getListProductAndSearch(String name, Pageable pageable) {
        return productRepository.getListProduct(name, pageable);
    }


}
