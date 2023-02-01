package sprint_2_back_end.repository.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sprint_2_back_end.model.product.Product;
import sprint_2_back_end.repository.IProductDTO;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select p.id, p.color," +
            "p.name, " +
            "p.description ," +
            "p.origin, " +
            "p.price, " +
            "p.size, " +
            "p.start_date as startDate," +
            "c.name as category, " +
            "i.image_name as image " +
            "from product as p\n" +
            "join image as i on p.id = i.product_id \n" +
            "join category as c on c.id = p.category_id\n" +
            "where p.is_delete = 0 " +
            "and p.name like %:name%",
            nativeQuery = true, countQuery = "select p.id, p.color,p.name, p.description ,p.origin, p.price, p.size, p.start_date as startDate,c.name as category, i.image_name as image from product as p\n" +
            "join image as i on p.id = i.product_id \n" +
            "join category as c on c.id = p.category_id\n" +
            "where p.is_delete = 0 and p.name like %:name%")
    Page<IProductDTO> getListProduct(@Param("name") String name,
                                   Pageable pageable);
}
