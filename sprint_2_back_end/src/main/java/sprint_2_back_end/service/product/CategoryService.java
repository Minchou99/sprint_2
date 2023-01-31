package sprint_2_back_end.service.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sprint_2_back_end.model.product.Category;
import sprint_2_back_end.repository.product.ICategoryRepository;

import java.util.List;
@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository categoryRepository;

    @Override
    public List<Category> getListCategories() {
        return categoryRepository.findAll();
    }
}
