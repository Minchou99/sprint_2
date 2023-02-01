package sprint_2_back_end.controller.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sprint_2_back_end.model.product.Category;
import sprint_2_back_end.model.product.Product;
import sprint_2_back_end.repository.IProductDTO;
import sprint_2_back_end.service.product.ICategoryService;
import sprint_2_back_end.service.product.IProductService;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/products")
public class ProductRestController {

    @Autowired
    private IProductService productService;

    @Autowired
    private ICategoryService categoryService;

    @GetMapping("category")
    public ResponseEntity<List<Category>> getListCategory() {
        List<Category> categoryList = categoryService.getListCategories();
        if (categoryList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }

    @GetMapping("product-list")
    public ResponseEntity<List<Product>> getProductList() {
        List<Product> products = productService.getListProduct();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("search")
    public ResponseEntity<Page<IProductDTO>> getAllAndSearch(@RequestParam String nameProduct, @PageableDefault(value = 3) Pageable pageable){
        Page<IProductDTO> productDTO = productService.getListProductAndSearch(nameProduct,pageable);
        if(productDTO.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDTO,HttpStatus.OK);
    }




}
